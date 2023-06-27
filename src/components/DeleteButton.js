import React from 'react';

function DeleteButton({ onDelete }) {
  return (
    <button onClick={onDelete} className="btn-delete">
      Delete
    </button>
  );
}

export default DeleteButton;
