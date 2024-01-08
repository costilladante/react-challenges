# Local Storage III - hook - 🔴 Expert

You need to create a custom hook called useTodoList that can be used to manage a todo list stored in local storage.

The hook should return an object with the following properties:

- **todos**: an array of todo items, each of which should have the properties id, text, and completed.
- **addTodo**: a function that can be used to add a new todo item to the list.
- **removeTodo**: a function that can be used to remove a todo item from the list by its id.
- **toggleTodo**: a function that can be used to toggle the completion status of a todo item by its id.

Every time the todo list is updated (e.g., a todo item is added, removed, or completed), the hook should update the corresponding value in local storage.

## Directions

- You do not need to edit the App component. Tests will be scoring only the useTodoList hook.

### Example

```javascript
{
  todos: array<{
    id: number,
    text: string,
    completed: boolean
  }>,
  addTodo: function,
  removeTodo: function,
  toggleTodo: function
}
```

## Solution

```javascript
import React, { useState, useEffect } from 'react';

export const useTodoList = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos !== null ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return { todos, addTodo, removeTodo, toggleTodo };
};

const App = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoList();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(e.target.elements.todoText.value);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='todoText' />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? 'Incomplete' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

useTodoList is a hook that provides functionality to manage a todo list. The hook returns an object with four properties:

todos: An array of todo items, each of which has the properties id, text, and completed. The initial value of the todos array is retrieved from local storage. If the key 'todos' does not exist in local storage, an empty array is returned.

addTodo: A function that can be used to add a new todo item to the list. The function takes the text of the todo item as an argument and appends a new object with the text, id and the completed property set to false to the todos array.

removeTodo: A function that can be used to remove a todo item from the list by its id. The function filters the todos array, removing the todo item with the specified id.

toggleTodo: A function that can be used to toggle the completion status of a todo item by its id. The function maps over the todos array, and if the todo item with the specified id is found, it updates the completed property to its opposite value.

The todos state is initialized from the value stored in local storage, if it exists. The value of todos is updated whenever the todo list is updated and this updated value is stored back in local storage. This behavior is implemented using the useState and useEffect hooks.

The addTodo, removeTodo, and toggleTodo functions modify the todos state, which in turn updates the corresponding value in local storage.

## Local Storage and Objects - JSON.Stringify & JSON.parse

I realized that LocalStorage can't save objects or array of objects. Am I right?

**Response**

Yes, you're correct. LocalStorage can only store strings. If you want to store objects or arrays in LocalStorage, you need to convert them to a string format first. This is typically done using `JSON.stringify()`.

For example, to store an array of todos, you would do:

```javascript
localStorage.setItem('todos', JSON.stringify(todos));
```

And then to retrieve the todos, you would parse them back into an array using `JSON.parse()`:

```javascript
const todos = JSON.parse(localStorage.getItem('todos'));
```

This way, you can store more complex data types in LocalStorage. Just remember that LocalStorage has a size limit (usually around 5MB), so it's not suitable for storing large amounts of data.
