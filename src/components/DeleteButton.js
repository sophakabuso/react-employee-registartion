import React from 'react';

function DeleteButton({ onDelete }) {
  return (
    <button onClick={onDelete} className="btn-delete">
      delete
    </button>
  );
}

export default DeleteButton;
