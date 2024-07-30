// src/TaskCard.js
import React from 'react';

const TaskCard = ({ dueDate, assigneeName }) => {
  return (
    <div className="task-card">
      <p><strong>Due Date:</strong> {dueDate}</p>
      <p><strong>Assignee:</strong> {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
