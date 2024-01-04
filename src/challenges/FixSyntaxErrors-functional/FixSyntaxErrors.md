# Fix syntax errors - functional - 🟢 Easy

You have been provided with a functional component called ErrorPage. It displays some static information about common errors in programming. However, there are several bugs in the code that need to be fixed. Your task is to identify and fix these bugs to make the code runnable.

## Directions

- Remember to export the ErrorPage component.
- Do not edit the text content.

## Solution

```javascript
import React from 'react';

const ErrorPage = (props) => {
  return (
    <div>
      <h1>Errors in Programming</h1>
      <p>Everyone makes mistakes, including programmers!</p>
      <ul>
        <li>
          Syntax Errors: These occur when the code is written incorrectly, and
          the compiler is unable to understand it. Examples include missing
          semicolons, quotes, or parentheses.
        </li>
        <li>
          Logic Errors: These occur when the code is written correctly, but does
          not produce the expected result.
        </li>
        <li>
          Run-time Errors: These occur when the code is executed, and something
          unexpected happens, such as a division by zero error.
        </li>
      </ul>
      <p>
        The key to fixing errors is to identify the cause, and then make the
        necessary corrections. This can involve using debugging tools, or simply
        carefully reading the code and understanding what is happening.
      </p>
    </div>
  );
};

export default ErrorPage;
```

Here are the errors in the code:

1. The function definition doesn’t use the arrow syntax in a correct way.
2. The `ul` element is missing the closing </li> tags for each list item.
3. There is a typo in the export statement at the end deflaut instead of default
