# Prompt

In this exercise, you're tasked with using `Array.prototype.reduce` to implement a few basic array functions.

As a background, [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) is a function that takes a function and an initial value, and applies the function to each element in the array, passing the result of the previous function call as the first argument to the next function call.

For example, if you had an array of numbers, you could use `Array.prototype.reduce` to add them all together like this:

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((a, b) => a + b, 0);
```

The first argument to the reduce function is the function that will be applied to each element in the array.

The second argument is the initial value that will be passed to the first function call.

In this case, we're passing 0 as the initial value, so the first function call will be:

```javascript
const sum = numbers.reduce((a, b) => a + b, 0);

// a = 0, b = 1
// a = 1, b = 2
// a = 3, b = 3
// a = 6, b = 4
// a = 10, b = 5
// a = 15
// sum = 15
```

# Solution

## sumArray

`sumArray` passes a function to the reduce method which takes two parameters, `a` and `b`. `a` is the accumulator, and `b` is the current value. The function returns the sum of `a` and `b`. The second parameter to reduce is the initial value of the accumulator. In this case, it is `0`.

We can directly return the result of the reduce method as the final value of the function we pass to reduce is the desired summed value.

```javascript
export function sumArray(array) {
  return array.reduce((a, b) => a + b, 0);
}
```

## productArray

`productArray` works the same way as `sumArray`, except that it multiplies instead of adding. Note the inital value of 1 for the accumulator allowing us to set off the base case with the first number in the array.

```javascript
export function productArray(array) {
  return array.reduce((a, b) => a * b, 1);
}
```

## maxArray

`maxArray` works by passing `Math.max` to the reduce method. `Math.max` takes two parameters, `a` and `b`, and returns the larger of the two. We pass `Math.max` to reduce, and the initial value is `-Infinity`, because `Math.max(-Infinity, x)` will always return x.

```javascript
export function maxArray(array) {
  return array.reduce((a, b) => Math.max(a, b), -Infinity);
}
```

## minArray

`minArray` works the same way as `maxArray`, except that it returns the smaller of the two numbers by passing `Math.min` to reduce.

```javascript
export function minArray(array) {
  return array.reduce((a, b) => Math.min(a, b), Infinity);
}
```

## averageArray

`averageArray` works by adding all the numbers in the array, and then dividing by the length of the array. If the array is empty, the length will be 0, and the result will be `NaN`, which is not the desired outcome.

We can use the "or" (`||`) operator to return 0 if the result of the division is `NaN` because `NaN` is falsy.

```javascript
export function averageArray(array) {
  return array.reduce((a, b) => a + b, 0) / array.length || 0;
}
```
