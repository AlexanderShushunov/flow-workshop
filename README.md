# Мастер-класс "Типизируй этo"

Материалы для мастер-класса "Типизируй это" на [FrontendConf 2018](http://frontendconf.ru/moscow/2018/abstracts/3774)

## Пример приложения на **React**
Существует приложение "Крестики нолики". 
Оно построено на базе creat-react-app

Исходники:
- *src/game* - "движок" игры
- *src/app* - корневой компонент приложения (layout и контроллер)
- *src/components* - презентационные компоненты (поле, клетка, инфо и т.д.)

## Задание 3
Ветка *task-3*

Дотипизировать приложение. Какая еще ошибка нашлась?

## Подсказки

- [Документация](https://flow.org/en/docs/react/) по типизации React.
- [Документация](https://flow.org/en/docs/types/functions/) по типам функции.
- [Документация](https://flow.org/en/docs/config/options/#toc-suppress-comment-regex)
 по настройке. В частности по комментарию, выключающему Flow.
- [Документация](https://flow.org/en/docs/linting/) по встроенному линтеру.
- Посмотрите, как типизирован *isEqual* в [lodash](https://github.com/flow-typed/flow-typed/blob/master/definitions/npm/lodash_v4.x.x/flow_v0.63.x-/lodash_v4.x.x.js)
Может поможет протипизировать *is*.
 - Мое решение в ветке *task-3-answer*.