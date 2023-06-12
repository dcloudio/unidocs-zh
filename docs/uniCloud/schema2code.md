## schema2code代码生成系统

`DB Schema`里有大量的信息，其实有了这些信息，前端将无需自己开发表单维护界面，uniCloud可以自动生成新增、修改、列表、详情的前端页面，以及admin端的列表、新增、修改、删除全套功能。

为强化表单的自定义性，`DB Schema`还扩展了label、componentForEdit、componentForShow、group、order等属性，以控制表单项在界面上的渲染控件。

`schema2code`不是简单的一键crud生成接口，它直接生成了可运行的页面。

`schema2code`代码生成系统功能包括：
- 自动生成前端页面，新增、修改、列表、详情页面文件，分别是add.vue、edit.vue、list.vue和detail.vue。
- 自动生成uniCloud admin页面，新增、修改、列表页面文件，分别是add.vue、edit.vue和list.vue。
- 自动生成前端表单校验规则

表单校验工作，在前端和后端都需要做。在过去，这造成重复投入。

现在，前后端的表单验证都被统一了。

开发者修改`DB Schema`并保存后，云端的校验规则直接生效。

然后开发者需要把这套校验规则导入到前端项目中。即利用本功能。

DCloud提供了`uni-forms`前端组件，该组件的表单校验规范完全符合`DB Schema`中的校验规则，实现云端统一。`uni-forms`组件地址：[https://ext.dcloud.net.cn/plugin?id=2773](https://ext.dcloud.net.cn/plugin?id=2773)


## 快速上手schema2code生成“通讯录”
> 成品演示地址:[http://contacts-demo.dcloud.net.cn/](http://contacts-demo.dcloud.net.cn/)

### 首先创建“带schema的通讯录”数据表
1. 登录 [uniCloud控制台](https://unicloud.dcloud.net.cn)，选中“云数据库”
2. 点击新建数据表
  ![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20210303135233.jpg)
3. 使用[OpenDB](opendb.md)表模板创建： `opendb-contacts` 通讯录表
  ![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/02.jpg)

### schema2code有两种方式
- 方式1：在HBuilderX中操作
1.1 下载刚刚创建的通讯录表的schema
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/1.%E4%B8%8B%E8%BD%BD%E5%88%9A%E5%88%9A%E5%88%9B%E5%BB%BA%E7%9A%84%E9%80%9A%E8%AE%AF%E5%BD%95%E8%A1%A8%E7%9A%84schema.jpg)
1.2 项目根目录的 `uniCloud/database/opendb-contacts.schema.json`  文件上点击右键，或者在已打开的 Schema 编辑器点击右键.如果没有该菜单，请在插件市场安装插件：[https://ext.dcloud.net.cn/plugin?id=4684](https://ext.dcloud.net.cn/plugin?id=4684) 
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2.%E5%9C%A8%E5%AF%B9%E5%BA%94%E7%9A%84schema%E6%96%87%E4%BB%B6%E5%8F%B3%E9%94%AE%E7%82%B9%E5%87%BBschema2code.jpg)
1.3 弹出一个对话框 `schema2code`，选择要导出的项目类型（uni-app用户端项目还是admin管理端项目），以及表字段名（去掉不需要在前端展现或编辑的字段）
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/3.11.jpg)
1.4 点击对话框右下角的确定按钮，将执行导入动作，如果导入的文件和工程中的文件有差异将弹出文件对比框，继续操作并确认导入

- 方式2：在uniCloud web控制台操作
2.1 选中刚创建好的数据表`opendb-contacts`，点击进入表结构schema界面，点击按钮 “schema2code”
  ![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/4.jpg)
2.2 点击“导入HBuilderX”或“下载zip”按钮，将生成的代码合并到自己的项目中
  ![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/schema-export.png)

上图每个区域的解释如下：

- 区域A. 字段列表

这里需要选择在前端表单页面出现的字段，无需用户在表单页面提交的字段（如create_date）不应勾选。

选择字段后，右侧会变化，自动生成代码。

- 区域B. 导出文件清单

这里显示了完整的工程结构。点击右下角的“下载zip”可以把这个工程下载到本地。点击这里的每个文件，在右侧会出现文件相应的代码。

只有自动生成的文件会在右侧显示代码，components目录下的三方库不会在右侧显示代码。

- 区域C. 组件列表

根据`DB Schema`生成的表单页面，是基于`uni-forms`组件的，该组件地址：[https://ext.dcloud.net.cn/plugin?id=2773](https://ext.dcloud.net.cn/plugin?id=2773)

- 区域D. 扩展校验函数，每个函数是一个文件

- 区域E. 表单校验规则，和表名一致，每个表一个文件

在修改schema中的校验规则后，云端是直接生效的。前端部分则需要下载这个js文件到本地工程。

如果直接已经下载过，需要二次更新，也可以在右侧复制源码，增量添加到前端工程的校验规则中。

- 区域F. 新建和编辑页面

自动生成的表单页面，包括新建页面和编辑页面。这些页面均基于clientDB，可直接使用。

- 区域G. 文件预览 (仅支持预览 自动生成的页面和校验规则)

> 注意：需HBuilderX 3.0.5+ 支持

> HBuilderX 3.1.15 schema2code 生成文件结构调整, 生成的 `pages.json` 改为 `page_init.json`，确认导入工程时自动合并到项目的 `pages.json`，`page_init.json`不会导入到工程中，仅在预览界面显示

> HBuilderX 3.1.15 之前的版本 `pages.json` 导入时会覆盖用户工程中已有的 `pages.json`，导入确认时选择不导入该文件手动拷贝内容到 `pages.json`

**全程演示视频**：
</br>
<video style="width:50vw;height:28vw;" id="video" preload="none" controls="controls"
	poster="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/schema2code%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%96%B9%E5%BC%8F.mp4?x-oss-process=video/snapshot,t_1000,f_jpg" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/schema2code%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%96%B9%E5%BC%8F.mp4"></video>






如果生成uniCloud admin页面，生成的列表页（list），需自行配置【排序字段】和【模糊搜索字段】。语法参考[JQL](jql.md)。

以uniCloud admin内置页面【用户列表页】为例，要实现列表按注册时间排倒叙，要在列表上方的搜索框搜索，需在生成的list.vue页面的script区域修改如下配置：

```javascript
const dbOrderBy = 'register_date desc' // 排序字段，asc(升序)、desc(降序)
const dbSearchFields = ['username', 'role_name', 'mobile', 'email'] // 模糊搜索字段，支持模糊搜索的字段列表
```

`schema2code`是一个代码辅助生成工具。

## 生成页面控件的默认策略

`DB Schema`配置的字段，在生成页面时使用什么组件渲染？决定关系如下：

- 如果配置了字段的componentForEdit和componentForShow属性，则严格按component的配置执行。
- 如果没有配置componentForEdit属性，那么生成表单界面时，默认有如下策略：
  * 字段类型为bool时，默认使用switch组件
  * 字段类型为Array时，默认使用[uni-data-checkbox](https://ext.dcloud.net.cn/plugin?id=3456)组件(显示为多选框)
  * 字段类型为int且使用enum时，0.5.3版本前使用uni-data-checkbox组件(显示为单选框)；0.5.3版本起调整为[uni-data-picker](https://ext.dcloud.net.cn/plugin?id=3796)
  * 字段类型为int时，默认使用[uni-easyinput](https://ext.dcloud.net.cn/plugin?id=3455)，如果是数字类型，会同时把input的键盘类型设为数字。但有例外：
	+ 0.5.3版本以前，如果是必填字段且配置了 `minimum` 或 `maximum`，则使用 slider 组件。否则使用 uni-easyinput
	+ 0.5.3版本起，`minimum` 和 `maximum` 范围小于等于 100，则生成 picker。否则 uni-easyinput
- 默认将title作为表单项的label显示在表单项前面，但如果在schema里配了label，则改为将label渲染在表单项前面
- description在渲染为input时会被设为placehold

schema2code作为一个插件，有单独的版本号，[详见](https://ext.dcloud.net.cn/plugin?id=4684)

可以看到schema2code使用了不少含有`-data-`中间关键字的组件，这种组件称为[datacom组件](https://uniapp.dcloud.io/component/datacom.html)，
它是一种可以包含数据的组件，并基于clientDB实现了云端数据的直接对接。[详见](https://uniapp.dcloud.io/component/datacom.html)

<!-- 
如果是时间戳，则需要新做一个时间选择组件
如果有枚举，默认为picker
如果是number且有大小范围，默认用步进器
 -->

## label属性

在[uni-forms组件](https://ext.dcloud.net.cn/plugin?id=2773)中，每个表单项都被包裹在`uni-forms-item`中，该子组件可设置label，即，在表单项如输入框前面或上面放置一个说明性名词。

在`DB Schema`的label属性中设置值后，生成前端表单页面时即可自动给`uni-forms-item`的label属性赋值。

如果未设置label属性，但配置了title属性，生成前端表单页面时会取title作为前端的label。

## component属性@component

定义该字段在表单中使用什么样的组件进行渲染，可设置前端的组件名和初始属性。

这里的表单，指的是数据维护表单，比如新建记录或修改记录的表单。

生成的所有表单项，都在[uni-forms组件](https://ext.dcloud.net.cn/plugin?id=2773)下。

|属性|类型|描述|
|:-|:-|:-|
|name|string|组件名称|
|props|Object|组件属性|
|children|String|子组件|
|childrenData|Array|子组件数据|


注意事项
- `children` 属性, `{item}` 表示 `childrenData` 数组中的项


示例

```json
{
  "bsonType": "object",
  "required": ["name", "nickname"],
  "permission": {
    "read": false,
    "create": false,
    "update": false,
    "delete": false
  },
  "properties": {
    "_id": {
      "description": "存储文档 ID（用户 ID），系统自动生成"
    },
    "name": {
      "bsonType": "string",
      "label": "姓名",
      "minLength": 2,
      "maxLength": 10,
      "errorMessage": {
        "required": "{label}必填",
        "minLength": "{label}不能小于{minLength}个字符"
      },
      "permission": {
        "read": false,
        "write": false
      },
      "component": {
        "name": "input",
        "props": {
          "placeholder": "请输入姓名"
        }
      }
    },
    "nickname": {
      "bsonType": "string",
      "description": "用户昵称",
      "label": "昵称",
      "errorMessage": "{label}无效",
      "component": {
        "name": "input",
        "props": {
          "placeholder": "请输入昵称"
        }
      }
    },
    "hobby": {
      "bsonType": "array",
      "description": "爱好",
      "label": "爱好",
      "enum": [
        {
          "text": "游泳",
          "value": 1
        },
        {
          "text": "骑行",
          "value": 2
        },
        {
          "text": "音乐",
          "value": 3
        },
        {
          "text": "美术",
          "value": 4
        }
      ]
    },
    "gender": {
      "bsonType": "int",
      "description": "用户性别：0 未知 1 男性 2 女性",
      "label": "性别",
      "enum": [{
        "text": "未知",
        "value": 0
      }, {
        "text": "男",
        "value": 1
      }, {
        "text": "女",
        "value": 2
      }],
      "errorMessage": "{label}无效"
    },
    "email": {
      "bsonType": "string",
      "description": "邮箱地址",
      "format": "email",
      "label": "邮箱",
      "errorMessage": "{label}无效"
    },
    "language": {
      "bsonType": "string",
      "label": "自定义children",
      "component": {
        "name": "select",
        "children": "<option value=\"{value}\">{label}</option>",
        "childrenData": [{"label": "中文简体", "value": "zh-cn"}]
      }
    }
  }
}
```


## group属性

将多个表单项合并在一个分组里显示。前端渲染时，group相同的表单项会自动合并在一个uni-group组件中，不同分组的表单项之间有间隔。该组件详见：[https://ext.dcloud.net.cn/plugin?id=3281](https://ext.dcloud.net.cn/plugin?id=3281)

示例

```json
{
  "bsonType": "object",
  "required": ["name"],
  "properties": {
    "name": {
      "bsonType": "string",
      "label": "姓名",
      "group": "1",
      "minLength": 2,
      "maxLength": 8,
      "errorMessage": {
        "required": "{label}必填",
        "minLength": "{label}不能小于{{minLength}}个字符",
        "maxLength": "{label}不能大于{{maxLength}}个字符"
      },
      "component": {
        "name": "uni-field",
        "props": {
          "placeholder": "请输入姓名",
          "class": "input",
          "hidden": false,
          "readonly": false,
          "disabled": false,
          "value": null
        }
      }
    },
    "age": {
      "bsonType": "int",
      "label": "年龄",
      "group": "1",
      "minimum": 0,
      "maximum": 150,
      "errorMessage": "{label}应该大于 {minimum} 岁，小于 {maximum} 岁",
      "component": {
        "name": "uni-field",
        "props": {
          "placeholder": "请输入年龄",
          "value": null
        }
      }
    }
  }
}
```


生成带有group组件的表单代码

```
<uni-forms>
  <uni-group>
    <uni-forms-item label="姓名"><input placeholder="请输入姓名" class="input" :hidden="false" :readonly="false" :disabled="false" /></uni-forms-item>
    <uni-forms-item label="年龄"><input  placeholder="请输入年龄" /></uni-forms-item>
  </uni-group>
```


## 生成级联选择@schema2picker

以城市选择举例。

<div align=center>
  <img style="max-width:550px;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-data-picker.png"/>
</div>

在这个业务里涉及2个表，一个是用户的地址信息表[uni-id-address](https://gitee.com/dcloud/opendb/tree/master/collection/uni-id-address)，一个是候选的省市区数据表[opendb-city-china](https://gitee.com/dcloud/opendb/tree/master/collection/opendb-city-china)。

在用户地址信息表的schema配置enumType和enum。如下：

用户地址表（完整的opendb表为[uni-id-address](https://gitee.com/dcloud/opendb/tree/master/collection/uni-id-address)，以下略做简化）
```json
{
  "bsonType": "object",
  "required": ["city_id"],
  "properties": {
    "_id": {
      "description": "ID，系统自动生成"
    },
    "city_id": {
      "bsonType": "string",
      "title": "地址",
      "description": "城市编码",
      "foreignKey": "opendb-city-china.code",
      "enumType": "tree",
      "enum": {
        "collection": "opendb-city-china",
        "orderby": "value asc",
        "field": "code as value, name as text, eq(type, 2) as isleaf"
      }
    }
  }
}
```

省市区数据表 [opendb-city-china](https://gitee.com/dcloud/opendb/tree/master/collection/opendb-city-china) 的schema如下。树形数据查询另有详细文档，[详见](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=gettree)

```json
{
  "bsonType": "object",
  "required": ["code", "name"],
  "permission": {
    "read": true,
    "create": false,
    "update": false,
    "delete": false
  },
  "properties": {
    "_id": {
      "description": "ID，系统自动生成"
    },
    "code": {
      "bsonType": "string",
      "description": "编码"
    },
    "parent_code": {
      "bsonType": "string",
      "description": "父级编码",
      "parentKey": "code"
    },
    "name": {
      "bsonType": "string",
      "description": "城市名称",
      "title": "城市"
    },
    "type": {
      "bsonType": "int",
      "description": "城市类型；0省，1市，2区"
    }
  }
}
```

这2个表都是[opendb](opendb.md)表，在uniCloud web控制台新建表时可以选择。opendb-city-china表自带全国省市区数据。

在web控制台的 用户地址表，选择表结构schema，点schema2code生成页面，在生成的代码中会使用多级联选择组件 `<uni-data-picker>`，效果是懒加载的，选择省后，会根据省的选择去拉取市的数据。

`<uni-data-picker>` 组件的文档另见：[https://ext.dcloud.net.cn/plugin?id=3796](https://ext.dcloud.net.cn/plugin?id=3796)
