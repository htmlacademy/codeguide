# Классы, функции-конструкторы, компоненты и перечисления записываются в нотации `PascalCase`

`PascalCase` означает, что название начинается заглавной буквы.

Неправильно:

```js
// Функция-конструктор
const wizard = function (name, age) {
  this.name = name;
  this.age = age;
};

// Функция
const Fly = function (coordinate) {
  console.log(`Смотрите, я лечу вон туда ${coordinate}!`);
};

// Перечисление
const statusCodes = {
  ok: 200,
  notFound: 404,
  badRequest: 400,
};

// Перечисление
const STATUS_CODE = {
  Ok: 200,
  NotFound: 404,
  BadRequest: 400,
};

// Класс
class wizard {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Класс
class Run {
  constructor() {
    console.log('О, я бегу!');
  }
}
```

Правильно:

```js
// Функция-конструктор
const Wizard = function (name, age) {
  this.name = name;
  this.age = age;
};

// Функция
const fly = function (coordinate) {
  console.log(`Смотрите, я лечу вон туда ${coordinate}!`);
};

// Перечисление
const StatusCode = {
  OK: 200,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
};

// Класс
class Wizard {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Класс
class Runner {
  constructor() {
    console.log('О, я бегун!');
  }
}
```

Названия функций, не являющихся конструкторами, должны начинаться со строчной буквы.

**Обратите внимание,** что не все объекты в коде проекта должны быть перечислениями. Допускается использование объектов в качестве словарей:

```js
const priceTypeToRange = {
  low: 'до 200 ₽',
  medium: 'от 200 ₽ до 500 ₽',
  high: 'от 500 ₽',
};
```

## Почему нужно соблюдать этот критерий?

Так принято?
