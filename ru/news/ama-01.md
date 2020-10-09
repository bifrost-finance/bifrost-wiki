# Взаимодействие стейкинга и DeFi | Как сочетать ликвидность с высокими вознаграждениями.

**Ведущий: Здравствуйте, добро пожаловать на первую онлайн AMA-сессию Bifrost. Меня зовут Бонни~**

**После пяти месяцев разработки Bifrost постепенно привлек общественное внимание.Мы прошли путь от первой концепции до рабочей тестовой сети, постоянно преподносящей сюрпризы. В первом AMA Лурпис, сооснователь & основной разработчик Bifrost, перенесет вас в удивительный мир Bifrost. Эта сессия разделена на две части: вопросы ведущего и свободные вопросы аудитории.**

**Ведущий：для начала, давайте поприветствуем Лурписа, он кратко опишет Bifrost.**

Привет всем, я Лурпис из Bifrost, сегодня я расскажу вам о нашем проекте.

Bifrost - это кросс-чейн сеть, которая обеспечивает ликвидность для стейкинга. Пользователи могут в любое время обменять POS-токены на Bifrost vToken с помощью моста Bifrost для получения доходности от стейкинга и предоставления ликвидности. Например, вы можете обменять EOS на vEOS, в результате вы будете получать дохода от стейкинга EOS, а также в любой момент иметь возможность продать vEOS и вернуть EOS. Кроме того, vEOS можно использовать в различных сферах, включая DeFi, Dapp, DEX и др. Например, при использовании vEOS в качестве залога, доход от стейкинга может компенсировать часть процентов, что позволяет реализовать низкопроцентное кредитование. Есть и друге качественные проекты-парачейны в экосистеме Polkadot, такие как Acala Network, который выпускает стейблкоины, и Darwinia Network, который сосредоточен на создании игровой экосистемы. Во всех этих проектах может использоваться vToken, что расширяет сценарии использования токена.

**2. Ведущий：итак, какую роль играет vToken в стейкинге? Как он обеспечивает ликвидность для стейкинга?**

Прежде всего, vToken - это своего рода универсальный актив, используемый для обеспечения ликвидности стейкинга. Возьмем, к примеру, токен KSM - когда пользователь участвует в номинирует определенную ноду, токены KSM, использованные для этой операции, блокируются. В результате, если вам потребуется продать KSM, вам нужно будет подождать не менее 7 дней с момента выполнения операции возврата. Если в течение периода погашения произойдут непредвиденные обстоятельства на рынке, токены могут обесцениться. Если же использовать стейкинг через Bifrost, то у вас всегда будет возможность продать vKSM в соответствии с обменным курсом. При падении рынка у вас будет возможность напрямую продать vKSM. Кроме того, vKSM можно также передавать, торговать, использовать в Dapp по своему усмотрению и даже использовать в качестве обеспечения в DeFi или давать в долг для двойной выгоды от стейкинга и кредитования.

**3. Ведущий：понял. Проще говоря, исходный токен будет получать доход от стейкинга, а выпущенный вместо него vToken можно будет использовать на рынке для торговли или инвестиций. Тогда возникает вопрос, как получить vToken? Какие есть способы?**

Есть 2 основных способа получения vToken

1. Через обменный контракт Bifrost - исходный токен может быть непосредственно преобразован в vToken в соответствии с курсом на момент обмена. 2. Поскольку vToken будет доступен для торговли, пользователи смогут купить vToken на криптовалютной бирже, и также получать доход от стейкинга. Кроме того, для удобства пользователей мы будем предоставлять swap-функционал. Ожидается, что тестовая версия приложения Bifrost будет запущена 15 апреля. Пользователи смогут получить токены KSM и DOT в тестовой сети Bifrost через Telegram-бота, а опробовать обмен, торговлю и стейкинг непосредственно в приложении.

**4. Ведущий：хорошо, теперь, когда мы узнали о том, как получить vToken, не могли бы вы рассказать нам о его преимуществах? Откуда берется доход? Почему токен будет иметь ценность?**

Ценность токена достигается через 2 составляющие. Во-первых, гарантированный доход зависит от ставок доходности в публичных блокчейнах - например, у KSM годовая процентная ставка в настоящее время составляет 20%, поэтому доходность vKSM будет также составлять не менее 20%. Во-вторых, вы можете получать доход за номинирование нод в Bifrost Staking Pool. Некоторые ноды готовы платить хорошее вознаграждение за их номинацию, следовательно пользователи будут получать больший доход чем от стандартного стейкинга KSM.

Также, соревнование за номинирование в Bifrost Staking Pool дает возможность небольшим нодам с качественным сервисом, но со сравнительно небольшим количеством голосов, конкурировать с крупными нодами, что делает PoS-сеть более децентрализованной и безопасной.

**5. Выслушав ваше описание vToken, я думаю, что он действительно повысит ликвидность для стейкинга, и я также надеюсь, что у vToken будет много сценариев сценариев. Как уже упоминалось ранее, Bifrost - это парачейн Polkadot, не могли бы вы немного рассказать о том, что такое парачейн?**

