// src/App.js
import React from 'react';
import TaskCard from './TaskCard';

function App() {
  const doneTasks = [
    { id: 1, completedAtDate: "2024-07-30", assigneeName: "John Doe" },
    { id: 2, completedAtDate: "2024-07-25", assigneeName: "Jane Smith" }
  ];

  return (
    <div className="App">
      <h1>Done Tasks</h1>
      <div className="done-tasks">
        {doneTasks.map(task => (
          <TaskCard key={task.id} completedAtDate={task.completedAtDate} assigneeName={task.assigneeName} />
        ))}
      </div>
    </div>
  );
}

export default App;
