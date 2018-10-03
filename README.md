# Мастер-класс "Типизируй этo"

Материалы для мастер-класса "Типизируй это" на [FrontendConf 2018](http://frontendconf.ru/moscow/2018/abstracts/3774)

## Пример приложения на **React**
Существует приложение "Крестики нолики". 
Оно построено на базе creat-react-app

Исходники:
- *src/game* - "движок" игры
- *src/app* - корневой компонент приложения (layout и контроллер)
- *src/components* - презентационные компоненты (поле, клетка, инфо и т.д.)

## Задание 2
Ветка *task-2* (ну вы и так здесь) 

Добавьте в движок TicTacToe метод *cheat*. Если игра не окончена, 
то он должен чистить клетку. 

## Подсказки

- Запустите тесты
``` bash
 yarn test
```
 - Spread лучше не [использовать](https://github.com/facebook/flow/issues/6342).
 - [Документация](https://flow.org/en/docs/types/objects/) по объектам.
 - Мое решение в ветке *task-2-answer*.