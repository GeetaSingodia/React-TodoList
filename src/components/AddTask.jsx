
import React, { useState } from 'react';

const AddTask = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      const newTodo = {
        id: Date.now(),
        title: task,
        completed: false,
      };
      addTodo(newTodo);
      setTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTask;
