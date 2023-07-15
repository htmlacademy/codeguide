# В проекте не должно быть избыточных проверок

Например, если заранее известно, что функция всегда принимает числовой параметр, то не следует проверять его на существование.

Неправильно:

```js
const isPositiveNumber = (myNumber) => {
  if (typeof myNumber === 'undefined') {
    throw new Error('Parameter is not defined');
  }
  return myNumber > 0;
};

isPositiveNumber(15);
isPositiveNumber(-30);
```

Правильно:

```js
const isPositiveNumber = (myNumber) => {
  return myNumber > 0;
};

isPositiveNumber(15);
isPositiveNumber(-30);
```

## Почему нужно соблюдать этот критерий?

Лишняя работа?
