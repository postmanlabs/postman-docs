---
title: "Dynamic Variables List"
page_id: "variables_list"
order: 82
warning: false

---

The following is a list of dynamic variables whose values are randomly generated during the request/collection run.

> To use dynamic variables in pre-request or test scripts, you need to use `pm.variables.replaceIn()`, e.g. `pm.variables.replaceIn('{{$randomFirstName}}')`.

### Common

| **Variable Name**         | **Description**                               | **Examples**                               |
|:--------------------------|:----------------------------------------------|:-------------------------------------------|
| **`$guid`**               | A `uuid-v4` style guid                        | `"611c2e81-2ccb-42d8-9ddc-2d0bfa65c1b4"`   |
|                           |                                               | `"3a721b7f-7dc9-4c45-9777-516942b98e0d"`   |
|                           |                                               | `"22eca807-006b-47df-9511-e92e37f5071a"`   |
| **`$timestamp`**          | The current UNIX timestamp in seconds                   | `1562757107`, `1562757108`, `1562757109`   |
| **`$randomUUID`**         | A random 36-character UUID                    | `"6929bb52-3ab2-448a-9796-d6480ecad36b"`   |
|                           |                                               | `"53151b27-034f-45a0-9f0a-d7b6075b67d0"`   |
|                           |                                               | `"727131a2-2717-44ad-ab02-006587e947dc"`   |

### Text, Numbers and Colors

| **Variable Name**         | **Description**                                | **Examples**                               |
|:--------------------------|:----------------------------------------------|:-------------------------------------------|
| **`$randomAlphaNumeric`** | A random alpha-numeric character              | `6`, `"y"`, `"z"`                          |
| **`$randomBoolean`**      | A random boolean value (true/false)           | `true`, `false`, `false`, `true`           |
| **`$randomInt`**          | A random integer between 1 and 1000           | `802`, `494`, `200`                        |
| **`$randomColor`**        | A random color                                | `"red"`, `"fuchsia"`, `"grey"`             |
| **`$randomHexColor`**     | A random hex value                            | `"#47594a"`, `"#431e48"`, `"#106f21"`      |
| **`$randomAbbreviation`** | A random abbreviation                         | `SQL`, `PCI`, `JSON`                       |

### Internet and IP Addresses

| **Variable Name**         | **Description**                                | **Examples**                               |
|:--------------------------|:----------------------------------------------|:-------------------------------------------|
| **`$randomIP`**           | A random IPv4 address                         | `241.102.234.100`, `216.7.27.38`           |
| **`$randomIPV6`**         | A random IPv6 address                         | `dbe2:7ae6:119b:c161:1560:6dda:3a9b:90a9`  |
|                           |                                               | `c482:23a4:ce4c:a668:7736:6cc5:b0b6:cc37`  |
|                           |                                               | `c791:18d1:fbba:87d8:d929:22aa:5a0a:ac3d`  |
| **`$randomMACAddress`**   | A random MAC address                          | `33:d4:68:5f:b4:c7`, `1f:6e:db:3d:ed:fa`   |
| **`$randomPassword`**     | A random 15-character alpha-numeric password  | `t9iXe7COoDKv8k3`, `QAzNFQtvR9cg2rq`       |
| **`$randomLocale`**       | A random two-letter language code (ISO 639-1) | `"ny"`, `"sr"`, `"si"`                     |
| **`$randomUserAgent`**    | A random user agent                           | `Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.9.8; rv:15.6) Gecko/20100101 Firefox/15.6.6` |
|                           |                                               | `Opera/10.27 (Windows NT 5.3; U; AB Presto/2.9.177 Version/10.00)` |
|                           |                                               | `Mozilla/5.0 (Windows NT 6.2; rv:13.5) Gecko/20100101 Firefox/13.5.6` |
| **`$randomProtocol`**     | A random internet protocol                    | `"http"`, `"https"`                        |
| **`$randomSemver`**       | A random semantic version number              | `7.0.5`, `2.5.8`, `6.4.9`                  |

