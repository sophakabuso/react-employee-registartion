import React, { useState, useEffect, useCallback } from 'react';
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
    imageUrl:''
  });

  const fetchEmployee = useCallback (async () => {
    try {
      const response = await axios.get(`http://localhost:5000/employees/${id}`);
      setEmployee(response.data);
    } catch (error) {
      console.error(error);
    }
  },[id]);


  useEffect(() => {
    fetchEmployee();
  }, [fetchEmployee]);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
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
    <form onSubmit={handleSubmit} className="form-update">
      <h2>Update Employee</h2>
      <div className="form-group-update">
        <label className='add-label'>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={employee.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group-update">
        <label className='add-label'>Surname</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={employee.surname}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group-update">
        <label className='add-label'>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={employee.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group-update">
        <label className='add-label'>Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={employee.phone}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group-update">
        <label className='add-label'>Position</label>
        <input
          type="text"
          id="position"
          name="position"
          value={employee.position}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group-update">
          <label className='add-label'>Image URL</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={employee.imageUrl}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
       <div className="form-group-update">
        <label className='add-label'>ID</label>
        <input
          type="id"
          id="id"
          name="id"
          value={employee.id}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="btn-update">
        Update Employee
      </button>
    </form>
  );
}

export default UpdateForm;
