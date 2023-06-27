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
    imageUrl:''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
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
        <div className="form-group-addform">
          <label className='add-label'>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={employee.name}
            onChange={handleInputChange}
            required
            className="form-control-addform"
          />
        </div>
        <div className="form-group-addform">
          <label className='add-label'>Surname</label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder='Enter surname'
            value={employee.surname}
            onChange={handleInputChange}
            required
            className="form-control-addform"
          />
        </div>
        <div className="form-group-addform">
          <label className='add-label'>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={employee.email}
            onChange={handleInputChange}
            required
            className="form-control-addform"
          />
        </div>
        <div className="form-group-addform">
          <label className='add-label'>Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={employee.phone}
            onChange={handleInputChange}
            required
            className="form-control-addform"
          />
        </div>
        <div className="form-group-addform">
          <label className='add-label'>Position</label>
          <input
            type="text"
            id="position"
            name="position"
            value={employee.position}
            onChange={handleInputChange}
            required
            className="form-control-addform"
          />
        </div>
        <div className="form-group-addform">
        <label className='add-label'>ID</label>
          <input
            type="id"
            id="id"
            name="id"
            value={employee.id}
            onChange={handleInputChange}
            required
            className="form-control-addform"
          />
        </div>
        <div className="form-group-addform">
          <label className='add-label'>Image URL</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={employee.imageUrl}
            onChange={handleInputChange}
            className="form-control-addform"
          />
        </div>
        <button type="submit" className="btn-addform">
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default AddForm;
