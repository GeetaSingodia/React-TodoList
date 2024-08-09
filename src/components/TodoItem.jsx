
import React, { useState } from 'react';

function TodoItem({ todo, index, todos, setTodos }) {
  const [editing, setEditing] = useState(false);
  const [editingText, setEditingText] = useState(todo.text);

  const deleteTodo = () => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = () => {
    setEditing(true);
  };

  const saveTodo = () => {
    const newTodos = todos.map((t, i) => i === index ? { ...t, text: editingText } : t);
    setTodos(newTodos);
    setEditing(false);
  };

  const toggleComplete = () => {
    const newTodos = todos.map((t, i) => i === index ? { ...t, complete: !t.complete } : t);
    setTodos(newTodos);
  };

  return (
    <li>
      <input type="checkbox" checked={todo.complete} onChange={toggleComplete} />
      {editing ? (
        <>
          <input value={editingText} onChange={(e) => setEditingText(e.target.value)} />
          <button onClick={saveTodo}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={editTodo}>Edit</button>
          <button onClick={deleteTodo} disabled={!todo.complete}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
