### json 文件引入

`uni-app vue3` 和 `uni-app x` 项目支持引入 `json` 文件。

`js | ts | uts` 文件或 `script` 标签内引入 `json` 文件时，可以使用相对路径或绝对路径，例如:

```js
// 绝对路径，@指向项目根目录，在cli项目中@指向src目录
import pagesJson from '@/pages.json';
// 相对路径
import pagesJson from '../../common/pages.json';
```

导入 `json` 文件时支持解构，此时会根据导入内容进行摇树，减小包体积，例如：
```js
import { pages } from '@/pages.json';
```

导入的 `json` 文件内部支持条件编译, 导入的结果是根据条件编译规则进行处理后的结果，以如下 `json` 文件为例：
```json
{
  "pages": [{
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "index"
      }
    },
    // #ifdef APP
    {
      "path": "pages/index/app",
      "style": {
        "navigationBarTitleText": "app"
      }
    },
    // #endif 
    // #ifdef H5 
    {
      "path": "pages/index/web",
      "style": {
        "navigationBarTitleText": "web"
      }
    }
    // #endif 
  ],
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "uni-app",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8"
  },
  "uniIdRouter": {}
}
```
在 `App` 平台导入的结果中，`pages` 下只包含 `path` 为 `pages/index/index` 和 `pages/index/app` 的对象。\
在 `Web` 平台导入的结果中，`pages` 下只包含 `path` 为 `pages/index/index` 和 `pages/index/web` 的对象。
