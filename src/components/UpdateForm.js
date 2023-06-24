import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function UpdateForm() {
  const { id } = useParams();
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

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/employees/${id}`);
      setEmployee(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:5000/employees/${id}`, employee);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="update-form">
      <h2>Update Employee</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={employee.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={employee.surname}
          onChange={handleInputChange}
          required
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
        />
      </div>
      <div className="form-group">
        <label htmlFor="photo">Photo</label>
        <input
          type="img"
          id="photo"
          name="photo"
          value={employee.photo}
          onChange={handleInputChange}
          required
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
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Update Employee
      </button>
    </form>
  );
}

export default UpdateForm;
