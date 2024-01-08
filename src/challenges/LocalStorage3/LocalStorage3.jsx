import { useState, useEffect } from 'react';

const initTodos = () => {
  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  return storedTodos ? storedTodos : [];
};

const initTodosIDCounter = () => {
  const storedTodosIDCounter = localStorage.getItem('todosIDCounter');
  return storedTodosIDCounter ? parseInt(storedTodosIDCounter) : 0;
};

export const useTodoList = () => {
  const [todos, setTodos] = useState(initTodos());
  // Could be a better choice to use some ID generator library.
  const [todosIDCounter, setTodosIDCounter] = useState(initTodosIDCounter());

  const addTodo = (text) => {
    const newTodo = {
      id: todosIDCounter + 1,
      text: text,
      completed: false,
    };
    setTodosIDCounter((prevState) => {
      const newIDCounter = prevState + 1;
      localStorage.setItem('todosIDCounter', newIDCounter);
      return newIDCounter;
    });
    setTodos((prevState) => {
      const newTodos = [...prevState, newTodo];
      console.log(newTodos);

      return newTodos;
    });
  };

  const removeTodo = (todoId) => {
    setTodos((prevState) => {
      const newTodos = prevState.filter((todo) => todo.id !== todoId);
      return newTodos;
    });
  };

  const toggleTodo = (todoId) => {
    setTodos((prevState) => {
      const newTodos = prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return newTodos;
    });
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
