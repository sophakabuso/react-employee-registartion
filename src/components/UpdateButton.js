import React from 'react';

function UpdateButton ({ onUpdate, employeeId, employee })  {
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
