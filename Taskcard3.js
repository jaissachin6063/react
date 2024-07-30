// src/TaskCard.js
import React from 'react';

const TaskCard = ({ completedAtDate, assigneeName }) => {
  return (
    <div className="task-card">
      <p><strong>Completed On:</strong> {completedAtDate}</p>
      <p><strong>Assignee:</strong> {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
