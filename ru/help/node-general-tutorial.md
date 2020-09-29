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

> Советы：
> 
> - Для запуска нод рекомендуется использовать облачные серверы.
> - Если вы используете новый облачный сервер, `Рекомендуется установить систему CoreOS с помощью Docker`, этот шаг можно пропустить

#### 2. Запуск ноды

##### 2.1 Первый запуск

Команда:

```sh
docker run -it -p 30333:30333 -p 9944:9944 bifrostnetwork/bifrost:asgard-v0.5.0 --name "NodeName" --rpc-cors 'all' --unsafe-ws-external --validator
```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-01.png')" alt="" />

> Описание параметров：
> 
> - `-p 30333:30333 -p 9944:9944` 为节点端口号 
>     - 节点重启可以使用 docker restart container_id
> - `bifrostnetwork/bifrost:asgard-v0.5.0`：容器依赖的镜像；
> - `--name "NodeName"`: 其中 NodeName 为节点名称；

#### 2.2 Повторный запуск

先查看之前运行的容器状态：

```sh
$ docker ps -a
```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-02.png')" alt="" />

如果是电脑或服务器重启，造成的容器退出，用下面的命令重新启动：

```sh
$ docker restart 66e31
```

> Описание команды:
> 
> - `docker restart`：перезагружает существующий контейнер, ID ноды при этом не меняется
> - `66e31`：это ID контейнера, который вы видели ранее, достаточно первых 5 цифр; **Не копируйте этот, используйте собственный**.

#### 2.3 Проверка работы ноды

节点监控：<https://telemetry.polkadot.io/#/Bifrost> Asgard CC2

节点奖励：<https://rewards.bifrost.finance>

<img :src="$withBase('/zh/node-tutorials/node-tutorials-03.png')" alt="" />

### Метод использования хостинга Ankr
#### 1. Перейдите по ссылки и зарегистрируйте аккаунт Ankr <https://www.ankr.com/>
#### 2. Запустите ноду
##### 2.1 Нажмите "Deploy a Node" чтобы перейти на рынок нод.
##### 2.2 Выберите Bifrost Validator Node.
##### 2.3 Перейдите на страницу оплаты
应用名称填写节点名 | Bifrost 地址前 10 位，运行方式选 Validator

##### 2.4 Дождитесь завершения автоматического развертывания ноды после оплаты.
##### 2.5 Проверьте работу ноды

节点监控：<https://telemetry.polkadot.io/#/Bifrost> Asgard CC2 节点奖励：<https://rewards.bifrost.finance>

> Вышеизложенной инструкции достаточно для запуска ноды, теперь вы можете ознакомиться с "Инструкцией для валидатора"

## Вопросы & ответы
#### 1. Windows Toolbox failed to pull boot2docker.iso

安装 Docker Toolbox 是出现下面的错误，说明拉取 boot2docker.iso 失败了。

<img :src="$withBase('/zh/node-tutorials/node-tutorials-04.png')" alt="" />

解决方案：

Bifrost 社区群里有下载好的镜像，先在群里要；然后复制到上面图中标红的 cache 路径中即可；

复制好后，再双击启动 Docker Quickstart Terminal

> Советы：
> 
> - 加客服微信入群：bifrost00
> - boot2docker.iso можно скачать по ссылке https://lanzous.com/iaqdpmb

#### 2. Что делать, если я забыл ID своей ноды после запуска или перезагрузки docker?

执行命令：

```sh
$ docker logs 66e31
```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-05.png')" alt="" />

### 3. Еще вопросы?

添加微信客服 bifrost00，进入微信群中讨论。