### Names

| **Variable Name**             | **Description**                | **Examples**                                              |
|:------------------------------|:------------------------------|:----------------------------------------------------------|
| **`$randomFirstName`**        | A random first name           | `Ethan`, `Chandler`, `Megane`                             |
| **`$randomLastName`**         | A random last name            | `Schaden`, `Schneider`, `Willms`                          |
| **`$randomFullName`**         | A random first and last name  | `Connie Runolfsdottir`, `Sylvan Fay`, `Jonathon Kunze`    |
| **`$randomNamePrefix`**       | A random name prefix          | `Dr.`, `Ms.`, `Mr.`                                       |
| **`$randomNameSuffix`**       | A random name suffix          | `I`, `MD`, `DDS`                                          |

### Profession

| **Variable Name**             | **Description**                | **Examples**                                              |
|:------------------------------|:------------------------------|:----------------------------------------------------------|
| **`$randomJobArea`**          | A random job area             | `Mobility`, `Intranet`, `Configuration`                   |
| **`$randomJobDescriptor`**    | A random job descriptor       | `Forward`, `Corporate`, `Senior`                          |
| **`$randomJobTitle`**         | A random job title            | `International Creative Liaison`,                         |
| | | `Product Factors Officer`,      |
| | | `Future Interactions Executive` |
| **`$randomJobType`**          | A random job type             | `Supervisor`, `Manager`, `Coordinator`                    |

### Phone, Address and Location

| **Variable Name**             | **Description**                | **Examples**                                              |
|:------------------------------|:------------------------------|:----------------------------------------------------------|
| **`$randomPhoneNumber`**      | A random 10-digit phone number| `700-008-5275`, `494-261-3424`, `662-302-7817`            |
| **`$randomPhoneNumberExt`**   | A random phone number with extension (12 digits) | `27-199-983-3864`, `99-841-448-2775`   |
| **`$randomCity`**             | A random city name            | `Spinkahaven`, `Korbinburgh`, `Lefflerport`               |
| **`$randomStreetName`**       | A random street name          | `Kuhic Island`, `General Street`, `Kendrick Springs`      |
| **`$randomStreetAddress`**    | A random street address       | `5742 Harvey Streets`, `47906 Wilmer Orchard`             |
| **`$randomCountry`**          | A random country              |`Lao People's Democratic Republic`, `Kazakhstan`, `Austria`|
| **`$randomCountryCode`**      | A random 2-letter country code (ISO 3166-1 alpha-2) | `CV`, `MD`, `TD`                    |
| **`$randomLatitude`**         | A random latitude coordinate  | `55.2099`, `27.3644`, `-84.7514`                          |
| **`$randomLongitude`**        | A random longitude coordinate | `40.6609`, `171.7139`, `-159.9757`                        |

### Images

