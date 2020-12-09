# Стиль кода JS

## Форматирование
### Строка не должна быть длиннее 80 символов
Строки более 80 символов длиной, снижают скорость чтения заставляя читателя
перемещать глаза на большое расстояние.

Не стоит забывать и о том, что код, написанный в Академии часто показывается
в разного рода презентациях, что увеличивает требования к читаемости кода

### Выравнивание знаков равенства запрещено
Трудоемкий и очень хрупкий процесс. Если хотя бы одна из переменных

### Перенос строк
#### Блоки кода отделяются двумя пробелами
Код внутри блока отбивается двумя пробелами относительно начала блока.
Правило работает даже внутри кода с другим отступом.
```diff
+ function factorial(number) {
+   if (number === 1 || number === 0) {
+     return 1;
+   }
+   
+   return number * factorial(number - 1);
+ }
```

```diff
+ document.querySelectorAll('button').
+     addEventListener('click', function(evt) {
+       // Используются два пробела, потому что отступ делается
+       // внутри тела функции, хоть она и является неперенесенным
+       // аргументом при вызове addEventListener.
+       evt.preventDefault();
+       ga._trackEvent('click', evt.target.innerText);
+     }, true);
```

#### Аргументы функций и вызовы через цепочку отделяются четырьмя пробелами
При переносе длинных вызовов функции и обращении к свойствам через точку
по длинной цепочке, при переносе используются четыре пробела. Меньшее количество
пробелов сделает отступ неотличимым при быстром чтении кода от отступа
у вложенного блока.

```diff
+ <ReactComponent className={classname(
+     'base-class', true,
+     'base-class--modified', isModificatiorNeeded(),
+     'base-class--collapsed', this.isCollapsed())} />
```

#### Альтернативный способ переносить аргументы — выравнивать их с открывающей скобкой
В определенных случаях аргументы функции можно выравнивать вместе
с открывающей скобкой вызова функции. Это можно делать в случае,
если названия аргументов достаточно длинные.

Такой же перенос можно использовать в проверке условий (`if`, `while`).

```diff
+ while (footer.getBoundingClientRect().top - window.innerHeight > 0 &&
+        currentPageNumber < itemsToShow) {
+   displayNextPage();  
+ }
```

_В обоих случаях при переносе аргументов функции, закрывающая скобка
при вызове остается на последней строке._

#### Объявление объектов и массивов
При многострочном объявлении массивов и объектов, используется два пробела
и закрывающая скобка ставится на отдельную строку.
```diff
+ var AvailableDirection = [
+   Direction.TOP,
+   Direction.LEFT,
+   Direction.RIGHT
+ ];
```

#### В многострочных операциях, операторы ставятся в конце строки, а не в начале
При переносе длинных вызовов (чейны, объявление массивов и объектов, функции
с большим количеством аргументов, тернарные операторы) операторы остаются
на предыдущей строке.

Правила с переносом оператора хорошо работают в языках, где необязательно
удалять забытые запятые в конце списков. Но даже в этом случае быстрое удаление
и сортировка строк не будут работать, потому у списков будет отличаться первая
строка, а у чейнов — последняя и после сортировки и удаления нужно перепроверить
получившийся список на валидность.

```diff
+ document.body.
+     querySelectorAll('div').
+     quertSelectorAll('span');

- document.body
-     .querySelectorAll('div')
-     .quertSelectorAll('span');
```

```diff
+ var Direction = {
+   TOP: 0x01,
+   BOTTOM: 0x02,
+   LEFT: 0x04,
+   RIGHT: 0x08
+ };

- var Direction = {
-   TOP: 0x01
-   ,BOTTOM: 0x02
-   ,LEFT: 0x04
-   ,RIGHT: 0x08
- };
```

```diff
+ var AvailableDirection = [
+   Direction.TOP,
+   Direction.LEFT,
+   Direction.RIGHT
+ ];

- var AvailableDirection = [
-   Direction.TOP
-   ,Direction.LEFT
-   ,Direction.RIGHT
- ];
```

Если примеры с объявлением массивов и объектов или с цепочкой вызовов
объясняются логически, то перенос разделителей в тернарном операторе
не имеет никакого смысла

```diff
- var element = 'content' in document.createElement('template')
-     ? template.content.children[0].cloneNode(true)
-     : template.children[0].cloneNode(true);

+ var element = 'content' in document.createElement('template') ?
+     template.content.children[0].cloneNode(true) :
+     template.chilren[0].cloneNode(true);
```

## Правила языка
В каждом файле нужно использовать директиву `'use strict'` для включения
интерпретатора в строгий режим исполнения JavaScript.

### Каждая переменная объявляется через свой var
Один var для нескольких переменных является одним шагом исполнения, поэтому
проходится как интерпретатором, так и отладчиком как единственная инструкция,
даже если объявленных переменных несколько. В этом случае проблемной становится
отладка программы, если в одной из объявленных переменных допущена ошибка

```diff
- var container = document.querySelector('.container'),
-     buttons = container.querySelectorAll('button'),
-     panels = container.querySelectorAll('.panel');

+ var container = document.querySelector('.container');
+ var buttons = container.querySelectorAll('button');
+ var panels = container.querySelectorAll('.panel');
```

### Функции объявляются как переменные
Функции должны объявляться как переменные. Особенности «подвешивания» функций
позволяют их использовать до того как они были объявлены. Зачастую функция
объявляется в локальной области видимости и в этом случае ее объявление
не должно затрагивать всю область видимости.

Положительный побочный эффект такого стиля заключается в том,
что при использовании его в обучающем процессе идея колбэков объясняется
сильно проще

```diff
- function onAnimationEnd(callback) {
-   if (isExecuting) {
-     function callbackToQueue() {
-       callback();
-       queue.splice(queue.indexOf(callbackToQueue), 1);
-     }
-
-     queue.push(callbackToQueue);
-   } else {
-     callback();
-   }  
- }

+ var onAnimationEnd = function(callback) {
+   if (isExecuting) {
+     var callbackToQueue = function() { // Совсем хорошо, если let
+       callback();
+       queue.splice(queue.indexOf(callbackToQueue), 1);
+     }  
+
+     queue.push(callbackToQueue);  
+   } else {
+     callback();
+   }
+ }
```

### Замыкания
```diff
- function onItemClick(item, i) {
-   item.onClick = function() {
-     var clickedItem = i;
-   };
- }

+ function onItemClick(item, i) {
+   item.click = getClickHandler(i);  
+ }
+
+ function getClickHandler(i) {
+   var clickedItem = i;
+ }
```
