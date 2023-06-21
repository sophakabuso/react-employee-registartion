import React from 'react';

function DeleteButton({ onDelete }) {
  return (
    <button className="btn btn-danger delete-button " onClick={onDelete}>
      Delete
    </button>
  );
}

export default DeleteButton;
