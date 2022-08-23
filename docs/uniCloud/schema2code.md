## schema2code代码生成系统
## schema2code code generation system

`DB Schema`里有大量的信息，其实有了这些信息，前端将无需自己开发表单维护界面，uniCloud可以自动生成新增、修改、列表、详情的前端页面，以及admin端的列表、新增、修改、删除全套功能。
There is a lot of information in `DB Schema`. In fact, with this information, the front-end will not need to develop its own form maintenance interface. uniCloud can automatically generate front-end pages for adding, modifying, list, and details, as well as lists, adding, and modifying on the admin side. , delete the full set of functions.

为强化表单的自定义性，`DB Schema`还扩展了label、componentForEdit、componentForShow、group、order等属性，以控制表单项在界面上的渲染控件。
In order to strengthen the customization of the form, `DB Schema` also extends the properties of label, componentForEdit, componentForShow, group, order, etc., to control the rendering controls of the form items on the interface.

`schema2code`不是简单的一键crud生成接口，它直接生成了可运行的页面。
`schema2code` is not a simple one-click crud generation interface, it directly generates a runnable page.

`schema2code`代码生成系统功能包括：
`schema2code` code generation system features include:
- 自动生成前端页面，新增、修改、列表、详情页面文件，分别是add.vue、edit.vue、list.vue和detail.vue。
- Automatically generate front-end pages, add, modify, list, and detail page files, which are add.vue, edit.vue, list.vue and detail.vue.
- 自动生成uniCloud admin页面，新增、修改、列表页面文件，分别是add.vue、edit.vue和list.vue。
- Automatically generate uniCloud admin pages, add, modify and list page files, namely add.vue, edit.vue and list.vue.
- 自动生成前端表单校验规则
- Automatically generate front-end form validation rules

表单校验工作，在前端和后端都需要做。在过去，这造成重复投入。
Form validation work needs to be done on both the front-end and the back-end. In the past, this has resulted in duplication of investment.

现在，前后端的表单验证都被统一了。
Now, the form validation of the front and back ends are unified.

开发者修改`DB Schema`并保存后，云端的校验规则直接生效。
After the developer modifies the `DB Schema` and saves it, the validation rules in the cloud take effect directly.

然后开发者需要把这套校验规则导入到前端项目中。即利用本功能。
Then developers need to import this set of validation rules into the front-end project. That is, use this function.