| **Variable Name**         | **Description**                                | **Examples**                               |
|:--------------------------|:----------------------------------------------|:-------------------------------------------|
| **`$randomImage`**        | A random image                                | `http://lorempixel.com/640/480/technics`   |
|                           |                                               | `http://lorempixel.com/640/480/food`       |
|                           |                                               | `http://lorempixel.com/640/480/business`   |
| **`$randomAvatarImage`**  | A random avatar image                         | `https://s3.amazonaws.com/uifaces/faces/twitter/johnsmithagency/128.jpg` |
|                           |                                               | `https://s3.amazonaws.com/uifaces/faces/twitter/xadhix/128.jpg` |
|                           |                                               | `https://s3.amazonaws.com/uifaces/faces/twitter/martip07/128.jpg` |
| **`$randomImageUrl`**     | A URL for a random image                      | `http://lorempixel.com/640/480`            |
| **`$randomAbstractImage`**| A URL for a random abstract image             | `http://lorempixel.com/640/480/abstract`   |
| **`$randomAnimalsImage`** | A URL for a random animal image               | `http://lorempixel.com/640/480/animals`    |
| **`$randomBusinessImage`**| A URL for a random stock business image       | `http://lorempixel.com/640/480/business`   |
| **`$randomCatsImage`**    | A URL for a random cat image                  | `http://lorempixel.com/640/480/cats`       |
| **`$randomCityImage`**    | A URL for a random city image                 | `http://lorempixel.com/640/480/city`       |
| **`$randomFoodImage`**    | A URL for a random food image                 | `http://lorempixel.com/640/480/food`       |
|**`$randomNightlifeImage`**| A URL for a random nightlife image            | `http://lorempixel.com/640/480/nightlife`  |
| **`$randomFashionImage`** | A URL for a random fashion image              | `http://lorempixel.com/640/480/fashion`    |
| **`$randomPeopleImage`**  | A URL for a random image of a person          | `http://lorempixel.com/640/480/people`     |
| **`$randomNatureImage`**  | A URL for a random nature image               | `http://lorempixel.com/640/480/nature`     |
| **`$randomSportsImage`**  | A URL for a random sports image               | `http://lorempixel.com/640/480/sports`     |
| **`$randomTechnicsImage`**| A URL for a random tech image                 | `http://lorempixel.com/640/480/technics`   |
|**`$randomTransportImage`**| A URL for a random transportation image       | `http://lorempixel.com/640/480/transport`  |
| **`$randomImageDataUri`** | A random image data URI                       | `data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E` |

### Finance

| **Variable Name**          | **Description**                                | **Examples**                                 |
|:---------------------------|:----------------------------------------------|:---------------------------------------------|
| **`$randomBankAccount`**   | A random 8-digit bank account number          | `09454073`, `65653440`, `75728757`           |
|**`$randomBankAccountName`**| A random bank account name (e.g. savings account, checking account) | `Home Loan Account`, `Checking Account`, `Auto Loan Account` |
| **`$randomCreditCardMask`**| A random masked credit card number            | `3622`, `5815`, `6257`                       |
| **`$randomBankAccountBic`**| A random BIC (Bank Identifier Code)           | `EZIAUGJ1`, `KXCUTVJ1`, `DIVIPLL1`           |
|**`$randomBankAccountIban`**| A random 15-31 character IBAN (International Bank Account Number) | `MU20ZPUN3039684000618086155TKZ` |
| | | `BR7580569810060080800805730W2` |
| | | `XK241602002200395017`          |
| **`$randomTransactionType`**| A random transaction type (e.g. invoice, payment, deposit) | `invoice`, `payment`, `deposit`|
| **`$randomCurrencyCode`**  | A random 3-letter currency code (ISO-4217)    | `CDF`, `ZMK`, `GNF`                          |
| **`$randomCurrencyName`**  | A random currency name                        | `CFP Franc`, `Cordoba Oro`, `Pound Sterling` |
| **`$randomCurrencySymbol`**| A random currency symbol                      | `$`, `£`                                     |
| **`$randomBitcoin`**       | A random bitcoin address                      | `3VB8JGT7Y4Z63U68KGGKDXMLLH5`
| | | `1GY5TL5NEX3D1EA0TCWPLGVPQF5EAF` |
| | | `14IIEXV2AKZAHSCY2KNYP213VRLD` |

### Business

| **Variable Name**         | **Description**                                | **Examples**                               |
|:--------------------------|:----------------------------------------------|:-------------------------------------------|
| **`$randomCompanyName`**  | A random company name                         | `Johns - Kassulke`, `Grady LLC`            |
| **`$randomCompanySuffix`**| A random company suffix (e.g. Inc, LLC, Group)| `Inc`, `LLC`, `Group`                      |
| **`$randomBs`**           | A random phrase of business speak             | `killer leverage schemas`,                 |
|                           |                                               | `bricks-and-clicks deploy markets`,        |
|                           |                                               | `world-class unleash platforms`            |
| **`$randomBsAdjective`**  | A random business speak adjective             | `viral`, `24/7`, `24/365`                  |
| **`$randomBsBuzz`**       | A random business speak buzzword              | `repurpose`, `harness`, `transition`       |
| **`$randomBsNoun`**       | A random business speak noun                  | `e-services`, `markets`, `interfaces`      |

