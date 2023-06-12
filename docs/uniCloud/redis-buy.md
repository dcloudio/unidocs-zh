## 开通@open
## open @open

> 2021年11月18日，已支持腾讯云和阿里云
> On November 18, 2021, Tencent Cloud and Alibaba Cloud have been supported

目前可以在uniCloud web控制台购买redis服务，**所购买的实例由云厂商提供，并非由DCloud提供，DCloud只提供购买入口**
At present, you can purchase redis services in the uniCloud web console. **The purchased instance is provided by the cloud manufacturer, not by DCloud. DCloud only provides the purchase entry**

1. 登录[uniCloud web控制台](https://unicloud.dcloud.net.cn/)
1. Log in to the [uniCloud web console](https://unicloud.dcloud.net.cn/)
2. 选择一个服务空间
2. Select a service space
3. 选择左侧redis菜单，选择实例并购买即可
3. Select the redis menu on the left, select the instance and buy it

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/redis-new-230506.png)

**注意**
**Notice**

- 开通的redis实例会自动和当前服务空间绑定
- The activated redis instance will be automatically bound to the current service space
- 后续可以对redis实例升配降配，请阅读下方升配降配的说明
- You can upgrade or downgrade the redis instance in the future. Please read the instructions for upgrade and downgrade below.
- 购买redis实例时，选择较长的”购买时长“可以享受更多的折扣
- When purchasing a redis instance, choose a longer "purchase duration" to enjoy more discounts
- 付费后，需要等待3-5分钟redis实例才能初始化完成
- After payment, you need to wait 3-5 minutes for the redis instance to be initialized

## 规格说明@type
## Specification @type

### 阿里云
### Ali Cloud

|规格				|CPU核数|每秒新建连接数上限	|连接数上限	|带宽（MB/s）	|QPS参考值|
|Specification |Number of CPU cores|Maximum number of new connections per second |Maximum number of connections |Bandwidth (MB/s) |QPS reference value|
|--					|--			|--									|--					|--						|--				|
|256MB主从版|2			|10,000							|10,000			|10						|80,000		|
|256MB master-slave version|2 |10,000 |10,000 |10 |80,000 |
|1GB主从版	|2			|10,000							|10,000			|10						|80,000		|
|1GB master-slave version |2 |10,000 |10,000 |10 |80,000 |
|2GB主从版	|2			|10,000							|10,000			|16						|80,000		|
|2GB master-slave version |2 |10,000 |10,000 |16 |80,000 |
|4GB主从版	|2			|10,000							|10,000			|24						|80,000		|
|4GB master-slave version |2 |10,000 |10,000 |24 |80,000 |
|8GB主从版	|2			|10,000							|10,000			|24						|80,000		|
|8GB master-slave version |2 |10,000 |10,000 |24 |80,000 |

### 腾讯云
### Tencent Cloud

|规格			|CPU核数|每秒新建连接数上限	|连接数上限	|带宽（MB/s）	|QPS参考值|
|Specification |Number of CPU cores|Maximum number of new connections per second |Maximum number of connections |Bandwidth (MB/s) |QPS reference value|
|--				|--			|--									|--					|--						|--				|
|1GB主从版|1			|10,000							|10,000			|16						|80,000		|
|1GB master-slave version|1 |10,000 |10,000 |16 |80,000 |
|2GB主从版|1			|10,000							|10,000			|24						|80,000		|
|2GB master-slave version|1 |10,000 |10,000 |24 |80,000 |
|4GB主从版|1			|10,000							|10,000			|24						|80,000		|
|4GB Master-Slave Version|1 |10,000 |10,000 |24 |80,000 |
|8GB主从版|1			|10,000							|10,000			|24						|80,000		|
|8GB master-slave version|1 |10,000 |10,000 |24 |80,000 |

## 费用说明@fee
## Fee description @fee

### 续费@renew
### Renewal @renew

在uniCloud web控制台redis详情页面点击续费按钮可以对redis实例进行续费操作。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/redis-renew-230506.png)

实例到期后的第1~7天，实例状态为被禁用，无法被访问。如需继续使用，您需要及时为实例续费
From 1 to 7 days after the instance expires, the instance status is disabled and cannot be accessed. To continue using it, you need to renew the instance in time

实例处于被禁用状态后，以您执行续费操作的时间为起点计算包年包月时长，例如您的实例在2021年04月10日到期，在2021年04月15日执行手动续费1个月的操作，那么实例的到期时间即为2021年5月15日。
After the instance is disabled, the annual and monthly subscription duration is calculated based on the time when you perform the renewal operation. For example, if your instance expires on April 10, 2021, and you manually renew it for one month on April 15, 2021 operation, then the expiration time of the instance is May 15, 2021.

### 升配@upgrade
### Masuhai@upgrade

在uniCloud web控制台redis详情页面点击变配按钮可以对redis实例进行升配操作。升级配置需要按照剩余时间补足差额

升级实例配置所需费用 =（升级后实例每天的价格 - 升级前实例每天的价格）× 服务到期的剩余天数，具体费用以web控制台显示为准
The cost of upgrading the instance configuration = (the price of the instance per day after the upgrade - the price of the instance per day before the upgrade) × the number of days remaining until the service expires. The specific cost is subject to the display on the web console.

**注意**
**Notice**

- 配置变更将会产生切换操作而带来1-2次30秒内的闪断，建议您在业务低峰期发起变配，避免影响业务。
- Configuration changes will cause switching operations and cause 1-2 flashes within 30 seconds. It is recommended that you initiate configuration changes during low business peaks to avoid affecting business.

### 降配@downgrade
### Downgrade @downgrade

在uniCloud web控制台redis详情页面点击变配按钮可以对redis实例进行降配操作。

**目前可以降配但是无法退还费用到您的账号**
**Currently it is possible to downgrade but the fee cannot be refunded to your account**

**注意**
**Notice**

- 配置变更将会产生切换操作而带来1-2次30秒内的闪断，建议您在业务低峰期发起变配，避免影响业务。
- Configuration changes will cause switching operations and cause 1-2 flashes within 30 seconds. It is recommended that you initiate configuration changes during low business peaks to avoid affecting business.
- 如果降配时内存用量超过降配目标规格的内存上限，则会导致降配失败
- If the memory usage exceeds the upper memory limit of the target specification during downgrade, the downgrade will fail

## 在云函数中使用
## used in cloud functions

如何在云函数中使用redis，请参考[扩展能力Redis](uniCloud/redis.md)
How to use redis in cloud functions, please refer to [Extended Capability Redis](uniCloud/redis.md)

## FAQ

- 为什么刚开通的redis实例就用了几十MB内存
- Why does the newly opened redis instance use tens of MB of memory?

  redis基础服务会占用一定的内存，大小在32MB-64MB之间
  The basic redis service will occupy a certain amount of memory, the size is between 32MB-64MB