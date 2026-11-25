import { defineConfig } from 'docs-sync-cli';

// @ts-expect-error
const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  site: 'unidocs-zh',

  cacheDir: '.docs-sync-cache',

  sources: {
    common: {
      repo: isDev ? '/Users/lxh/DCloud/git_projects/docs-common' : 'https://gitcode.com/dcloud/docs-common.git',
      branch: 'main',
      manifest: 'docs-sync.manifest.json',
      outDir: 'docs',
    }
  },
});
