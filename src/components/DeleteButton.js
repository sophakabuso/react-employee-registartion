import React from 'react';

function DeleteButton({ onDelete }) {
  return (
    <button onClick={onDelete} className="btn btn-danger">
      Delete
    </button>
  );
}

export default DeleteButton;
