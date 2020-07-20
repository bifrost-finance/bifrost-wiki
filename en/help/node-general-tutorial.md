# Bifrost Asgard CC2 Node Running Tutorial

> Writer: 安_change, Lurpis
> 
> Date: 2020-07-18

## Tutorial
### Recommended Configurations

```
CPU:  2 Core
RAM:  4 GB
DISK:  100 GB
NET:  10 MB
System:  Linux (Centos, Ubantu)
```

### Docker self-running mode
#### 1. Docker Installation
- Linux: https://www.runoob.com/docker/centos-docker-install.html
- Windows: https://www.runoob.com/docker/windows-docker-install.html
- Mac: https://www.runoob.com/docker/macos-docker-install.html

> Tips:
> 
> - It is recommended to use cloud servers to run nodes.
> - If it is a new cloud server, `It is recommended to install the CoreOS system with Docker, this step can be skipped`;

#### 2. Run a node

##### 2.1 First time run

Order:

```sh
docker run -it -p 30333:30333 -p 9944:9944 -v /tmp/bifrost-node:/node bifrostnetwork/bifrost:asgard-v0.4.0 --base-path '/node' --name "NodeName | BNCAddress" --rpc-cors 'all' --unsafe-ws-external --validator

```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-01.png')" alt="" />

Note: If the prompt `permission denied` means that the node directory `/tmp/bifrost-node` does not have write permission, please execute `chmod -R 766 /tmp/bifrost-node ` give permission.

> Parameter Description:
> 
> - `-p 30333:30333 -p 9944:9944` is the node port number.
> - `-v /tmp/bifrost-node:/node` where to save node data. 
>     - `/tmp/bifrost-node` ** is a custom folder, you can change to the directory where you want to save node data**
>     - Please make sure the folder has write permission.
>     - The file directory remains unchanged, and the block data and node ID will not be lost.
> - `bifrostnetwork/bifrost:asgard-v0.4.0`: the image that the container depends on;
> - `--name "NodeName | BNCAddress"`: where is the node name, and BNCAddress is the first 10 digits of the Bifrost address, separated by `|`;

#### 2.2 Run again

First check the status of the previously running container:

```sh
$ docker ps -a
```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-02.png')" alt="" />

If the computer or server restarts and the container exits, restart it with the following order:

```sh
$ docker restart 66e31
```

> Order description:
> 
> - `docker restart`: restart the existing container, and the Node ID will not change at this time;
> - `66e31`: It is the container ID that was viewed earlier, the first 5 digits are enough; **Don’t copy, use your own**.

#### 2.3 Check node operation

Node monitoring: \[https://telemetry.polkadot.io/#/Bifrost%20Asgard%20CC2\](https://telemetry.polkadot.io/#/Bifrost Asgard CC2) Node reward: https://rewards.bifrost.finance

<img :src="$withBase('/zh/node-tutorials/node-tutorials-03.png')" alt="" />

### Ankr Hosting Operation Method
#### 1. Visit and register one Ankr account: https://www.ankr.com/
#### 2. Run the node
##### 2.1 Click "Deploy a Node" to enter the node market.
##### 2.2 Select Bifrost Validator Node.
##### 2.3 Enter the payment page.
Fill in the node name for the application name | the first 10 digits of the Bifrost address, select Validator as the operating mode.

##### 2.4 Wait for the node to automatically complete the deployment after payment.
##### 2.5 Check node operation.

Node monitoring: \[https://telemetry.polkadot.io/#/Bifrost%20Asgard%20CC2\](https://telemetry.polkadot.io/#/Bifrost Asgard CC2) Node reward: https://rewards.bifrost.finance

> The above has completed the task of participating in the node running, and then you can view "Validator tutorial"

## Q & A
#### 1. Windows Toolbox failed to pull boot2docker.iso

The following error occurred when installing Docker Toolbox, indicating that the pull boot2docker.iso failed.

<img :src="$withBase('/zh/node-tutorials/node-tutorials-04.png')" alt="" />

Solution:

There is a downloaded image in the Bifrost community group, first ask it in the Telegram group; then copy it to the cache path marked in red in the figure above;

After copying, double-click to start Docker Quickstart Terminal.

> Tips:
> 
> - Join the Bifrost Telegram Group: https://t.me/bifrost_finance
> - boot2docker.iso download https://lanzous.com/iaqdpmb

#### 2. What should I do if I forget the node ID after docker run or docker restart?

Excuting an order:

```sh
$ docker logs 66e31
```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-05.png')" alt="" />

### 3. Other questions?

Join in the Telegram and ask admin.
