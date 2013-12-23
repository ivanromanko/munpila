##Плагин для Google Chrome, облегчающий обработку заявок на zakupki.gov.ru

###Общий принцип работы

Плагин позволяет подсветить на странице поиска те заказы и закупки, ссылки на которые содержатся на одном из листов документа Google Spreadsheet. Для того, чтобы плагин мог работать с документом, документ должен быть опубликован.

###Детали

В данный момент плагин жёстко привязан к документу ["Новый Год"](https://docs.google.com/spreadsheet/ccc?key=0Ar0A-n08O083dDA0UjhYSDJzYUxxcFNvRjQxclJOQkE&usp=drive_web#gid=14) и работает с данными, расположенными на первых восемнадцати листах (сейчас это все листы документа). В последующих версиях можно будет указывать, с каким документом ведётся работа.

Плагин интегрирует в тело страницы zakupki.gov.ru скрипт и передаёт ему на вход массив заявок, уже обработанных активистами муниципальной пилы и хранящийся в описанном выше документе. Скрипт пробегает по результатам поиска заявок и, если находит элемент, уже находящийся в хранилище, подсвечивает его приятным цветом, указывая название организации, разместившей закупку, и название листа документа Google Spreadsheet, на котором расположено описание закупки.

Есть несколько требований к документам:

1. Таблица не должна содержать пустых строк. Содержимое после пустой строки не публикуется и поэтому не попадёт в данные, с которыми работает плагин.
2. Первый столбец и первая строка каждого листа – это заголовки, плагин их не анализирует.

###Порядок работы
(часть пунктов пока не актуальна)

1. Создайте документ Google Spreadsheet.
2. Заполните его информацией так, чтобы данные по каждой интересной заявке с сайта zakupki.gov.ru располагались в одной строке, начиная со второй ячейки. Описание обязательно должно содержать ссылку на заявку/закупку в любой ячейке.
3. Опубликовать документ (Файл -> Опубликовать в Интернете -> Начать публикацию). Скопируйте ссылку на опубликованные данные.
4. Окройте страницу настроек плагина, вставьте ссылку в свободное поле и активируйте её.
3. Перейдите на страницу поиска закупок на сайте zakupki.gov.ru, сделайте отбор.
4. После того, как страница полностью загрузится, нажмите на кнопку плагина.
5. Если какие-то из результатов поиска есть в документе, они подсветятся.

###Установка

1. Скачайте последнюю версию плагина по [ссылке](http://yadi.sk/d/awc9bUI-EpeyZ).
2. Распакуйте плагин.
3. Запустите Google Chrome, нажмите кнопку доступа к меню (с тремя горизонтальными чёрточками) и перейдите в Инструменты -> Расширения.
4. Перетащите распакованный плагин в окно плагинов, подтвердите право плагина на доступ.
5. Первые версии плагина можно протестировать, открыв [страницу](http://zakupki.gov.ru/epz/main/public/extendedsearch/search.html?_aTypes=on&_aTypes=on&_aTypes=on&searchPlace=EVERYWHERE&searchType=STANDARD&_purchaseMethodList=on&_purchaseMethodList=on&_purchaseMethodList=on&_purchaseMethodList=on&_purchaseMethodList=on&_purchaseMethodList=on&_purchaseMethodList=on&_purchaseMethodList=on&orderPriceCurrencyId=-1&customer.title=%D0%9C%D0%B5%D1%81%D1%82%D0%BD%D0%B0%D1%8F+%D0%90%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F+%D0%BC%D1%83%D0%BD%D0%B8%D1%86%D0%B8%D0%BF%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F+%D0%9C%D1%83%D0%BD%D0%B8%D1%86%D0%B8%D0%BF%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%BE%D0%BA%D1%80%D1%83%D0%B3+%D0%A1%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5&customer.code=01723000008&customer.fz94id=700768&_custLev=on&_custLev=on&_custLev=on&_custLev=on&_okdpWithSubElements=on&orderStages=AF&_orderStages=on&orderStages=CA&_orderStages=on&orderStages=PC&_orderStages=on&orderStages=PA&_orderStages=on&_jointPurchase=on&_byRepresentativeCreated=on&_okvedWithSubElements=on&selectedMatchingWordPlace223=NOTICE_AND_DOCS&_headAgencyWithSubElements=on&smallBusinessSubject=I&rnpData=I&executionRequirement=I&penalSystemAdvantage=I&disabilityOrganizationsAdvantage=I&russianGoodsPreferences=I&contractPriceCurrencyId=-1&_nonBudgetType=on&_nonBudgetType=on&_nonBudgetType=on&_nonBudgetType=on&_nonBudgetType=on&_nonBudgetType=on&_nonBudgetType=on&_nonBudgetType=on&_contractStatuses=on&_contractStatuses=on&_contractStatuses=on&_searchInCommitedComplaints=on&_inspectionIsPrescriptionIssued=on&matchingWordPlace94=NOTIFICATIONS&_matchingWordPlace94=on&_matchingWordPlace94=on&_matchingWordPlace94=on&_matchingWordPlace94=on&morphology=false&strictEqual=false) и нажав на кнопку плагина после её загрузки.

Протестировано на Mac OS X c Google Chrome v31.

###TODO
- [ ] Страница настроек
- [ ] Автоопределение количества листов в документе


