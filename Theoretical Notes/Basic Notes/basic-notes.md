## Basic Notes

#### Q:What will be the result ? 

```js
let a = true && false && "hello";

console.log(a);
```

**Answer**: AND Short circuiting returns the first falsy value or the last truthy value if all are true, so false will be logged to the console

#### Q:What will be logged to the console ? 

```js
let a = "hi" && 42 && "hello";

console.log(a);
```

**Answer**:AND Short circuiting returns the first falsy value or the last truthy value if all are true , so hello will be logged to the console

#### Q:What will be logged to the console ? 

```js
let a = false || 0 || "hello";

console.log(a);
```

**Answer**:OR Short circuiting returns the **first truthy value** or the **last falsy value** if all are false. so hello will be logged to the console

#### Q:What will be logged to the console ? 

```js
let b = null || undefined || 0;

console.log(b);
```

**Answer**: OR Short circuiting returns the **first truthy value** or the **last falsy value** if all are false , so 0 will be logged to the console 