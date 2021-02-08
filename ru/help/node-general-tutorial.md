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
> - `-p 30333:30333 -p 9944:9944` - порт ноды 
>     - Для перезапуска узла можно использовать docker restart container_id
> - `bifrostnetwork/bifrost:asgard-v0.5.0`： образ, от которого зависит контейнер;
> - ` --name "NodeName" `: где NodeName - имя узла;

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
> - docker restart: перезагружает существующий контейнер, ID ноды при этом не меняется
> - `66e31`：это ID контейнера, который вы видели ранее, достаточно первых 5 цифр; **Не копируйте этот, используйте собственный**.

#### 2.3 Проверка работы ноды

Мониторинг нод：<https://telemetry.polkadot.io/#/Bifrost> Asgard CC2

Вознаграждения нод： <https://rewards.bifrost.finance>

<img :src="$withBase('/zh/node-tutorials/node-tutorials-03.png')" alt="" />

### Метод использования хостинга Ankr
#### 1. Перейдите по ссылки и зарегистрируйте аккаунт Ankr <https://www.ankr.com/>
#### 2. Запустите ноду
##### 2.1 Нажмите "Deploy a Node" чтобы перейти на рынок нод.
##### 2.2 Выберите Bifrost Validator Node.
##### 2.3 Перейдите на страницу оплаты
Введите имя ноды | первые 10 цифр кошелька Bifrost и выберите Validator в качестве режима работы

##### 2.4 Дождитесь завершения автоматического развертывания ноды после оплаты.
##### 2.5 Проверьте работу ноды

Мониторинг нод：<https://telemetry.polkadot.io/#/Bifrost> Asgard CC2 Вознаграждения нод： <https://rewards.bifrost.finance>

> Вышеизложенной инструкции достаточно для запуска ноды, теперь вы можете ознакомиться с "Инструкцией для валидатора"

## Вопросы & ответы
#### 1. Windows Toolbox failed to pull boot2docker.iso

Данная ошибка свидетельствует о том, что Docker Toolbox не смог извлечь boot2docker.iso.

<img :src="$withBase('/zh/node-tutorials/node-tutorials-04.png')" alt="" />

Решение：

В группе сообщества Bifrost есть загруженный образ - попросите его в группе, а затем скопируйте в кэш-путь, отмеченный красным цветом на рисунке выше;

По завершении процесса копирования запустите Docker Quickstart Terminal двойным кликом

> Советы：
> 
> - Добавьте WeChat службы поддержки клиентов, чтобы присоединиться к группе: bifrost00
> - boot2docker.iso можно скачать по ссылке https://lanzous.com/iaqdpmb

#### 2. Что делать, если я забыл ID своей ноды после запуска или перезагрузки docker?

Выполните команду：

```sh
$ docker logs 66e31
```

<img :src="$withBase('/zh/node-tutorials/node-tutorials-05.png')" alt="" />

### 3. Остались вопросы?

Добавьте службу поддержки клиентов WeChat bifrost00 и войдите в группу WeChat для обсуждения.