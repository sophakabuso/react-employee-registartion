import React from 'react';

function UpdateButton({ onUpdate, employee }) {
  const handleClick = () => {
    onUpdate(employee);
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Update
    </button>
  );
}

export default UpdateButton;
