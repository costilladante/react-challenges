# Remove all whitespaces

In this coding challenge, you will be implementing a function called `removeWhitespaces(string)` that takes a `string` as the input. The function should return the string with all the whitespace removed.

## Directions

- If the input string is empty, then return an input string.
- Remember to account for `\n` and `\t`.

Example

```javascript
removeWhitespaces('Hello,   World!'); // Output: 'Hello,World!'
removeWhitespaces('  This is a sentence.\nIt contains some whitespace.  '); // Output: 'Thisisasentence.Itcontainssomewhitespace.'
removeWhitespaces('\t  \n\n'); // Output: ''
```

# Solutions

## Solution 1: for loop

```javascript
export const removeWhitespaces = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ' && string[i] !== '\n' && string[i] !== '\t') {
      result += string[i];
    }
  }
  return result;
};
```

This function iterates over each character of the input string and adds it to the result string only if it is not a whitespace character (space, newline, or tab). The resulting string is returned at the end.

Note that this implementation assumes that the input string does not contain any other types of whitespace characters such as vertical tabs, form feeds, or non-breaking spaces. If such characters are present, they will not be removed by this function.

## Solution 2: regEX

```javascript
export const removeWhitespaces = (string) => {
  return string.replace(/\s/g, '');
};
```

This implementation uses the `replace` method with a regular expression that matches any whitespace character (including spaces, tabs, and newlines) and replaces it with an empty string. The `g	` flag specifies that the replacement should be global (i.e. all occurrences of the pattern in the string should be replaced).
