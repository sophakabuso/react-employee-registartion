import React from 'react';

const UpdateButton= ({ onUpdate, employeeId, employee }) => {
  const handleClick = () => {
    onUpdate(employeeId, employee);
  };

  return (
    <button onClick={handleClick}>
      Update
    </button>
  );
};

export default UpdateButton;
