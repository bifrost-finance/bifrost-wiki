# Инструкция для валидатора
### Обзор
- Инструкция по созданию адреса (кошелька) Bifrost
- Запустите ноду, опираясь на руководство
- Настройка валидатора
- Генерация сеансового ключа и его привязка
- Стейкинг и номинирование
- Избранный валидатор

### Настройка валидатора
- Перейдите на Bifrost Dash и нажмите Network / Стейкинг

<img :src="$withBase('/zh/validator-tutorial/validator_1.png')" alt="" width="70%" />

- На странице "Стейкинг" выберите вкладку "Функции аккаунта"

<img :src="$withBase('/zh/validator-tutorial/validator_2.png')" alt="" width="70%" />

- Нажмите на +Валидатор
    - Stash Account (аккаунт-копилка) - адрес, где хранится ASG
    - Аккаунт-контроллера (адрес управляющей нода)
    - Введите сумму самообеспечения ASG

<img :src="$withBase('/zh/validator-tutorial/validator_3.png')" alt="" width="70%" />

> Для Stash и Controller Account в целях безопасности рекомендуется использовать два разных адреса.
- Следующий шаг
    - Введите ключ сеанса (Session Key) - см. инструкции ниже, как его сгенерировать
    - Введите желаемый процент комиссии ноды (в настоящее время в тестовой сети это не требуется, можно заполнить по желанию)

<img :src="$withBase('/zh/validator-tutorial/validator_4.png')" alt="" width="70%" />

- Создайте Валидатора

### Генерация сессионного ключа
- 1. 开启 9933 端口和 RPC 权限，关闭节点后重新用下方命令启动节点
```
docker run -it -p 30333:30333 -p 9944:9944 -p 9933:9933 bifrostnetwork/bifrost:asgard-v0.5.0 --name "NodeName" --rpc-cors 'all' --unsafe-ws-external --rpc-methods 'Unsafe' --unsafe-rpc-external --validator
```

- 2. 执行，生成 Session Key
```
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
```

<img :src="$withBase('/zh/validator-tutorial/session_key.png')" alt="" width="70%" />

- 3. 将生成的 Session Key 复制到页面中进行设置

- 4. SessionKey 生成完毕，关闭 9933、9944 端口和 RPC 权限（开放 RPC 权限有一定安全风险，不建议公开开放）
```
docker run -it -p 30333:30333 bifrostnetwork/bifrost:asgard-v0.5.0 --name "NodeName" --validator
```
