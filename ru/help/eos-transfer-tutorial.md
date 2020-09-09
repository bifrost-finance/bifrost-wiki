# Инструкция по кросс-чейн отправке EOS

## Кросс-чейн транзакции из тестовой сети EOS Jungle в Asgard CC2 в кошельке TokenPocket

**1. Создайте аккаунт в тестовой сети EOS, [нажмите здесь для просмотра инструкции по регистрации](https://wiki.bifrost.finance/zh/help/eos-testnet-account-register.html)**

**2. Откройте приложение кошелька TokenPocket на мобильном телефоне (ссылка для скачивания：<https://www.tokenpocket.pro/>**

**3. Нажмите `Me`, затем `Settings`-`Node Settings`**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-01.png')" alt="" width="30%" />

**4. Проскрольте страниуц вниз до раздела Custom, нажмите кнопку `Add a custom node`, вставьте ссылку: https://jungle.eosn.io:443**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-02.png')" alt="" width="30%" />

**5. Вернитесь в раздел Assets и нажмите на кошелек в правом верхнем углу, чтобы импортировать аккаунт в тестовой сети EOS**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-03.png')" alt="" width="30%" />

**6. После успешного импорта вернитесь на главную страницу кошелька - в разделе `Assets` вы увидите 100 тестовых монет EOS.**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-04.png')" alt="" width="30%" />

**7. Нажмите на кнопку `Transfer` и введите bifrostcross в качестве получателя в поле `Receiver`**

**8. Скопируйте и вставьте свой адрес BNC и @bifrost в поле `Memo` например： 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpnehxcpcnohgkutqy@bifrost**

**Примечание: для получения адреса BNC перейдите в раздел [Инструкция по созданию кошелька BNC](https://wiki.bifrost.finance/zh/help/bnc-wallet-register-tutorials.html)**

**9. Для осуществления кросс-чейн транзакции сумма перевода составлять более 50 EOS**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-05.png')" alt="" width="30%" />

**Выше представлен весь процесс проведения кросс-чейн транзакции из тестовой сети EOS Jungle в Bifrost Asgard CC2 с использованием кошелька TP ~ вы также можете использовать командный инструмент Cleos для осуществления операций кросс-чейн транзакций**

## Кросс-чейн транзакции из Asgard CC2 в тестовую сеть EOS Jungle

**1. Откройте панель мониторинга Bifrost: <https://dash.bifrost.finance/>**

**2. Нажмите на кнопку `Extrinsics` на левой панели навигации и выберите свой адрес Bifrost**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-01.png')" alt="" />

**3. 点击链接 <https://onlinehextools.com/convert-utf8-to-hex> 下拉取消三个选项**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-03.png')" alt="" />

**4. 再将你的 Bifrost 地址转化为 0x 开头地址，如图所示：**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-02.png')" alt="" />

**5. 返回 Bifrost Dashboard，输入转账信息**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-04.png')" alt="" />

**6. 返回 <https://onlinehextools.com/convert-utf8-to-hex> 随意填写一个 memo 信息，将其转化成 0x 地址**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-05.png')" alt="" />

**7. 返回 Bifrost Dashboard，输入转化后的 memo 信息，点击`Submit Transaction`跨链转账**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-06.png')" alt="" />

**8. 点击`Sign and Submit`提交交易**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-07.png')" alt="" />

**9. 返回 TP 钱包查看 EOS 余额**

## Cleos 命令方法跨链转账