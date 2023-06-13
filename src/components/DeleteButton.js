import React from 'react';

function DeleteButton  ({ onDelete, employeeId })  {
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
