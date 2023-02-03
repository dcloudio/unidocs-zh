## 什么是索引
## What is an index

所有数据库都支持索引，索引文件通过额外占用磁盘空间，提供了一个快速查询记录的方案。查询时先查询索引文件，根据索引文件的指示再去查询真实的数据，在数据量较大时有明显的性能优势。
All databases support indexes, and index files provide a quick way to query records by taking up additional disk space. When querying, query the index file first, and then query the real data according to the instructions of the index file, which has obvious performance advantages when the amount of data is large.

索引有两个用途：
Indexes serve two purposes:

1. 在集合中为查询条件的**字段**建立索引，是保证数据库性能、提升用户体验的重要手段。
1. Indexing the **field** of the query condition in the collection is an important means to ensure database performance and improve user experience.
2. 索引可以控制字段中各记录的唯一性。比如某字段被设为唯一索引，则这个字段在整个数据记录集合中的值不会有重复。如果是普通唯一索引，则意味着该字段不能为null。如果是稀疏索引，则代表可以为null，但不为null的值不能重复。
2. The index can control the uniqueness of each record in the field. For example, if a field is set as a unique index, the value of this field will not be repeated in the entire data record set. If it is a normal unique index, it means that the field cannot be null. In the case of a sparse index, the representation can be null, but non-null values cannot be repeated.

如果您的查询操作包含了过滤条件（包含等值测试和范围过滤）或者是排序功能，或者需要唯一性，则要考虑给集合的相关字段添加索引。通常来说需要为以下方法/属性内用到的**字段**添加索引`where、match、orderBy、sort`，还包括clientDB内`getTree`和`getTreePath`的`startWith属性`。
If your query operation includes filtering conditions (including equivalence testing and range filtering) or sorting, or requires uniqueness, consider adding indexes to the relevant fields of the collection. Generally speaking, it is necessary to add indexes `where, match, orderBy, sort` for the **field** used in the following methods/properties, and also include the `startWith attribute` of `getTree` and `getTreePath` in clientDB.

如果相关字段没有设为索引，当数据表的记录数量变大后，查询会变慢甚至超时报错。这点尤其需要注意。已经有一些开发者遭遇线上故障。开发时没有配索引，因为数据量小而没有性能问题。上线后数据量越来越大，查询越来越慢，直到超时，引发线上事故。
If the related field is not set as an index, when the number of records in the data table increases, the query will slow down or even get an error over time. This is especially important to note. Some developers have already experienced online glitches. There is no index during development, because the amount of data is small and there is no performance problem. After going online, the amount of data becomes larger and larger, and the query becomes slower and slower until it times out, causing online accidents.

## 添加索引
## add index

### uniCloud web控制台添加
### uniCloud web console added

