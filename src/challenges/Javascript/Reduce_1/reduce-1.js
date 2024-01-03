// Use the following snippet to test your code before submitting
export const runner = () => {
  const array = [1, 2, 3, 4, 5];
  sumArray(array);
};

/*
  Exercise 1/5
  Use array.reduce to return the sum of all the numbers in the array
  The function should return 0 if the array is empty 
*/
export function sumArray(array) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((acc, current) => {
    return acc + current;
  }, 0);
}

/* 
  Exercise 2/5
  Use array.reduce to return the product of all the numbers in the array
  The function should return 1 if the array is empty 
*/
export function productArray(array) {
  if (array.length === 0) {
    return 1;
  }
  return array.reduce((acc, current) => {
    return acc * current;
  }, 1);
}

/*
  Exercise 3/5
    Use array.reduce to return the largest number in the array
    The function should return -Infinity if the array is empty
*/
export function maxArray(array) {
  if (array.length === 0) {
    return -Infinity;
  }
  return array.reduce((acc, current) => {
    return acc > current ? acc : current;
  }, -Infinity);
}

/*
  Exercise 4/5
  Use array.reduce to return the smallest number in the array
  The function should return Infinity if the array is empty
*/
export function minArray(array) {
  if (array.length === 0) {
    return Infinity;
  }
  return array.reduce((acc, current) => {
    return acc < current ? acc : current;
  }, Infinity);
}

/* 
  Exercise 5/5
  Use array.reduce to return the average of all the numbers in the array
  The function should return 0 if the array is empty
*/
export function averageArray(array) {
  if (array.length === 0) {
    return 0;
  }
  const sum = array.reduce((acc, current) => {
    return acc + current;
  }, 0);

  return sum / array.length;
}
