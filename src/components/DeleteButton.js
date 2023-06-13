import React from 'react';

const DeleteButton = ({ onDelete, employeeId }) => {
  const handleClick = () => {
    onDelete(employeeId);
  };

  return (
    <button onClick={handleClick}>
      Delete
    </button>
  );
};

export default DeleteButton;