DCloud提供了`uni-forms`前端组件，该组件的表单校验规范完全符合`DB Schema`中的校验规则，实现云端统一。`uni-forms`组件地址：[https://ext.dcloud.net.cn/plugin?id=2773](https://ext.dcloud.net.cn/plugin?id=2773)
DCloud provides the `uni-forms` front-end component. The form validation specification of this component fully complies with the validation rules in `DB Schema` to achieve cloud unification. `uni-forms` component address: [https://ext.dcloud.net.cn/plugin?id=2773](https://ext.dcloud.net.cn/plugin?id=2773)


## 快速上手schema2code生成“通讯录”
## Quickly get started with schema2code to generate "address book"
> 成品演示地址:[http://contacts-demo.dcloud.net.cn/](http://contacts-demo.dcloud.net.cn/)
> Product demo address: [http://contacts-demo.dcloud.net.cn/](http://contacts-demo.dcloud.net.cn/)

### 首先创建“带schema的通讯录”数据表
### First create the "address book with schema" data table
1. 登录 [uniCloud控制台](https://unicloud.dcloud.net.cn)，选中“云数据库”
1. Log in to the [uniCloud console](https://unicloud.dcloud.net.cn), select "Cloud Database"
2. 点击新建数据表
2. Click New Data Table
  ![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/1ef863ed-d919-46f3-bd01-6092f2ed1e21.jpg)
3. 使用[OpenDB](opendb.md)表模板创建： `opendb-contacts` 通讯录表
3. Use the [OpenDB](opendb.md) table template to create: `opendb-contacts` address book table
  ![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/0e2ee195-05ae-4445-af41-45c41b2da70a.jpg)

### schema2code有两种方式
### There are two ways for schema2code
- 方式1：在HBuilderX中操作
- Method 1: Operate in HBuilderX
1.1 下载刚刚创建的通讯录表的schema
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/c2ea33f4-8619-41a6-bd14-5f9ce044985d.jpg)
1.2 项目根目录的 `uniCloud/database/opendb-contacts.schema.json`  文件上点击右键，或者在已打开的 Schema 编辑器点击右键.如果没有该菜单，请在插件市场安装插件：[https://ext.dcloud.net.cn/plugin?id=4684](https://ext.dcloud.net.cn/plugin?id=4684) 
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/82f69a99-c652-4cbc-a96b-1cfbe3d40529.jpg)
1.3 弹出一个对话框 `schema2code`，选择要导出的项目类型（uni-app用户端项目还是admin管理端项目），以及表字段名（去掉不需要在前端展现或编辑的字段）
![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/fb49118b-364e-412b-9900-f275803cce37.jpg)
1.4 点击对话框右下角的确定按钮，将执行导入动作，如果导入的文件和工程中的文件有差异将弹出文件对比框，继续操作并确认导入
1.4 Click the OK button in the lower right corner of the dialog box to execute the import action. If there is a difference between the imported file and the file in the project, a file comparison box will pop up, continue the operation and confirm the import

- 方式2：在uniCloud web控制台操作
- Method 2: Operate in the uniCloud web console
2.1 选中刚创建好的数据表`opendb-contacts`，点击进入表结构schema界面，点击按钮 “schema2code”
2.1 Select the newly created data table `opendb-contacts`, click to enter the table structure schema interface, and click the button "schema2code"
  ![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/3f93a350-2d13-4b8e-afb6-7dc367437b49.jpg)
2.2 点击“导入HBuilderX”或“下载zip”按钮，将生成的代码合并到自己的项目中
2.2 Click the "Import HBuilderX" or "Download zip" button to merge the generated code into your own project
  ![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/ba87a6b0-1519-11eb-81ea-f115fe74321c.png)

上图每个区域的解释如下：
The explanation of each area of the above figure is as follows:

- 区域A. 字段列表
- Area A. Field List

这里需要选择在前端表单页面出现的字段，无需用户在表单页面提交的字段（如create_date）不应勾选。
Here you need to select the fields that appear on the front-end form page, and fields that do not require the user to submit on the form page (such as create_date) should not be checked.

选择字段后，右侧会变化，自动生成代码。
After selecting the field, the right side will change and the code will be automatically generated.

- 区域B. 导出文件清单
- Area B. Export File List

这里显示了完整的工程结构。点击右下角的“下载zip”可以把这个工程下载到本地。点击这里的每个文件，在右侧会出现文件相应的代码。
The complete project structure is shown here. Click "Download zip" in the lower right corner to download the project locally. Click on each file here, and the corresponding code for the file will appear on the right.

只有自动生成的文件会在右侧显示代码，components目录下的三方库不会在右侧显示代码。
Only the automatically generated files will display the code on the right side, and the third-party libraries in the components directory will not display the code on the right side.

- 区域C. 组件列表
- Area C. List of Components

根据`DB Schema`生成的表单页面，是基于`uni-forms`组件的，该组件地址：[https://ext.dcloud.net.cn/plugin?id=2773](https://ext.dcloud.net.cn/plugin?id=2773)
The form page generated according to `DB Schema` is based on the `uni-forms` component, the component address: [https://ext.dcloud.net.cn/plugin?id=2773](https://ext. dcloud.net.cn/plugin?id=2773)

- 区域D. 扩展校验函数，每个函数是一个文件
- Area D. Extended validation functions, each function is a file

- 区域E. 表单校验规则，和表名一致，每个表一个文件
- Area E. Form validation rules, consistent with the table name, one file per table

在修改schema中的校验规则后，云端是直接生效的。前端部分则需要下载这个js文件到本地工程。
After modifying the validation rules in the schema, the cloud takes effect directly. The front-end part needs to download this js file to the local project.

如果直接已经下载过，需要二次更新，也可以在右侧复制源码，增量添加到前端工程的校验规则中。
If it has been downloaded directly and needs a second update, you can also copy the source code on the right side and add it incrementally to the verification rules of the front-end project.

- 区域F. 新建和编辑页面
- Area F. New and Editing Pages

自动生成的表单页面，包括新建页面和编辑页面。这些页面均基于clientDB，可直接使用。
Automatically generated form pages, including new pages and edit pages. These pages are based on clientDB and can be used directly.

- 区域G. 文件预览 (仅支持预览 自动生成的页面和校验规则)
- Area G. File preview (only supports preview of auto-generated pages and validation rules)

> 注意：需HBuilderX 3.0.5+ 支持
> Note: Requires HBuilderX 3.0.5+ support

> HBuilderX 3.1.15 schema2code 生成文件结构调整, 生成的 `pages.json` 改为 `page_init.json`，确认导入工程时自动合并到项目的 `pages.json`，`page_init.json`不会导入到工程中，仅在预览界面显示
> HBuilderX 3.1.15 schema2code generated file structure adjustment, the generated `pages.json` is changed to `page_init.json`, confirm that the `pages.json` of the project is automatically merged into the project when importing the project, and `page_init.json` will not be imported into In the project, it is only displayed in the preview interface

> HBuilderX 3.1.15 之前的版本 `pages.json` 导入时会覆盖用户工程中已有的 `pages.json`，导入确认时选择不导入该文件手动拷贝内容到 `pages.json`
> In versions before HBuilderX 3.1.15, `pages.json` will overwrite the existing `pages.json` in the user's project when importing. When confirming the import, choose not to import the file and manually copy the content to `pages.json`

**全程演示视频**：
**Full demonstration video**:
</br>
<video style="width:50vw;height:28vw;" id="video" preload="none" controls="controls"
	poster="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/a04e1d03-6d9f-43bf-a74b-80e9a5c31d7f.mp4?x-oss-process=video/snapshot,t_1000,f_jpg" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/a04e1d03-6d9f-43bf-a74b-80e9a5c31d7f.mp4"></video>






如果生成uniCloud admin页面，生成的列表页（list），需自行配置【排序字段】和【模糊搜索字段】。语法参考[JQL](jql.md)。
If you generate an uniCloud admin page, the generated list page (list) needs to configure the [sort field] and [fuzzy search field] by yourself. Syntax reference [JQL](jql.md).

以uniCloud admin内置页面【用户列表页】为例，要实现列表按注册时间排倒叙，要在列表上方的搜索框搜索，需在生成的list.vue页面的script区域修改如下配置：
Taking the built-in page of uniCloud admin [User List Page] as an example, to implement the list in reverse order according to the registration time, to search in the search box above the list, you need to modify the following configuration in the script area of the generated list.vue page:

```javascript
const dbOrderBy = 'register_date desc' // 排序字段，asc(升序)、desc(降序)
const dbSearchFields = ['username', 'role_name', 'mobile', 'email'] // 模糊搜索字段，支持模糊搜索的字段列表
```

`schema2code`是一个代码辅助生成工具。
`schema2code` is a code-assisted generation tool.

## 生成页面控件的默认策略
## Generate default strategy for page controls

`DB Schema`配置的字段，在生成页面时使用什么组件渲染？决定关系如下：
Fields configured by `DB Schema`, what component is used to render when the page is generated? The decision relationship is as follows:

- 如果配置了字段的componentForEdit和componentForShow属性，则严格按component的配置执行。
- If the componentForEdit and componentForShow properties of the field are configured, it is strictly executed according to the configuration of the component.
- 如果没有配置componentForEdit属性，那么生成表单界面时，默认有如下策略：
- If the componentForEdit attribute is not configured, the following strategies are used by default when the form interface is generated:
  * 字段类型为bool时，默认使用switch组件
  * When the field type is bool, the switch component is used by default
  * 字段类型为Array时，默认使用[uni-data-checkbox](https://ext.dcloud.net.cn/plugin?id=3456)组件(显示为多选框)
  * When the field type is Array, the [uni-data-checkbox](https://ext.dcloud.net.cn/plugin?id=3456) component is used by default (displayed as a check box)
  * 字段类型为int且使用enum时，0.5.3版本前使用uni-data-checkbox组件(显示为单选框)；0.5.3版本起调整为[uni-data-picker](https://ext.dcloud.net.cn/plugin?id=3796)
  * When the field type is int and enum is used, the uni-data-checkbox component (displayed as a radio button) is used before version 0.5.3; since version 0.5.3, it is adjusted to [uni-data-picker](https://ext .dcloud.net.cn/plugin?id=3796)
  * 字段类型为int时，默认使用[uni-easyinput](https://ext.dcloud.net.cn/plugin?id=3455)，如果是数字类型，会同时把input的键盘类型设为数字。但有例外：
  * When the field type is int, [uni-easyinput](https://ext.dcloud.net.cn/plugin?id=3455) is used by default. If it is a number type, the input keyboard type will be set to number at the same time. But there are exceptions:
	+ 0.5.3版本以前，如果是必填字段且配置了 `minimum` 或 `maximum`，则使用 slider 组件。否则使用 uni-easyinput
	+ Before version 0.5.3, if it is a required field and `minimum` or `maximum` is configured, the slider component is used. Otherwise use uni-easyinput
	+ 0.5.3版本起，`minimum` 和 `maximum` 范围小于等于 100，则生成 picker。否则 uni-easyinput
	+ Since version 0.5.3, the picker is generated when the range of `minimum` and `maximum` is less than or equal to 100. otherwise uni-easyinput
- 默认将title作为表单项的label显示在表单项前面，但如果在schema里配了label，则改为将label渲染在表单项前面
- By default, the title is displayed in front of the form item as the label of the form item, but if a label is configured in the schema, the label will be rendered in front of the form item instead
- description在渲染为input时会被设为placehold
- description will be set to placehold when rendered as input

schema2code作为一个插件，有单独的版本号，[详见](https://ext.dcloud.net.cn/plugin?id=4684)
As a plugin, schema2code has a separate version number, [see details](https://ext.dcloud.net.cn/plugin?id=4684)

可以看到schema2code使用了不少含有`-data-`中间关键字的组件，这种组件称为[datacom组件](https://uniapp.dcloud.io/component/datacom.html)，
It can be seen that schema2code uses a lot of components containing the `-data-` intermediate keyword. This component is called [datacom component](https://uniapp.dcloud.io/component/datacom.html),
它是一种可以包含数据的组件，并基于clientDB实现了云端数据的直接对接。[详见](https://uniapp.dcloud.io/component/datacom.html)
It is a component that can contain data, and realizes the direct connection of cloud data based on clientDB. [See details](https://uniapp.dcloud.io/component/datacom.html)

<!-- 
如果是时间戳，则需要新做一个时间选择组件
If it is a timestamp, you need to make a new time selection component
如果有枚举，默认为picker
If there is an enumeration, the default is picker
如果是number且有大小范围，默认用步进器
If it is a number and there is a size range, the stepper is used by default
 -->

## label属性
## label property

在[uni-forms组件](https://ext.dcloud.net.cn/plugin?id=2773)中，每个表单项都被包裹在`uni-forms-item`中，该子组件可设置label，即，在表单项如输入框前面或上面放置一个说明性名词。
In [uni-forms component](https://ext.dcloud.net.cn/plugin?id=2773), each form item is wrapped in `uni-forms-item`, which can be set as a subcomponent label, that is, placing a descriptive noun before or on a form item such as an input box.

在`DB Schema`的label属性中设置值后，生成前端表单页面时即可自动给`uni-forms-item`的label属性赋值。
After setting the value in the label attribute of `DB Schema`, the label attribute of `uni-forms-item` can be automatically assigned when generating the front-end form page.

如果未设置label属性，但配置了title属性，生成前端表单页面时会取title作为前端的label。
If the label attribute is not set, but the title attribute is configured, the title will be used as the front-end label when generating the front-end form page.

## component属性@component
## component property @component

定义该字段在表单中使用什么样的组件进行渲染，可设置前端的组件名和初始属性。
Define what kind of component is used for rendering the field in the form, and you can set the component name and initial properties of the front end.

这里的表单，指的是数据维护表单，比如新建记录或修改记录的表单。
The form here refers to a data maintenance form, such as a form for creating a new record or modifying a record.

生成的所有表单项，都在[uni-forms组件](https://ext.dcloud.net.cn/plugin?id=2773)下。
All generated form items are under [uni-forms components](https://ext.dcloud.net.cn/plugin?id=2773).

|属性|类型|描述|
|property|type|description|
|:-|:-|:-|
|name|string|组件名称|
|name|string|Component name|
|props|Object|组件属性|
|props|Object|Component Properties|
|children|String|子组件|
|children|String|Child Components|
|childrenData|Array|子组件数据|
|childrenData|Array|Child component data|


注意事项
Precautions
- `children` 属性, `{item}` 表示 `childrenData` 数组中的项
- `children` property, `{item}` represents an item in the `childrenData` array


示例
Example

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
## group attribute

将多个表单项合并在一个分组里显示。前端渲染时，group相同的表单项会自动合并在一个uni-group组件中，不同分组的表单项之间有间隔。该组件详见：[https://ext.dcloud.net.cn/plugin?id=3281](https://ext.dcloud.net.cn/plugin?id=3281)
Combine multiple form items to display in a group. During front-end rendering, form items with the same group will be automatically merged into a uni-group component, and there is a gap between form items in different groups. For details of this component, see: [https://ext.dcloud.net.cn/plugin?id=3281](https://ext.dcloud.net.cn/plugin?id=3281)

示例
Example

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
Generate form code with group component

```
<uni-forms>
  <uni-group>
    <uni-forms-item label="姓名"><input placeholder="请输入姓名" class="input" :hidden="false" :readonly="false" :disabled="false" /></uni-forms-item>
    <uni-forms-item label="年龄"><input  placeholder="请输入年龄" /></uni-forms-item>
  </uni-group>
```


## 生成级联选择@schema2picker
## Generate cascading picks @schema2picker

以城市选择举例。
Take city selection as an example.

<div align=center>
  <img style="max-width:550px;" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/e56e7cc0-50b8-11eb-97b7-0dc4655d6e68.png"/>
</div>

在这个业务里涉及2个表，一个是用户的地址信息表[uni-id-address](https://gitee.com/dcloud/opendb/tree/master/collection/uni-id-address)，一个是候选的省市区数据表[opendb-city-china](https://gitee.com/dcloud/opendb/tree/master/collection/opendb-city-china)。
There are two tables involved in this business, one is the user's address information table [uni-id-address](https://gitee.com/dcloud/opendb/tree/master/collection/uni-id-address), one is It is a candidate province and city data table [opendb-city-china](https://gitee.com/dcloud/opendb/tree/master/collection/opendb-city-china).

在用户地址信息表的schema配置enumType和enum。如下：
Configure enumType and enum in the schema of the user address information table. as follows:

用户地址表（完整的opendb表为[uni-id-address](https://gitee.com/dcloud/opendb/tree/master/collection/uni-id-address)，以下略做简化）
User address table (the complete opendb table is [uni-id-address](https://gitee.com/dcloud/opendb/tree/master/collection/uni-id-address), which is slightly simplified below)
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
The schema of the provincial and municipal data table [opendb-city-china](https://gitee.com/dcloud/opendb/tree/master/collection/opendb-city-china) is as follows. There are other detailed documents for tree data query, [see details](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=gettree)

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
These two tables are both [opendb](opendb.md) tables, which can be selected when creating a new table in the uniCloud web console. The opendb-city-china table comes with national provincial and municipal data.

在web控制台的 用户地址表，选择表结构schema，点schema2code生成页面，在生成的代码中会使用多级联选择组件 `<uni-data-picker>`，效果是懒加载的，选择省后，会根据省的选择去拉取市的数据。
In the user address table of the web console, select the table structure schema, click schema2code to generate the page, the multi-cascade selection component `<uni-data-picker>` will be used in the generated code, the effect is lazy loading, after selecting the province , will pull the city data according to the province's choice.

`<uni-data-picker>` 组件的文档另见：[https://ext.dcloud.net.cn/plugin?id=3796](https://ext.dcloud.net.cn/plugin?id=3796)
See also the documentation for the `<uni-data-picker>` component: [https://ext.dcloud.net.cn/plugin?id=3796](https://ext.dcloud.net.cn/plugin?id =3796)
