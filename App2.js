// src/App.js
import React from 'react';
import TaskCard from './TaskCard';

function App() {
  const pendingTasks = [
    { id: 1, dueDate: "2024-08-01", assigneeName: "John Doe" },
    { id: 2, dueDate: "2024-08-05", assigneeName: "Jane Smith" }
  ];

  return (
    <div className="App">
      <h1>Pending Tasks</h1>
      <div className="pending-tasks">
        {pendingTasks.map(task => (
          <TaskCard key={task.id} dueDate={task.dueDate} assigneeName={task.assigneeName} />
        ))}
      </div>
    </div>
  );
}

export default App;
