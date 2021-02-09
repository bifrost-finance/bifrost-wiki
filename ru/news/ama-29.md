# Sub Dev Sharing | Обновление и разделение среды выполнения субстрата

### Введение

В прошлое воскресенье вечером основной разработчик Bifrost, Джейми Денг, прочитал в зале прямых трансляций первую лекцию на тему «Обновление и разделение среды выполнения субстрата». Демо-адрес находится здесь: https://github.com/Dengjianping/816/tree/jamie816/demo

***Дата: 16.08.2020***

### Поделиться отзывом

**Обновление среды выполнения, почему веб-сборка**

Прежде всего, Substrate создается с использованием Rust и веб-сборки, а написанная среда выполнения будет скомпилирована в файл wasm, а сгенерированные WAM-файлы могут быть выполнены на виртуальной машине для достижения безветвкового обновления.

Во-вторых, веб-сборка имеет много преимуществ.

- высокая производительность. Когда скомпилированный wasm выполняется, инструкции выполнения близки к базовому оборудованию и все выполняются быстро.
- Песочница.Веб-сборка выполняется на виртуальной машине, поэтому можно проводить изоляцию и термообработку.
- Хорошая поддержка сообщества. Цепочка инструментов и экология получили сильную поддержку со стороны сообщества. Например, в настоящее время rust лучше всего поддерживает webassem. Есть и другие преимущества, такие как кроссплатформенность, лучшая безопасность и т. Д.

**Зачем нужны обновления среды выполнения при разработке субстратов**

- безопасность.Когда проблема безопасности обнаруживается в коде в цепочке, для своевременного устранения проблемы очень необходимо обновить среду выполнения онлайн.
- Добавьте новые интерфейсы или функции.
- спектакль.Когда мы оптимизируем производительность модуля Runtime, необходимо обновить Runtime.

Некоторые правила обновления среды выполнения Перехватить последний код времени выполнения, связанный с RC5.

`/// Runtime version.pub const VERSION: RuntimeVersion = RuntimeVersion {    spec_name: create_runtime_str!("node"),    impl_name: create_runtime_str!("substrate-node"),    authoring_version: 10,    // Per convention: if the runtime behavior changes, increment spec_version    // and set impl_version to 0. If only runtime    // implementation changes and behavior does not, then leave spec_version as    // is and increment impl_version.    spec_version: 256,    impl_version: 0,    apis: RUNTIME_API_VERSIONS,    transaction_version: 1,};`

Здесь есть два поля, связанных с обновлением среды выполнения:

- spec_version.比如当有新的接口增加或者删减，从而导致 Runtime 有共识逻辑上的变化，就需要+1。当做升级时，新版本的 Runtime 的 spec_version 高于当前运行版本的 spec_version，这时链上就会升级到最新的 Runtime。
- impl_version。这个更多的是非共识逻辑变化的修改，比如对某个接口进行性能优化，优化并不好导致这个接口的输出会发生变化。
- 其余字段的解释可以阅读这篇文章 Runtime Execution。

**示例**

示例的代码编译自这里：

https://github.com/Dengjianping/816/tree/jamie816，

编译整个工程，最好是在 release 模式下。当前示例包含一个模块 Token，包含两个接口 issue && destroy，这两个接口分别可以发行，销毁 token，且都只能拥有 sudo 权限的用户才能操作。

1. 修改 spec_version 为 256，编译生成只包含 issue 接口的 native node。注释 Line 45 到 Line 89 ，然后编译工程。

`cargo build --releasecp target/release/substrate . # 拷贝当前编译 native binary 到当前目录，避免下次编译被覆盖`

2. 修改 spec_version 为 257，编译工程生成包含 issue 和 destroy 接口的 wasm 文件，把 Line 45 到 Line 89 的注释去掉，然后编译工程。

`# 生成 wasm 路径：target/release/wbuild/node-runtime/node_runtime.compact.wasmcargo build --release`

3. 升级，运行节点

`./substrate --dev`

访问前端工具 polkadot.js.org，发现前端页面无法加载节点的数据， 把 types.json 的数据类型拷贝到截图显示部分，保存后，刷新页面。





















