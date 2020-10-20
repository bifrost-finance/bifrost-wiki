# Инструкция по кросс-чейн отправке EOS

## EOS Jungle Testnet - Asgard CC3 | TokenPocket 钱包跨链转账

**1. Создайте аккаунт в тестовой сети EOS, [нажмите здесь для просмотра инструкции по регистрации](https://wiki.bifrost.finance/zh/help/eos-testnet-account-register.html)**

**2. Откройте приложение кошелька TokenPocket на мобильном телефоне (ссылка для скачивания：<https://www.tokenpocket.pro/>**

**3. Нажмите `Me`, затем `Settings`-`Node Settings`**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-01.png')" alt="" width="30%" />

**4. 下拉至自定义节点，点击`添加自定义节点` 复制粘贴节点链接：https://api.jungle3.alohaeos.com:443**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-02.png')" alt="" width="30%" />

**5. Вернитесь в раздел Assets и нажмите на кошелек в правом верхнем углу, чтобы импортировать аккаунт в тестовой сети EOS**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-03.png')" alt="" width="30%" />

**6. После успешного импорта вернитесь на главную страницу кошелька - в разделе `Assets` вы увидите 100 тестовых монет EOS.**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-04.png')" alt="" width="30%" />

**7. Нажмите на кнопку `Transfer` и введите bifrostcross в качестве получателя в поле `Receiver`**

**8. 在`备注`内复制粘贴你的 BNC 地址@bifrost 例如：5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY@bifrost:EOS**

**Примечание: для получения адреса BNC перейдите в раздел [Инструкция по созданию кошелька BNC](https://wiki.bifrost.finance/zh/help/bnc-wallet-register-tutorials.html)**

**9. Для осуществления кросс-чейн транзакции сумма перевода составлять более 50 EOS**

<img :src="$withBase('/zh/tp-cross-transfer/tp-eos-crosschain-transfer-05.png')" alt="" width="30%" />

**以上就是使用 TP 钱包从 EOS Jungle 测试网向 Bifrost Asgard CC3 跨链转账的全部过程啦~此外，大家还可以通过命令方法 Cleos 进行跨链转账操作**

## Asgard CC3 - EOS Jungle Testnet | 跨链转账

**1. Откройте панель мониторинга Bifrost: <https://dash.bifrost.finance/>**

**2. Нажмите на кнопку `Extrinsics` на левой панели навигации и выберите свой адрес Bifrost**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-01.png')" alt="" />

**3. Перейдите по ссылке <https://onlinehextools.com/convert-utf8-to-hex> и уберите галочки с трех опций в выпадающем списке**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-03.png')" alt="" />

**4. Преобразуйте ваш адрес Bifrost в адрес, начинающийся с 0x, как показано на рисунке：**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-02.png')" alt="" />

**5. Вернитесь в панель управления Bifrost и введите информацию для отправки**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-04.png')" alt="" />

**6. Вернитесь на <https://onlinehextools.com/convert-utf8-to-hex>, введите memo и преобразуйте его в адрес 0x (необязательно)**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-05.png')" alt="" />

**7. Вернитесь на панель мониторинга Bifrost, введите преобразованное memo и нажмите кнопку `Submit transaction` для отправки**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-06.png')" alt="" />

**8. Нажмите `Sign and Submit` для подтверждения транзакции**

<img :src="$withBase('/zh/eos-crosschain-transfer/eos-crosschain-transfer-07.png')" alt="" />

**9. Вернитесь в кошелек TokenPocket, чтобы проверить баланс EOS.**

## Кросс-чейн транзакции с помощью инструмента cleos