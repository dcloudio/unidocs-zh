# pages.json页面筛选

> HBuilderX 5.0+版本，pages.json页面筛选，快速运行到指定页面


## 页面筛选

> 适用场景：只想快速调试某个页面，避免加载其他页面。

**操作步骤**

1. 打开 `pages.json` 文件
2. 将光标放置在：
   - `pages` 节点下，或者
   - `subPackages` 节点下
3. 右键 → 页面筛选

<img src="https://web-ext-storage.dcloud.net.cn/doc/run/page-filter.jpg" style="zoom: 45%;" />

**结果**
- 提取当前光标所在页面到新的 `pages` 节点
- 将原来的 `pages` 或 `subPackages` 节点重命名为 `-pages` 或 `-subPackages`（临时屏蔽其他页面）。效果见下图。
- 保存文件并触发项目热更新（HMR 或重启）
- **状态提示：** 状态栏会显示已筛选页面。

<img src="https://web-ext-storage.dcloud.net.cn/doc/run/page-filter-view.jpg" style="zoom: 45%;" />

## 取消页面筛选

> 适用场景：调试完成，恢复原始页面结构。

**操作步骤**

1. 打开 `pages.json` 文件
2. 右键 → 取消页面筛选
3. 
<img src="https://web-ext-storage.dcloud.net.cn/doc/run/page-filter-cancel.jpg" style="zoom: 45%;" />

**结果**
- 删除临时生成的 `pages` 节点
- 将原先重命名的 `-pages` / `-subPackages` 节点恢复为 `pages` / `subPackages`
- 保存文件并触发项目热更新
- **状态提示：** 状态栏已恢复页面筛选标识。
