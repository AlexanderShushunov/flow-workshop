# Мастер-класс "Типизируй этo"

Материалы для мастер-класса "Типизируй это" на [FrontendConf 2018](http://frontendconf.ru/moscow/2018/abstracts/3774)

## Необходимое ПО
1. [git](https://git-scm.com/)
2. [Node.js](https://nodejs.org/en/) >= 8  
3. Одна из IDE. [WebStorm](https://www.jetbrains.com/webstorm/), 
[Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)
(желательно [Nuclide](https://nuclide.io/docs/quick-start/getting-started/#installation)) 
или [VSCode](https://code.visualstudio.com/download)
4. [yarn](https://yarnpkg.com/lang/en/docs/install/)

## Задание 1
Ветка *task-1* (ну вы и так здесь) 
- Настройте Flow в проекте и IDE.
- Напишите функцию includes, которая возвращает true, если в массиве 
строк (первый параметр) есть заданное число или строка (второй параметр).

## Подсказки

- Добавить flow в порект
``` bash
 yarn add -D flow-bin
 yarn flow init
 yarn flow
```
 - [Как настроить](https://flow.org/en/docs/editors/) любимую IDE.
 - Подружить Babel c Flow можно с помощью [этого плагина](https://www.npmjs.com/package/@babel/preset-flow) 
 - Не забывайте добавлять директиву  в начале файлов  ` // @flow `.
 - [Документация](https://flow.org/en/docs/types/primitives/) по примитивным типам,
  [Union](https://flow.org/en/docs/types/unions/), и [массивам](https://flow.org/en/docs/types/arrays/).
  - Запустите тесты
  ``` bash
   yarn test
  ``` 
 - Мое решение в ветке *task-1-answer*.