### Catchphrases

| **Variable Name**                 | **Description**                        | **Examples**                                        |
|:----------------------------------|:--------------------------------------|:----------------------------------------------------|
| **`$randomCatchPhrase`**          | A random catchphrase                  | `Future-proofed heuristic open architecture`,       |
|                                   |                                       | `Quality-focused executive toolset`,                |
|                                   |                                       | `Grass-roots real-time definition`                  |
| **`$randomCatchPhraseAdjective`** | A random catchphrase adjective        | `Self-enabling`, `Business-focused`, `Down-sized`   |
| **`$randomCatchPhraseDescriptor`**| A random catchphrase descriptor       | `bandwidth-monitored`, `needs-based`, `homogeneous` |
| **`$randomCatchPhraseNoun`**      | Randomly generates a catchphrase noun | `secured line`, `superstructure`,`installation`     |

### Databases

| **Variable Name**             | **Description**                            | **Examples**                               |
|:------------------------------|:------------------------------------------|:-------------------------------------------|
| **`$randomDatabaseColumn`**   | A random database column name             | `updatedAt`, `token`, `group`              |
| **`$randomDatabaseType`**     | A random database type                    | `tinyint`, `text`                          |
| **`$randomDatabaseCollation`**| A random database collation               | `cp1250_bin`, `utf8_general_ci`, `cp1250_general_ci`|
| **`$randomDatabaseEngine`**   | A random database engine                  | `MyISAM`, `InnoDB`, `Memory`               |

### Dates

| **Variable Name**             | **Description**                  | **Examples**                                              |
|:------------------------------|:--------------------------------|:----------------------------------------------------------|
| **`$randomDateFuture`**       | A random future datetime        | `Tue Mar 17 2020 13:11:50 GMT+0530 (India Standard Time)`,|
|                               |                                 | `Fri Sep 20 2019 23:51:18 GMT+0530 (India Standard Time)`,|
|                               |                                 | `Thu Nov 07 2019 19:20:06 GMT+0530 (India Standard Time)` |
| **`$randomDatePast`**         | A random past datetime          | `Sat Mar 02 2019 09:09:26 GMT+0530 (India Standard Time)`,|
|                               |                                 | `Sat Feb 02 2019 00:12:17 GMT+0530 (India Standard Time)`,|
|                               |                                 | `Thu Jun 13 2019 03:08:43 GMT+0530 (India Standard Time)` |
| **`$randomDateRecent`**       | A random recent datetime        | `Tue Jul 09 2019 23:12:37 GMT+0530 (India Standard Time)`,|
|                               |                                 | `Wed Jul 10 2019 15:27:11 GMT+0530 (India Standard Time)`,|
|                               |                                 | `Wed Jul 10 2019 01:28:31 GMT+0530 (India Standard Time)` |
| **`$randomWeekday`**          | A random weekday                | `Thursday`, `Friday`, `Monday`                            |
| **`$randomMonth`**            | A random month                  | `February`, `May`, `January`                              |

### Domains, Emails and Usernames

