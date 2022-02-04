# Условия упрощены

Если функция возвращает булево значение, не используется `if..else` с лишними `return`.

Неправильно:

```js
const equals = (firstValue, secondValue) => {
  if (firstValue === secondValue) {
    return true;
  } else {
    return false;
  }
};
```

Правильно:

```js
const equals = (firstValue, secondValue) => {
  return firstValue === secondValue;
};
```

Идеально:

```js
const equals = (firstValue, secondValue) => firstValue === secondValue;
```

## Почему нужно соблюдать этот критерий?

Так принято?
