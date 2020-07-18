# Bifrost 节点运行通用教程

> 作者：安_change, Lurpis
>
> 时间：2020-07-18
>
> 版权声明：遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。

## 教程

#### 推荐配置

```
CPU             2 核
RAM（运行内存）   4 GB
DISK（磁盘大小）  100 GB
NET（网络带宽）   10 MB
系统             Linux (Centos, Ubantu)
```

#### Docker 自运行方式
##### 1. Docker 安装

Linux：https://www.runoob.com/docker/centos-docker-install.html

Windows：https://www.runoob.com/docker/windows-docker-install.html

Mac：https://www.runoob.com/docker/macos-docker-install.html

> 小提示：
>
> - 推荐使用是云服务器运行节点，省心、不掉线；
> - 如果是新的云服务器，`推荐安装 CoreOS 系统，自带 Docker，本步骤可跳过`；

##### 2. 运行节点

###### 2.1 首次运行

命令：

```sh
docker run -it -p 30333:30333 -p 9944:9944 -v /folder/bifrost-node:/node bifrostnetwork/bifrost:asgard-v0.4.0-a3 --base-path '/node' --name "NodeName | BNCAddress" --rpc-cors 'all' --unsafe-ws-external --validator
```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-01.png')" alt="" />

注：要自己跑出节点 ID，截图中的节点 ID 不再跑了，而且已经提交过了。

>  参数说明：
>
> - `-p 30333:30333 -p 9944:9944` 为节点端口号
> - `-v /folder/bifrost-node:/node` 节点数据保存位置
>    - `/folder/bifrost-node` **为自定义文件夹** `:/node` 对应 `--base-path` 无需修改
>    - 文件目录保持不变，出块数据和节点 ID 就不会丢失
> - `bifrostnetwork/bifrost:asgard-v0.4.0`：容器依赖的镜像；
> - `--name "NodeName | BNCAddress"`: 其中 NodeName 为节点名称，BNCAddress 为 Bifrost 地址前 10 位，用 `|` 隔开；

##### 2.2 再次运行

先查看之前运行的容器状态：

```sh
$ docker ps -a
```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-02.png')" alt="" />

如果是电脑或服务器重启，造成的容器退出，用下面的命令重新启动：

```sh
$ docker restart 66e31
```

> 命令说明：
>
> - `docker restart`：重启已经存在的容器，此时 Node ID 不会变化的；
> - `66e31`：就是前面查看到的容器 ID，前 5 位即可；**不要照抄，使用自己的**

##### 2.3 检查节点运行

节点监控：[https://telemetry.polkadot.io/#/Bifrost%20Asgard%20CC2](https://telemetry.polkadot.io/#/Bifrost Asgard CC2)
节点奖励：https://rewards.bifrost.finance 

<img :src="$withBase('/zh/node-tutorials/node-tutorials-03.png')" alt="" />

#### Ankr 托管运行方式
##### 1. 访问并注册 Ankr 账号 https://www.ankr.com/
##### 2. 运行节点
###### 2.1 点击「Deploy a Node」进入节点市场
###### 2.2 选择 Bifrost Validator Node
###### 2.3 进入付款页面
应用名称填写节点名 | Bifrost 地址前 10 位，运行方式选 Validator

###### 2.4 付款后等待节点自动完成部署
###### 2.5 检查节点运行

节点监控：[https://telemetry.polkadot.io/#/Bifrost%20Asgard%20CC2](https://telemetry.polkadot.io/#/Bifrost Asgard CC2)
节点奖励：https://rewards.bifrost.finance

> 以上就完成了节点运行时长的参与任务，接下来可以查看《如何成为 Validator 教程》

## Q&A 问题解决
##### 1. Windows Toolbox 拉取 boot2docker.iso 失败问题

安装 Docker Toolbox 是出现下面的错误，说明拉取 boot2docker.iso 失败了。

<img :src="$withBase('/zh/node-tutorials/node-tutorials-04.png')" alt="" />

解决方案：

Bifrost 社区群里有下载好的镜像，先在群里要；然后复制到上面图中标红的 cache 路径中即可；

复制好后，再双击启动 Docker Quickstart Terminal

> 小提示：
>
> - 加客服微信入群：LiebiService-3
>
> - 网盘地址：https://lanzous.com/iaqdpmb

##### 2. docker run 或者 docker restart 后忘记节点 ID 了怎么办？

执行命令：

```sh
$ docker logs 66e31
```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-05.png')" alt="" />

#### 3. 其他疑难杂症？

添加微信客服 LiebiService-3，进入微信群中讨论
