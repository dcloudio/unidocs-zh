## 简介

为了支持**组件加密**功能，**自定义组件**提供了一个**JSON配置文件**，用于配置组件的各项属性。
* json配置文件需要在组件同级目录下，与组件文件名一致，后缀为`.easycom.json`。
* 例: 组件文件名为：`button.vue`，json配置文件名就是：`button.easycom.json`

## 配置文件结构

```JSON
{
  "name": "Test",
  "description": {
    "value": "测试",
    "kind": "markdown"
  },
  "attributes": [
    {
      "name": "color",
      "description": {
        "value": "颜色",
        "kind": "markdown"
      },
      "type": "string",
      "values": [
        {
          "name": "red",
          "description": "红色"
        }
      ]
    },
    {
      "name": "[event]event",
      "description": {
        "value": "测试用事件",
        "kind": "markdown"
      },
      "type": "(event: UniEvent) => void"
    }
  ],
  "example": "例子",
  "tutorial": "教程",
}
```

## 数据结构

```ts
interface MarkupContent {
    kind: 'plaintext' | 'markdown';
    value: string;
}

interface Value {
    name: string;
    description?: string | MarkupContent;

}

interface VueComponentAttributesData{
    name: string;
    type: string;
    description?: string | MarkupContent;
    values?: Value[];
}

interface VueComponentData{
    name: string;
    description?: string | MarkupContent;
    example?: string;
    tutorial?: string;
    attributes: VueComponentAttributesData[];
}
```

## 配置项详解

### 组件项

| 关键字      | 描述           | 说明                                                                                                                                        |
| :---------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| name        | 组件名称。     |                                                                                                                                             |
| description | 组件描述。     | 描述信息，可以写**string类型**，也可以写**MarkupContent类型**，MarkupContent类型下， **kind为markdown时**，会将描述按markdown格式进行渲染。 |
| example     | 组件示例。     |                                                                                                                                             |
| tutorial    | 组件向导教程。     |                                                                                                                                             |
| attributes  | 组件属性列表。 |                                                                                                                                             |

### 属性项

| 关键字      | 描述       | 说明                                                                                                                                        |
| :---------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| name        | 属性名称。 | 属性信息，分为**普通属性**和**事件属性**。 如果是事件属性，需要在名称前方添加`[event]`前缀。                                                |
| description | 属性描述。 | 描述信息，可以写**string类型**，也可以写**MarkupContent类型**，MarkupContent类型下， **kind为markdown时**，会将描述按markdown格式进行渲染。 |
| type        | 属性类型。 |                                                                                                                                             |
| values      | 属性值。   | 属性值列表。                                                                                                                                |

### 属性值项

| 关键字      | 描述       | 说明                                                                                                                                        |
| :---------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| name        | 属性值名称。 |                                                 |
| description | 属性描述。 | 描述信息，可以写**string类型**，也可以写**MarkupContent类型**，MarkupContent类型下， **kind为markdown时**，会将描述按markdown格式进行渲染。 |
