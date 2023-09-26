## uni.exit(options?) @exit

<!-- UTSAPIJSON.exit.description -->

<!-- UTSAPIJSON.exit.param -->

<!-- UTSAPIJSON.exit.returnValue -->

<!-- UTSAPIJSON.exit.example -->

<!-- UTSAPIJSON.exit.compatibility -->

本API仅Android App生效。

Android平台的应用退出分热退出和冷退出。
- 冷退出是彻底杀掉
- 热退出是关闭可见的activity，后台进程不退出（比如push）

基本上主流Android App都是热退出。本API也是热退出。

热退出，即通知了os：这个app用户不用了，在os需要时可以回收。如果在os回收之前，用户又启动这个app，会感觉启动速度更快一些。

<!-- UTSAPIJSON.exit.tutorial -->

<!-- UTSAPIJSON.exit.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->