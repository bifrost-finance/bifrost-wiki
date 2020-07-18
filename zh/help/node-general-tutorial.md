# Bifrost 节点运行通用教程

> 作者：安_change
>
> 时间：2020-05-20
>
> 版权声明：本文为「安_change」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。

## 一、前言

3月份，Lurpis 在朋友圈发了一条`运行 Bifrost POC-2测试节点瓜分 BNC `的文章，这是新项目，必须先占坑啊，万一就一夜暴富了呢。

为了方便社区的小伙伴一起运行节点获得收益，诞生了这篇教程。

加客服微信入群（LiebiService-3），我在群里等你哦！

## 二、教程

### 1 如何运行？

#### 步骤1 推荐节点配置

```
CPU:			2 核
RAM（运行内存）: 	4 GB
DISK（磁盘大小）:	100 GB
NET（网络带宽）:	10 MB
```



#### 步骤2 Docker 安装

我用的云服务器：https://www.runoob.com/docker/centos-docker-install.html

我用的Windows：https://www.runoob.com/docker/windows-docker-install.html

我用的Mac：https://www.runoob.com/docker/macos-docker-install.html

> 小提示：
>
> - 推荐使用是云服务器运行节点，省心、不掉线；
> - 如果是新的云服务器，`推荐安装 CoreOS 系统，自带 Docker，本步骤可跳过`；

#### 步骤3 运行节点

##### 1.3.1 第一次运行

命令（使用阿里云镜像，这个镜像是我辛辛苦苦拉下来的，保证绿色无公害）：

```sh
$ docker run -it registry.cn-shanghai.aliyuncs.com/bifrostnetwork/bifrost:asgard-v0.3.2 --name "Bifrost Node Name" --validator
```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-01.png')" alt="" />

注：要自己跑出节点 ID，截图中的节点 ID 不再跑了，而且已经提交过了。

>  命令解释：
>
> - `docker run`: 启动一个新的容器；**如果重启机器等原因，不要再执行这个命令！ 节点id会变！**
> - `registry.cn-shanghai.aliyuncs.com/bifrostnetwork/bifrost:asgard-v0.3.2`：容器依赖的镜像；
> - `--name "Bifrost Node Name"`: 节点名称，自己定义；

##### 1.3.2 再次运行

先查看之前运行的容器状态：

```sh
$ docker ps -a
```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-02.png')" alt="" />

如果是电脑或服务器重启，造成的容器退出，用下面的命令重新启动：

```sh
$ docker restart a45
```

> 命令说明：
>
> - `docker restart`：重启已经存在的容器，此时 Node ID 不会变化的；
> - `a45`：就是前面查看到的容器id，前3位；**不要照抄，要用自己的**

##### 1.4 检查节点

访问地址：[https://telemetry.polkadot.io/#list/Bifrost%20Asgard%20CC1](https://telemetry.polkadot.io/#list/Bifrost Asgard CC1)

<img :src="$withBase('/zh/node-tutorials/node-tutorials-03.png')" alt="" />

### 2 问题解决

#### 2.1 解决 Windows Toolbox 拉取 boot2docker.iso 失败问题

安装 Docker Toolbox 是出现下面的错误，说明拉取 boot2docker.iso 失败了。

<img :src="$withBase('/zh/node-tutorials/node-tutorials-04.png')" alt="" />

解决方案：

Bifrost 社区群里有下载好的镜像，先在群里要；然后复制到上面图中标红的 cache 路径中即可；

复制好后，再双击启动 Docker Quickstart Terminal

> 小提示：
>
> - 加客服微信入群：LiebiService-3
>
> - 矫情的你不想进群？好吧，这是网盘地址：https://lanzous.com/iaqdpmb

#### 2.2 docker run 或者 docker restart 后忘记 Node ID 了怎么办？

执行命令：

```sh
$ docker logs a45
```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-05.png')" alt="" />

#### 2.3 其他疑难杂症？

加群加群，群里的人都是人才，说话又好听，赶快来加入吧！

微信客服：LiebiService-3；


> 投稿信息：
>
> - 标题：Bifrost 节点运行通用教程
> - 姓名：安_change
