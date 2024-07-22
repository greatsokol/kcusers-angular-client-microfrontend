# Host приложение и микрофронтенд сервиса управления пользователями keycloak (KCUSers)
## Структура проекта
* host-приложение расположено в корне проекта
* в каталоге `projects` расположены:
  * `auth-lib` - общая библиотека, реализующая взаимодействие с сервисом `KeycloakService`, эту бибилиотеку можно использовать в микрофрониендах, подключая в исходный код `import {AuthService} from "@@auth-lib";`,
  * `mf-example` - демонстрационный проект микрофронтенда, можно использовать как основу для реализации других МФ,
  * `mf-kcusers` - микрофронтенд, реализующий административный интерфейс для сервиса управления пользователями keycloak (`KCUSers`).

Для реализации функционала микрофронтендов используется библиотека `"@angular-architects/module-federation"`.
  
## Аутентификация
При запуске `host` (или микрофронтендов `mf-example`, `mf-kcusers` в самостоятельном режиме), требуется аутентификация в `keycloak`. 
Полученный в результате аутентификации токен автоматически добавляется в заголовок `Authorization: Bearer` при использовании стандартного сервиса HttpClient.
Токен обновляется автоматически после истечения его срока.

Взаимодействие с keycloak реализовано с помощью библиотек `"keycloak-angular"` и `"keycloak-js"`.

## Настройка keycloak

> URL-адреса и названия приведены для примера, замените на актуальные!

1. Запустите keycloak по адресу `https://keycloak.local`.
2. В keycloak, в разделе `Client scopes` проверьте scope `roles`:
  * На закладке `Mappers` добавьте mapper `realm roles`, если отсутствует.
  * В маппере `realm roles` должен быть включен переключатель `Add to ID token`.
3. В keycloak создайте клиент `microfrontends_client`. При создании укажите:
   * Тип клиента: OpenID `Connect`
   * Client authentication: `Off`
4. В клиенте `microfrontends_client` добавьте в поля `Valid redirect URIs` и `Web origins` URL-адреса host и каждого микрофронтенда. Например:
>    Valid redirect URIs:  
>                          
>                         https://localhost:4200/*
> 
>                         https://localhost:4201/*
> 
>                         https://localhost:4202/*
>
>    Web origins:          
> 
>                         https://localhost:4200
> 
>                         https://localhost:4201
> 
>                         https://localhost:4202

5. Далее, при добавлении каждого нового микрофронтенда, потребуется добавление его адреса в эти поля.
Это требуется для безопасной переадресации после аутентификации и для реализации кросдоменных запросов (CORS) от приложений к keycloak.

## Настройка host
1. В файле манифеста `src/assets/mf.manifest.json` должны быть перечислены микрофронтенды, используемые в работе host.
Например:
>      {
>        "mf_example": "https://localhost:4201/remoteEntry.js",
>        "mf_kcusers": "https://localhost:4202/remoteEntry.js"
>      }

Далее псевдонимы `mf_example` и `mf_kcusers` используются в роутере (файл `src/hostapp/hostapp.routes.ts`).

2. В файле `src/assets/config.json` должны быть указаны настройки подключения к keycloak.
   *. url - адрес keycloak,
   *. realm - рилм, в котором создан клиент,
   *. clientId - клиент,
   *. redirectUri - адрес приложения host для обратной переадресации.
> Например:
> 
>     {
>       "keycloak": {
>         "url": "https://keycloak.local",
>         "realm": "master",
>         "clientId": "microfrontends_client",
>         "redirectUri": "https://localhost:4200"
>       }
>     }

## Настройка mf-example
1. В файле `projects/mf-example/src/assets/config.json` должны быть указаны настройки подключения к keycloak.
   *. url - адрес keycloak,
   *. realm - рилм, в котором создан клиент,
   *. clientId - клиент,
   *. redirectUri - адрес приложения host для обратной переадресации.
>Например:
> 
>     {
>       "keycloak": {
>       "url": "https://keycloak.local",
>       "realm": "master",
>       "clientId": "microfrontends_client",
>       "redirectUri": "https://localhost:4201"
>       }
>     }

## Настройка mf-kcusers
1. В файле `projects/mf-kcusers/src/assets/config.json` должны быть указаны настройки подключения к keycloak.
   *. url - адрес keycloak,
   *. realm - рилм, в котором создан клиент,
   *. clientId - клиент,
   *. redirectUri - адрес приложения host для обратной переадресации.
>Например:
> 
>     {
>       "keycloak": {
>       "url": "https://keycloak.local",
>       "realm": "master",
>       "clientId": "microfrontends_client",
>       "redirectUri": "https://localhost:4201"
>       }
>     }

2. В файле `projects/mf-kcusers/src/app/consts.ts` указать URL-адрес API-сервиса KCUsers.
>Например:
> 
>     export const serverUrl:string = "https://kcusers.local";

## Запуск

Выполните команды:
1. Загрузите зависимости: `npm install`
2. Запустите host приложение:

* Запустите keycloak 
* Запустите host `npm run start:host`

3. Запустите демонстрационный микрофронтенд:

* `npm run start:mf-example`

4. Запустите МФ управления пользователями:

* Запустите микросервис KCUsers 
* Запустите микрофронтенд KCUsers: `npm run start:mf-kcusers`