1. 进入 [uniCloud 控制台](https://console.cloud.tencent.com/tcb)。
1. Go to the [uniCloud console](https://console.cloud.tencent.com/tcb).
2. 切换到【云数据库】标签页，并选择需要添加索引的集合，进入索引管理 tab 页，如下图。
2. Switch to the [Cloud Database] tab, and select the collection to be indexed, and enter the index management tab, as shown in the figure below.

  ![web控制台添加索引](https://web-assets.dcloud.net.cn/unidoc/zh/unicloud-web-index.jpg)  
  ![Add index in web console](https://web-assets.dcloud.net.cn/unidoc/zh/unicloud-web-index.jpg)
  
3. 添加索引。
3. Add an index.
  
  ![添加索引](https://web-assets.dcloud.net.cn/unidoc/zh/composed-index.jpg)
  ![Add Index](https://web-assets.dcloud.net.cn/unidoc/zh/composed-index.jpg)

注意：
Notice:
- 索引是支持多字段组合的，所以不是简单的设某个字段为索引。而是需要先给索引起一个name，然后在该索引下配置1个或多个字段。
- The index supports the combination of multiple fields, so it is not simply to set a field as an index. Instead, you need to give the index a name, and then configure one or more fields under the index.
- 索引字段的排序，指查询语句中的orderby的顺序。如果实际查询是需要倒叙，那么索引就设为倒叙，这样查询速度才能变快。
- The order of the index field, which refers to the order of the orderby in the query statement. If the actual query requires flashback, then the index is set to flashback, so that the query speed can be faster.

### 在db_init.json内配置集合索引
### Configure collection index in db_init.json

在db_init.json内用如下写法可以给特定集合设置索引（推荐在服务空间初始化时使用）
In db_init.json, you can set an index for a specific collection by writing the following method (recommended to use it when the service space is initialized)

```json
{
  "opendb-news-article": {
    "data": [],
    "index":[{
      "IndexName": "user_article_", // 索引名称
      "MgoKeySchema": { // 索引规则
          "MgoIndexKeys": [{
              "Name": "user_id", // 索引字段
              "Direction": "1" // 索引方向，1：ASC-升序，-1：DESC-降序，2dsphere：地理位置
          },{
              "Name": "article_id", // 索引字段
              "Direction": "1" // 索引方向，1：ASC-升序，-1：DESC-降序，2dsphere：地理位置
          }],
          "MgoIsUnique": false // 索引是否唯一
      }
    }]
  }
}
```

## 单字段索引
## Single field index

您可以为查询条件对应的字段创建单字段索引，如果该字段是嵌套字段，可以使用"点表示法" 。例如对如下格式的记录中的`color`字段进行索引时，可以用`style.color`表示。
You can create a single-field index for the field corresponding to the query condition. If the field is a nested field, you can use "dot notation". For example, when indexing the `color` field in a record of the following format, it can be represented by `style.color`.

```json
{
  "_id": "",
  "style": {
    "color": ""
  }
}
```

在设置单字段索引时，可任意指定索引的排序为升序或降序，数据库总能在对索引字段的排序查询中，进行正确的排序。
When setting a single-field index, you can arbitrarily specify that the index is sorted in ascending or descending order, and the database can always perform the correct sorting in the sorting query of the index field.

## 组合索引
## Composite index

组合索引即一个索引包含多个字段。当查询条件使用的字段包含在索引定义的所有字段或前缀字段里时，会命中索引，优化查询性能。
A composite index is an index that contains multiple fields. When the fields used by the query conditions are included in all the fields or prefix fields defined by the index, the index will be hit and the query performance will be optimized.

> 索引前缀即组合索引的字段中定义的前 1 到多个字段，例如对集合 **students** 中 **name**, **age**, **score** 三个字段按顺序定义了组合索引，那么该索引的前缀包含
> The index prefix is the first 1 or more fields defined in the fields of the combined index, for example, the three fields **name**, **age**, **score** in the collection **students** are defined in order combined index, then the prefix of the index contains
> 
> - **name**
> - **name, age**
> 
> 能命中索引的查询字段组合包含
> The combination of query fields that can hit the index includes
> 
> - **name**
> - **name, age**
> - **name, age, score**
> 

```json
{
  "_id": "1",
  "name": "luke",
  "age": 26,
  "score": 80
}
```

组合索引**字段顺序决定组合索引效果**
Combined index **The order of fields determines the combined index effect**

例如定义组合索引分别为 **name, age** 与 **age, name** 是不同的。当组合索引为 **name, age** 时，其索引前缀为 **name**, 对字段 **name** 的查询可以命中 **name, age** 索引, 而对字段 **age** 的查询无法命中该索引，因为 **age** 不属于 **name, age** 的前缀（反之字段 **age** 能命中 **age, name** 索引）。
For example, defining a composite index as **name, age** and **age, name** are different. When the combined index is **name, age**, its index prefix is **name**, the query on the field **name** can hit the **name, age** index, and the field **age* * The query cannot hit the index, because **age** does not belong to the prefix of **name, age** (conversely, the field **age** can hit the **age, name** index).


### 地理位置索引
### Geo index

云数据库目前支持建立平面几何的地理位置索引，使用地理位置查询功能时，必须为地理位置数据的字段建立地理位置索引。
ApsaraDB for Cloud Database currently supports the establishment of a geographic location index for plane geometry. When using the geographic location query function, a geographic location index must be established for the fields of the geographic location data.

例如对含地理位置字段 **point** 的集合建立地理位置索引：
For example, create a geographic index for a collection with a geographic field **point**:

```json
{
  "_id": "",
  "point": new db.Geo.Point(50, 50)
}
```

![地理位置索引](https://web-assets.dcloud.net.cn/unidoc/zh/unicloud-web-index-geo.jpg)
![Geolocation Index](https://web-assets.dcloud.net.cn/unidoc/zh/unicloud-web-index-geo.jpg)

### TTL索引@ttl
### TTL index @ttl

ttl索引用于设置数据过期时间，并在数据过期后进行删除。**仅阿里云支持**
The ttl index is used to set the data expiration time and delete the data after it expires. **Only supported by Alibaba Cloud**

配置方式如下：
The configuration is as follows:

![](https://web-assets.dcloud.net.cn/unidoc/zh/ttl-index.jpg)

**注意**
**Notice**

- 数据删除并非实时，mongoDB会在后台定时进行数据清理
- Data deletion is not real-time, mongoDB will periodically clean up data in the background
- 启用ttl索引后仅可添加一个索引字段
- Only one index field can be added after enabling ttl indexing
- 仅支持对存储了日期类型（并非时间戳）的字段进行设置ttl索引
- Only supports setting ttl index on fields that store date type (not timestamp)

## 索引使用注意事项
## Index usage precautions

### 唯一性限制
### Uniqueness Restriction

创建索引时，索引属性选择**唯一**，即可添加唯一性限制。此限制会要求集合中**索引字段对应的值不能重复**。
When creating an index, select **UNIQUE** for the index property to add a uniqueness restriction. This restriction requires that the value corresponding to the index field in the collection cannot be repeated.

例如，某个集合内建立了索引字段 `foo`，且属性为“唯一”，那么在这个集合内，要求不能存在 `foo` 字段相同的文档。
For example, if the index field `foo` is established in a collection, and the attribute is "unique", then in this collection, it is required that no documents with the same field `foo` exist.

**注意**
**Notice**

假如**记录中不存在某个字段，则对索引字段来说其值默认为 null**。如果索引有唯一性限制，则不允许存在两个或以上的该字段为空 / 不存在该字段的记录。
If a field does not exist in the record, its value defaults to null for the index field. If the index has a uniqueness restriction, it is not allowed to have two or more records where the field is empty/doesn't exist.

针对上述问题，阿里云支持将索引设置为[稀疏索引](uniCloud/db-index.md?id=sparse)，腾讯云暂不支持稀疏索引。
In response to the above problems, Alibaba Cloud supports setting the index to [sparse index](uniCloud/db-index.md?id=sparse), while Tencent Cloud does not support sparse index.

### 稀疏索引@sparse
### Sparse index @sparse

> 仅阿里云支持
> Only supported by Alibaba Cloud

稀疏索引适用于需要某个字段唯一，但是这个字段又可能为空的场景。以用户表为例，用户可能是通过邮箱注册、也可能是通过手机号注册，所以需要保证邮箱、手机号唯一且允许为空，这时候就可以分别将邮箱、手机号的索引设置为稀疏索引来处理这种场景。**注意uni-id内支持多应用用户隔离（同一个手机号、邮箱等可以在不同应用注册账号），手机号、邮箱等都不可设置唯一索引**
Sparse indexes are suitable for scenarios where a field needs to be unique, but the field may be empty. Taking the user table as an example, users may register by email or by mobile phone number, so it is necessary to ensure that the mailbox and mobile phone number are unique and allowed to be empty. At this time, the indexes of mailboxes and mobile phone numbers can be set as sparse indexes respectively. to handle this scenario. **Note that uni-id supports multi-application user isolation (the same mobile phone number, email, etc. can be registered in different applications), and mobile phone numbers, emails, etc. cannot be set to unique indexes**

**配置索引为稀疏索引**
**Configure the index as a sparse index**

![](https://web-assets.dcloud.net.cn/unidoc/zh/unicloud-web-index-sparse.jpg)

### 字段大小限制
### Field size limit

- 索引字段的值大小限制**不能超过 1024 字节**。
- The value size limit for indexed fields **cannot exceed 1024 bytes**.
- 添加索引时，如果集合中已有文档索引字段内容超过 1024 字节，添加索引时将报错。
- When adding an index, if the content of the index field of the existing document in the collection exceeds 1024 bytes, an error will be reported when adding an index.
- 已设置索引的字段，如果插入一个文档，文档中该字段内容超过 1024 字节将会报错。
- An indexed field has been set. If you insert a document, an error will be reported if the content of the field in the document exceeds 1024 bytes.

**即不要对大段的文字（例如新闻的内容）设置索引**
**That is, do not index large pieces of text (such as news content)**

> 每个英文字母(不分大小写)占一字节的空间，每个中文汉字占两字节的空间。
> Each English letter (case-insensitive) occupies a space of one byte, and each Chinese character occupies a space of two bytes.

### 正则表达式
### Regular expressions

正则查询无法使用索引提升性能。
Regular queries cannot use indexes to improve performance.
