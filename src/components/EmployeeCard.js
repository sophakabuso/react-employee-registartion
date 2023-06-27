import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

function EmployeeCard({ employee, onDelete }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {employee.name} {employee.surname}
        </h5>
        <p className="card-text">Email: {employee.email}</p>
        <p className="card-text">Phone: {employee.phone}</p>
        <p className="card-text">Position: {employee.position}</p>
        {employee.imageUrl && (
          <img
            src={employee.imageUrl}
            alt="Employee"
            className="img-card"
            style={{ maxHeight: '200px' }}
          />
        )}
        <p className="card-text">ID: {employee.id}</p>
        <Link to={`/update/${employee.id}`} className="btn-card">
          Update
        </Link>
        <DeleteButton onDelete={onDelete}  className="btn-delete"/>
      </div>
    </div>
  );
}

export default EmployeeCard;