| **Variable Name**             | **Description**                  | **Examples**                                              |
|:------------------------------|:--------------------------------|:----------------------------------------------------------|
| **`$randomDomainName`**       | A random domain name            | `gracie.biz`, `armando.biz`, `trevor.info`                |
| **`$randomDomainSuffix`**     | A random domain suffix          | `org`, `net`, `com`                                       |
| **`$randomDomainWord`**       | A random unqualified domain name| `gwen`, `jaden`, `donnell`                                |
| **`$randomEmail`**            | A random email address          | `Pablo62@gmail.com`, `Ruthe42@hotmail.com`, `Iva.Kovacek61@hotmail.com`|
| **`$randomExampleEmail`**     | A random email address from an “example” domain | `Talon28@example.com`, `Quinten_Kerluke45@example.net`, `Casey81@example.net` |
| **`$randomUserName`**         | A random username               | `Jarrell.Gutkowski`, `Lottie.Smitham24`, `Alia99`         |
| **`$randomUrl`**              | A random URL                    | `https://anais.net`, `https://tristin.net`, `http://jakob.name` |

### Files and Directories

| **Variable Name**             | **Description**                                        | **Examples**                            |
|:------------------------------|:------------------------------------------------------|:----------------------------------------|
| **`$randomFileName`**         | A random file name (includes uncommon extensions)     | `neural_sri_lanka_rupee_gloves.gdoc`,   |
|                               |                                                       | `plastic_awesome_garden.tif`,           |
|                               |                                                       | `incredible_ivory_agent.lzh`            |
| **`$randomFileType`**         | A random file type (includes uncommon file types)     | `model`, `application`, `video`         |
| **`$randomFileExt`**          | A random file extension (includes uncommon extensions)| `war`, `book`, `fsc`                    |
| **`$randomCommonFileName`**   | A random file name                                    | `well_modulated.mpg4`,                  |
|                               |                                                       | `rustic_plastic_tuna.gif`,              |
|                               |                                                       | `checking_account_end_to_end_robust.wav`|
| **`$randomCommonFileType`**   | A random, common file type                            | `application`, `audio`                  |
| **`$randomCommonFileExt`**    | A random, common file extension                       | `m2v`, `wav`, `png`                     |
| **`$randomFilePath`**         | A random file path                                    | `/home/programming_chicken.cpio`,       |
|                               |                                                       | `/usr/obj/fresh_bandwidth_monitored_beauty.onetoc`,|
|                               |                                                       | `/dev/css_rustic.pm`                    |
| **`$randomDirectoryPath`**    | A random directory path                               | `/usr/bin`, `/root`, `/usr/local/bin`   |
| **`$randomMimeType`**         | A random MIME type                                    | `audio/vnd.vmx.cvsd`,                   |
|                               |                                                       | `application/vnd.groove-identity-message`,|
|                               |                                                       | `application/vnd.oasis.opendocument.graphics-template`|

### Stores

| **Variable Name**             | **Description**                           | **Examples**                                   |
|:------------------------------|:-----------------------------------------|:-----------------------------------------------|
| **`$randomPrice`**            | A random price between 100.00 and 999.00 | `531.55`, `488.76`, `511.56`                   |
| **`$randomProduct`**          | A random product                         | `Towels`, `Pizza`, `Pants`                     |
| **`$randomProductAdjective`** | A random product adjective               | `Unbranded`, `Incredible`, `Tasty`             |
| **`$randomProductMaterial`**  | A random product material                | `Steel`, `Plastic`, `Frozen`                   |
| **`$randomProductName`**      | A random product name                    | `Handmade Concrete Tuna`, `Refined Rubber Hat` |
| **`$randomDepartment`**       | A random commerce category               | `Tools`, `Movies`, `Electronics`               |

### Grammar

