<!-- UTSCOMJSON.image.name -->

<!-- UTSCOMJSON.image.description -->

<!-- UTSCOMJSON.image.attrubute -->

## 图标格式
- [x] bmp
- [x] gif
- [x] ico
- [x] jpg
- [x] png
- [x] webp
- [x] heic（Android10+支持）

如需其他图片格式，可搜索插件市场或自行开发uts组件插件。

## src路径支持说明

- 支持本地路径相对路径：比如根目录/、上级目录../、子目录subdir/。但不支持页面当前目录。
- 支持本地绝对路径
- 支持网络路径
- 本地路径的大小写不敏感

## 网络图缓存说明

image组件内部使用facebook的fresco库，自带缓存策略。

<!-- UTSCOMJSON.image.compatibility -->

<!-- UTSCOMJSON.image.reference -->

## bug&tips
- 目前src不支持页面当前目录的图片。