# Инструкция по запуску ноды Bifrost Asgard CC2

> Автор： 安_change, Lurpis
> 
> Дата: 2020-07-18

## Инструкция
### Рекомендуемая конфигурация

```
CPU: 4 ядра
RAM: (оперативная память) 8 GB
Диск: 100 GB
NET: (пропускная способность сети) 10 MB
Система: Linux (Centos, Ubuntu)
```

### Режим самостоятельного запуска Docker
#### 1. Установка Docker
- Linux：<https://www.runoob.com/docker/centos-docker-install.html>
- Windows：<https://www.runoob.com/docker/windows-docker-install.html>
- Mac：<https://www.runoob.com/docker/macos-docker-install.html>

> Рекомендации：
> 
> - Для запуска нод рекомендуется использовать облачные серверы.
> - Если вы используете новый облачный сервер, `Рекомендуется установить систему CoreOS с помощью Docker`, этот шаг можно пропустить

#### 2. Запуск ноды

##### 2.1 Первый запуск

Команда:

```sh
docker run -it -p 30333:30333 -p 9944:9944 -v /tmp/bifrost-node:/node bifrostnetwork/bifrost:asgard-v0.4.0 --base-path '/node' --name "NodeName | BNCAddress" --rpc-cors 'all' --unsafe-ws-external --validator
```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-01.png')" alt="" />

Примечание: если появляется сообщение `permission denied`, то у папки с нодой `/tmp/bifrost-node` отстутствует разрешение на запись - выполните команду `chmod -R 766 /tmp/bifrost-node ` для предоставления доступа.

> Описание параметров：
> 
> - `-p 30333:30333 -p 9944:9944` - порт ноды
> - `-v /tmp/bifrost-node:/node` - расположение данных ноды 
>     - `/tmp/bifrost-node` ** - здесь вы можете указать каталог, в котором хотите сохранять данные ноды**
>     - Пожалуйста, убедитесь, что папка имеет разрешение на запись
>     - Каталог файлов остается неизменным, а данные блока и ID ноды сохранятся
> - `bifrostnetwork/bifrost:asgard-v0.4.0`： образ, от которого зависит контейнер;
> - `--name "NodeName | BNCAddress"`: где NodeName - это имя ноды, а BNCAddress - это первые 10 цифр кошелька Bifrost, параметры разделяются с помощью знака `|`;

#### 2.2 Повторный запуск

Прежде всего проверьте состояние ранее запущенного контейнера:

```sh
$ docker ps -a
```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-02.png')" alt="" />

Если компьютер или сервер перезагружался и контейнер завершил работу, перезагрузите его с помощью следующей команды:

```sh
$ docker restart 66e31
```

> Описание команды:
> 
> - `docker restart`：перезагружает существующий контейнер, ID ноды при этом не меняется
> - `66e31`：это ID контейнера, который вы видели ранее, достаточно первых 5 цифр; **Не копируйте этот, используйте собственный**.

#### 2.3 Проверка работы ноды

Мониторинг нод：<https://telemetry.polkadot.io/#/Bifrost> Asgard CC2

Вознаграждения нод: <https://rewards.bifrost.finance>

<img :src="$withBase('/zh/node-tutorials/node-tutorials-03.png')" alt="" />

### Ankr 托管运行方式
#### 1. 访问并注册 Ankr 账号 <https://www.ankr.com/>
#### 2. 运行节点
##### 2.1 点击「Deploy a Node」进入节点市场
##### 2.2 选择 Bifrost Validator Node
##### 2.3 进入付款页面
应用名称填写节点名 | Bifrost 地址前 10 位，运行方式选 Validator

##### 2.4 付款后等待节点自动完成部署
##### 2.5 检查节点运行

节点监控：<https://telemetry.polkadot.io/#/Bifrost> Asgard CC2 节点奖励：<https://rewards.bifrost.finance>

> 以上就完成了节点运行时长的参与任务，接下来可以查看《如何成为 Validator 教程》

## Q & A 问题解决
#### 1. Windows Toolbox 拉取 boot2docker.iso 失败问题

安装 Docker Toolbox 是出现下面的错误，说明拉取 boot2docker.iso 失败了。

<img :src="$withBase('/zh/node-tutorials/node-tutorials-04.png')" alt="" />

解决方案：

Bifrost 社区群里有下载好的镜像，先在群里要；然后复制到上面图中标红的 cache 路径中即可；

复制好后，再双击启动 Docker Quickstart Terminal

> 小提示：
> 
> - 加客服微信入群：LiebiService-3
> - boot2docker.iso 下载 https://lanzous.com/iaqdpmb

#### 2. docker run 或者 docker restart 后忘记节点 ID 了怎么办？

执行命令：

```sh
$ docker logs 66e31
```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-05.png')" alt="" />

### 3. 其他疑难杂症？

添加微信客服 LiebiService-3，进入微信群中讨论。