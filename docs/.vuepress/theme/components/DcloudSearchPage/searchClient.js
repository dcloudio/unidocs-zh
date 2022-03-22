import algoliasearch from 'algoliasearch/dist/algoliasearch-lite.esm.browser';
import { removeHighlightTags, groupBy } from '../../util'

let searchClient
function createSearchClient(appId, apiKey) {
  if (searchClient) return searchClient
  searchClient = algoliasearch(appId, apiKey);
  searchClient.addAlgoliaAgent('dcloudsearch', '1.0.0');

  return searchClient
}

export function search({ query, indexName, appId, apiKey, searchParameters = {}, snippetLength = 0, transformItems = () => { }, ...args }) {
  return createSearchClient(appId, apiKey)
    .search([
      {
        query,
        indexName,
        params: {
          attributesToRetrieve: [
            'hierarchy.lvl0',
            'hierarchy.lvl1',
            'hierarchy.lvl2',
            'hierarchy.lvl3',
            'hierarchy.lvl4',
            'hierarchy.lvl5',
            'hierarchy.lvl6',
            'content',
            'type',
            'url',
            'url_without_anchor',
            'category',
            'tag'
          ],
          attributesToSnippet: [
            `hierarchy.lvl1:${snippetLength}`,
            `hierarchy.lvl2:${snippetLength}`,
            `hierarchy.lvl3:${snippetLength}`,
            `hierarchy.lvl4:${snippetLength}`,
            `hierarchy.lvl5:${snippetLength}`,
            `hierarchy.lvl6:${snippetLength}`,
            `content:${snippetLength}`,
          ],
          snippetEllipsisText: '…',
          highlightPreTag: '<mark>',
          highlightPostTag: '</mark>',
          hitsPerPage: 20,
          ...searchParameters,
          ...args,
        },
      },
    ])
    .catch((error) => {
      throw error;
    })
    .then(({ results }) => {
      const { hits, hitsPerPage, nbHits, nbPages, page } = results[0];
      const sources = groupBy(hits, (hit) => removeHighlightTags(hit));
      return {
        hitsPerPage, nbHits, nbPages, page,
        hits: Object.values(sources).map(
          (items, index) => {
            return {
              sourceId: `hits${index}`,
              onSelect({ item, event }) {
                // saveRecentSearch(item);

                // if (!event.shiftKey && !event.ctrlKey && !event.metaKey) {
                //   onClose();
                // }
              },
              getItemUrl({ item }) {
                return item.url;
              },
              getItems() {
                return Object.values(
                  groupBy(items, (item) => item.hierarchy.lvl1)
                )
                  .map(transformItems)
                  .map((groupedHits) =>
                    groupedHits.map((item) => {
                      return {
                        ...item,
                        __docsearch_parent:
                          item.type !== 'lvl1' &&
                          groupedHits.find(
                            (siblingItem) =>
                              siblingItem.type === 'lvl1' &&
                              siblingItem.hierarchy.lvl1 ===
                              item.hierarchy.lvl1
                          ),
                      };
                    })
                  ).flat();
              },
            };
          }
        )
      }
    });
}