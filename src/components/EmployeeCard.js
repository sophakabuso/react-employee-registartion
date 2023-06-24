import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

function EmployeeCard({ employee, onDelete }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{employee.name} {employee.surname}</h5>
        <p className="card-text">Email: {employee.email}</p>
        <p className="card-text">Phone: {employee.phone}</p>
        <p className="card-text">Position: {employee.position}</p>
        <p className="card-text">Photo: {employee.photo}</p>
        <p className="card-text">ID: {employee.id}</p>
        <Link to={`/update/${employee.id}`} className="btn btn-primary mr-2">Update</Link>
        <DeleteButton onDelete={onDelete} />
      </div>
    </div>
  );
}

export default EmployeeCard;
