import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AddForm() {
  const history = useHistory();
  const [employee, setEmployee] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    position: '',
    id:'',
    photo:''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/employees', employee);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={employee.name}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder='Enter surname'
            value={employee.surname}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={employee.email}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={employee.phone}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            value={employee.position}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
        <label htmlFor="id">ID</label>
          <input
            type="id"
            id="id"
            name="id"
            value={employee.id}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Photo</label>
          <input
            type="img"
            id="photo"
            name="photo"
            value={employee.photo}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default AddForm;
