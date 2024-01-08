import { renderHook, act } from '@testing-library/react';
import { useTodoList } from './LocalStorage3';

describe('App component tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('retrieves the todo list from local storage if it exists', () => {
    localStorage.setItem(
      'todos',
      JSON.stringify([
        { id: 1, text: 'Todo 1', completed: false },
        { id: 2, text: 'Todo 2', completed: true },
      ])
    );

    const { result } = renderHook(() => useTodoList());
    expect(result.current.todos).toEqual([
      { id: 1, text: 'Todo 1', completed: false },
      { id: 2, text: 'Todo 2', completed: true },
    ]);
  });

  it('uses an empty array as the initial value if the key is not found in local storage', () => {
    const { result } = renderHook(() => useTodoList());
    expect(result.current.todos).toEqual([]);
  });

  it('adds a new todo item to the list', () => {
    const { result } = renderHook(() => useTodoList());
    act(() => {
      result.current.addTodo('Todo 1');
    });
    expect(result.current.todos).toEqual([
      { id: 1, text: 'Todo 1', completed: false },
    ]);
  });

  it('removes a todo item from the list by its id', () => {
    const { result } = renderHook(() => useTodoList());
    act(() => {
      result.current.addTodo('Todo 1');
    });
    act(() => {
      result.current.addTodo('Todo 2');
    });
    act(() => {
      result.current.removeTodo(1);
    });
    expect(result.current.todos).toEqual([
      { id: 2, text: 'Todo 2', completed: false },
    ]);
  });

  it('toggles the completion status of a todo item by its id', () => {
    const { result } = renderHook(() => useTodoList());
    act(() => {
      result.current.addTodo('Todo 1');
    });
    act(() => {
      result.current.addTodo('Todo 2');
    });
    act(() => {
      result.current.toggleTodo(2);
    });
    expect(result.current.todos).toEqual([
      { id: 1, text: 'Todo 1', completed: false },
      { id: 2, text: 'Todo 2', completed: true },
    ]);
  });
});
