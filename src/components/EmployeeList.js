import React from 'react';
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';

function EmployeeList({ employees, onDelete, onUpdate }) {
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <div key={employee.id} className="employee-card card">
          <img src={employee.image} alt="Employee" className="card-img-top" />
          <div className="card-body">
            <h2 className="card-title">{`${employee.name} ${employee.surname}`}</h2>
            <p className="card-text">Photo: {employee.image}</p>
            <p className="card-text">Email: {employee.email}</p>
            <p className="card-text">Phone: {employee.phone}</p>
            <p className="card-text">Position: {employee.position}</p>
            <p className="card-text">ID: {employee.id}</p>
         
            
          </div>
          <div className="card-footer d-flex justify-content-between">
          
            <div className="button-container">
              <UpdateButton onUpdate={() => onUpdate(employee.id)} />
            </div>
            <div className="button-container">
              <DeleteButton onDelete={() => onDelete(employee.id)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