| **Variable Name**             | **Description**                           | **Examples**                                   |
|:------------------------------|:-----------------------------------------|:-----------------------------------------------|
| **`$randomNoun`**             | A random noun                            | `matrix`, `bus`, `bandwidth`                   |
| **`$randomVerb`**             | A random verb                            | `parse`, `quantify`, `navigate`                |
| **`$randomIngverb`**          | A random verb ending in "-ing"           | `synthesizing`, `navigating`, `backing up`     |
| **`$randomAdjective`**        | A random adjective                       | `auxiliary`, `multi-byte`, `back-end`          |
| **`$randomWord`**             | A random word                            | `withdrawal`, `infrastructures`, `IB`          |
| **`$randomWords`**            | Some random words                        | `Samoa Synergistic sticky copying Grocery`,    |
|                               |                                          | `Corporate Springs`,                           |
|                               |                                          | `Christmas Island Ghana Quality`               |
| **`$randomPhrase`**           | A random phrase                          | `You can't program the monitor without navigating the mobile XML program!`, |
| | | `overriding the capacitor won't do anything, we need to compress the optical SMS transmitter!`, |
| | | `I'll generate the virtual AI program, that should microchip the RAM monitor!` |

### Lorem Ipsum

| **Variable Name**             | **Description**                  | **Examples**                                              |
|:------------------------------|:--------------------------------|:----------------------------------------------------------|
| **`$randomLoremWord`**        |A random word of lorem ipsum text| `est`                                                     |
| **`$randomLoremWords`**       |Some random words of lorem ipsum text| `vel repellat nobis`                                  |
| **`$randomLoremSentence`**    |A random sentence of lorem ipsum text| `Molestias consequuntur nisi non quod.`               |
| **`$randomLoremSentences`**   |A random 2-6 sentences of lorem ipsum text|`Et sint voluptas similique iure amet perspiciatis vero sequi atque. Ut porro sit et hic. Neque aspernatur vitae fugiat ut dolore et veritatis. Ab iusto ex delectus animi. Voluptates nisi iusto. Impedit quod quae voluptate qui.`|
| **`$randomLoremParagraph`**   |A random paragraph of lorem ipsum text|`Ab aliquid odio iste quo voluptas voluptatem dignissimos velit. Recusandae facilis qui commodi ea magnam enim nostrum quia quis. Nihil est suscipit assumenda ut voluptatem sed. Esse ab voluptas odit qui molestiae. Rem est nesciunt est quis ipsam expedita consequuntur.`|
| **`$randomLoremParagraphs`** |3 random paragraphs of lorem ipsum text|`Voluptatem rem magnam aliquam ab id aut quaerat. Placeat provident possimus voluptatibus dicta velit non aut quasi. Mollitia et aliquam expedita sunt dolores nam consequuntur. Nam dolorum delectus ipsam repudiandae et ipsam ut voluptatum totam. Nobis labore labore recusandae ipsam quo.`|
| | | `Voluptatem occaecati omnis debitis eum libero. Veniam et cum unde. Nisi facere repudiandae error aperiam expedita optio quae consequatur qui. Vel ut sit aliquid omnis. Est placeat ducimus. Libero voluptatem eius occaecati ad sint voluptatibus laborum provident iure.`|
| | | `Autem est sequi ut tenetur omnis enim. Fuga nisi dolor expedita. Ea dolore ut et a nostrum quae ut reprehenderit iste. Numquam optio magnam omnis architecto non. Est cumque laboriosam quibusdam eos voluptatibus velit omnis. Voluptatem officiis nulla omnis ratione excepturi.`|
| **`$randomLoremText`**        | A random amount of lorem ipsum text | `Quisquam asperiores exercitationem ut ipsum. Aut eius nesciunt. Et reiciendis aut alias eaque. Nihil amet laboriosam pariatur eligendi. Sunt ullam ut sint natus ducimus. Voluptas harum aspernatur soluta rem nam.` |
| **`$randomLoremSlug`**        | A random lorem ipsum URL slug | `eos-aperiam-accusamus`, `beatae-id-molestiae`, `qui-est-repellat` |
| **`$randomLoremLines`**       | 1-5 random lines of lorem ipsum | `Ducimus in ut mollitia.\nA itaque non.\nHarum temporibus nihil voluptas.\nIste in sed et nesciunt in quaerat sed.`|
