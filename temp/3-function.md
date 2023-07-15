# Функции именуются с глагола

Название функции или метода должно быть глаголом и соответствовать действию, которое выполняет функция или метод. Например, можно использовать глагол `get` для функций и методов, которые что-то возвращают.

Неправильно:

```js
const action = function (names) {
  names.forEach((name) => {
    console.log(name);
  });
};

const wizard = {
  name: 'Гендальф',
  action() {
    console.log('Стреляю файрболлом!');
  }
};

const randomNumber = () => Math.random();
```

Правильно:

```js
const printNames = function (names) {
  names.forEach((name) => {
    console.log(name);
  });
};

const wizard = {
  name: 'Гендальф',
  shoot() {
    console.log('Стреляю файрболлом!');
  }
};

const getRandomNumber = () => Math.random();
```

_Кстати,_ функции-предикаты — функции, которые возвращают булево значение — удобно именовать по схеме «`is` + признак»:

```js
function checkValueToNull(value) { // правильно
  return value === null;
}

function isNull(value) { // тоже правильно
  return value === null;
}
```

Предикаты, которые нельзя назвать с `is`, можно именовать с `has`:

```js
function hasOddNumber(values) {
  return values.some(() => {});
}
```

**Важно!** Из правила существуют исключения: геттеры и сеттеры, редьюсеры.

## Почему нужно соблюдать этот критерий?

Отличие функции от обычной переменной, что функцию можно вызвать. Удобно, когда это понятно из названия, и не нужно искать объявление.
