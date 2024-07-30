// src/TaskCard.js
import React from 'react';

const TaskCard = ({ dueDate, completedAtDate, assigneeName }) => {
  return (
    <div className="task-card">
      <h2>Task Card</h2>
      <p><strong>Due Date:</strong> {dueDate}</p>
      <p><strong>Completed At:</strong> {completedAtDate}</p>
      <p><strong>Assignee:</strong> {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