Парачейны - это своего рода приложения в сети Polkadot, которые в свою очередь являются независимыми блокчейнами. Но в отличие от других популярных публичных блокчейнов, между парачейнами можно обмениваться данными. Существует особый вид парачейнов, называемый "бриджем" (от англ. "мост"). Функция бриджа состоит в присоединении мостов других блокчейн-проектов к сети Polkadot, в результате чего достигается совместимость между парачайнами и другими публичными блокчейнами. Мы надеемся, что по аналогии с нашей разработкой моста между EOS и Bifrost, мы надеемся присоединить EOS к экосистеме Polkadot. В результате такой интеграции пользователи Polkadot смогут получать доход от стейкинга EOS, а пользователи EOS смогут взаимодействовать с парачейнами из экосистемы Polkadot..

**6. Ведущий：понятно. Недавно я встречался с друзьями, которые с нетерпением ждут запуска основной сети Polkadot. Не могли бы вы немного рассказать нам о запуске?**

Ожидается, что запуск основной сети Polkadot состоится в июне 2020 года, но уже была запущена Kusama - это тестовая открытая сеть, разработка которой идет в 4 раза быстрее Polkadot. KSM будет работать независимо от Polkadot и подавляющее большинство решений, которые планируются к внедрению в Polkadot, будут сначала внедрены в Kusama, так что для команд, которые хотят стать частью экосистемы Polkadot, Kusama является неплохим выбором для старта. Bifrost будет доступен в сети Kusama перед запускам на Polkadot, а также будет поддерживать обмен токенов vKSM.

**7. Ведущий：теперь я бы хотел попросить Лурписа кратко рассказать нам об аукционе слотов на запуск в основной сети Polkadot. Какие усилия прилагает Bifrost для получения слота?**

Сразу после запуска основной сети Polkadot ожидается запуск аукциона слотов, который будет проводиться каждые 6 месяцев. Насколько нам известно, на старте будет доступно достаточно мало слотов. Команды, разрабатывающие парачейны, которые хотят получить слоты, должны будут заблокировать токены DOT, чтобы сделать ставку на использование слотов в течение 6-24 месяцев. Перед аукционом Bifrost запустит свое IPO (первоначальное размещение парачейна). Если у вас есть токены DOT, вы сможете принять участие в этом IPO, и если Bifrost успешно победит в аукционе, то вы получите щедрое вознаграждение в токенах BNC в качестве компенсации за заблокированные токены DOT. Токены, которые вы используете для участия в IPO не тратятся, а просто блокируются. Продолжительность блокировки зависит от того, как долго будет использоваться слот парачейна. После истечения срока действия слота вы получаете свои токены DOT, так что все, что вы теряете, участвуя в IPO, - это потенциальный доход от стейкинга DOT и возможные альтернативные издержки от хранения токенов этих токенов.

**8. Ведущий：все мы знаем,что Bifrost не так давно финансировался WEB3 Foundation. Можете немного рассказать о текущем сотрудничестве с WEB3 и Polkadot?**

Bifrost стал известен широкой публике благодаря получению наград на первом Substrate Hackathon гранту от Web3 Foundation. Кроме того, Bifrost требуется использовать сеть Substrate и Polkadot для построения бизнес-логики, так что проект активно взаимодействует с Polkadot. Конечно, будучи парачейном Polkadot, первыми поддерживаемыми vToken на платформе Bifrost станут активы из экосистемы Polkadot, такие как vDOT и vKSM. Мы также будем рады сотрудничать с другими парачейнами для предоставления ликвидности для стейкинга.

**9. Ведущий：спасибо за ответы, мы с нетерпением ждем развития Bifrost. Не могли бы вы рассказать нам что-нибудь о текущем прогрессе?**

Bifrost запустил тестовую сеть POC-2 21 марта 2020 года. Число нод по всему миру достигло 25 за одну неделю. В тестовой сети POC-2 мы наладили работу ряда основных логик, таких как стабильность блоков, управление POA, корректировка обменного курса vToken и т.д. Также мы начали создавать сообщество пользователей и налаживать рыночные сотрудничества.

**10. Ведущий：последний вопрос, что входит в дорожную карту Bifrost?**

Мы продолжим совершенствовать разработки в тестовой сети POC-2 и планируем интегрировать нашу тестовую сеть Bifrost с тестовой сетью EOS Jungle. Планируется, что 1 мая будет официально запущена предрелизная сеть Bifrost Asgard, которая будет аналогична Kusama. Команды, которые хотят создавать проекты в Bifrost, смогут заранее протестировать бизнес-логику в сети Bifrost Asgard. 30 мая мы планируем провести предварительный просмотр IPO в сети Kusama, чтобы протестировать процесс IPO Bifrost. Ожидается, что 30 июня Bifrost станет парачейном в сети Kusama и позволит совершать обмены KSM. В целом, мы планируем завершить разработку основной сети Bifrost к запуску основной сети Polkadot и постараемся стать первым парачейном Polkadot.