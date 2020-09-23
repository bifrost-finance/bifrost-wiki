# Bifrost Asgard CC2 Node Running Tutorial

> Writer: 安_change, Lurpis
> 
> Date: 2020-07-18

## Tutorial
### Recommended Configurations

```
CPU: 4 core
RAM: (running memory) 8 GB
DISK: (disk size) 100 GB
NET: (network bandwidth) 10 MB
System: Linux (Centos, Ubantu)
```

### Docker self-running mode
#### 1. Docker Installation
- Linux：<https://www.runoob.com/docker/centos-docker-install.html>
- Windows：<https://www.runoob.com/docker/windows-docker-install.html>
- Mac：<https://www.runoob.com/docker/macos-docker-install.html>

> Tips:
> 
> - It is recommended to use cloud servers to run nodes.
> - If it is a new cloud server, `It is recommended to install the CoreOS system with Docker`, this step can be skipped

#### 2. Run a node

##### 2.1 First time run

Order:

```sh
docker run -it -p 30333:30333 -p 9944:9944 bifrostnetwork/bifrost:asgard-v0.5.0 --name "NodeName | BNCAddress" --rpc-cors 'all' --unsafe-ws-external --validator
```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-01.png')" alt="" />

> Parameter Description:
> 
> - `-p 30333:30333 -p 9944:9944` 为节点端口号 
>     - 节点重启可以使用 docker restart container_id
> - `bifrostnetwork/bifrost:asgard-v0.5.0`：容器依赖的镜像；
> - `--name "NodeName | BNCAddress"`: 其中 NodeName 为节点名称，BNCAddress 为 Bifrost 地址前 10 位，用 `|` 隔开；

#### 2.2 Run again

先查看之前运行的容器状态：

```sh
$ docker ps -a
```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-02.png')" alt="" />

如果是电脑或服务器重启，造成的容器退出，用下面的命令重新启动：

```sh
$ docker restart 66e31
```

> Order description:
> 
> - `docker restart`: Restart the existing container, the Node ID will not change at this time
> - `66e31`: It is the container ID that was viewed earlier, the first 5 digits are enough; **Don’t copy, use your own**.

#### 2.3 Check node operation

节点监控：<https://telemetry.polkadot.io/#/Bifrost> Asgard CC2

节点奖励：<https://rewards.bifrost.finance>

<img :src="$withBase('/zh/node-tutorials/node-tutorials-03.png')" alt="" />

### Ankr Hosting Operation Method
#### 1. Visit and register Ankr account <https://www.ankr.com/>
#### 2. Run the node
##### 2.1 Click "Deploy a Node" to enter the node market.
##### 2.2 Select Bifrost Validator Node.
##### 2.3 Enter the payment page.
应用名称填写节点名 | Bifrost 地址前 10 位，运行方式选 Validator

##### 2.4 Wait for the node to automatically complete the deployment after payment.
##### 2.5 Check node operation.

节点监控：<https://telemetry.polkadot.io/#/Bifrost> Asgard CC2 节点奖励：<https://rewards.bifrost.finance>

> The above has completed the task of participating in the node running, and then you can view "Validator tutorial"

## Q & A
#### 1. Windows Toolbox failed to pull boot2docker.iso

安装 Docker Toolbox 是出现下面的错误，说明拉取 boot2docker.iso 失败了。

<img :src="$withBase('/zh/node-tutorials/node-tutorials-04.png')" alt="" />

解决方案：

Bifrost 社区群里有下载好的镜像，先在群里要；然后复制到上面图中标红的 cache 路径中即可；

复制好后，再双击启动 Docker Quickstart Terminal

> Tips:
> 
> - 加客服微信入群：bifrost00
> - boot2docker.iso download https://lanzous.com/iaqdpmb

#### 2. What should I do if I forget the node ID after docker run or docker restart?

执行命令：

```sh
$ docker logs 66e31
```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-05.png')" alt="" />

### 3. Other questions?

添加微信客服 bifrost00，进入微信群中讨论。