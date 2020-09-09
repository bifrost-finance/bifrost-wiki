# Инструкция для валидатора
### Обзор
- Знакомство с инструкцией и создание кошелька Bifrost.
- Знакомство с инструкцией и запуск ноды
- Настройка валидатора
- Генерация сеансового ключа и его привязка
- Стейкинг и номинирование
- Избранный валидатор

### Настройка валидатора
- Перейдите на страницу Staking / Account Action

<img :src="$withBase('/zh/validator-tutorial/validator_1.png')" alt="" width="70%" />

- Нажмите + Validator
    - Stash Account (адрес, где хранится ASG)
    - Controller Account (адрес управляющей ноды)
    - Введите количество self-collateralized ASG

<img :src="$withBase('/zh/validator-tutorial/validator_2.png')" alt="" width="70%" />

> Для Stash и Controller Account в целях безопасности рекомендуется использовать два разных адреса.
- Следующий шаг
    - Введите сеансовый ключ (инструкция по генерации представлена ниже)
    - Укажите комиссию ноды в процентах (в настоящее время тестовая сеть ASG не имеет ценности, заполните по желанию)

<img :src="$withBase('/zh/validator-tutorial/validator_3.png')" alt="" width="70%" />

- Создание валидатора

### Генерация сессионного ключа
- 1. Откройте порт 9933 и настройте разрешения RPC, остановите работу ноды и перезапустите с помощью приведенной ниже команды
```
docker run -it -p 30333:30333 -p 9944:9944 -p 9933:9933 -v /folder/bifrost-node:/node bifrostnetwork/bifrost:asgard-v0.4.0 --base-path '/node' --name "NodeName | BNCAddress" --rpc-cors 'all' --unsafe-ws-external --rpc-methods 'Unsafe' --unsafe-rpc-external --validator
```

- 2. Выполните следующую команду и сгенерируйте сеансовый ключ
```
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
```

<img :src="$withBase('/zh/validator-tutorial/session_key.png')" alt="" width="70%" />

- 3. Скопируйте сгенерированный сеансовый ключ и вставьте в настройках

- 4. После создания сессионного ключа закройте порт 9933 и верните разрешения RPC к исходным значениям (открытие разрешений RPC сопряжено с определенными рисками безопасности, поэтому открывать их для общего доступа не рекомендуется)
```
docker run -it -p 30333:30333 -p 9944:9944 -v /folder/bifrost-node:/node bifrostnetwork/bifrost:asgard-v0.4.0 --base-path '/node' --name "NodeName | BNCAddress" --rpc-cors 'all' --unsafe-ws-external --validator
```
