
import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    setTodos([{ text: newTodo, complete: false }, ...todos]);
    setNewTodo('');
  };

  return (
    <div>
      <h1>Create Todo List</h1>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add task" />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
