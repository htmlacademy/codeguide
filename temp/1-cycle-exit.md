# Циклы не работают дольше чем нужно, а количество их вызовов минимизировано.

Неправильно:

```js
apartments.forEach((it, index) => {
  if (index < 3) {
    render(it);
  }
});
```

Правильно:

```js
for (let i = 0; i < Math.min(apartments.length, 3); i++) {
  render(apartments[i]);
}
```

## Почему нужно соблюдать этот критерий?

Лишняя работа?
