// src/TaskCard.js
import React from 'react';

const TaskCard = ({ completedAtDate, assigneeName }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <p className="text-gray-600"><strong>Completed On:</strong> {completedAtDate}</p>
      <p className="text-gray-600"><strong>Assignee:</strong> {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
