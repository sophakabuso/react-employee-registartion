import React, { useState } from 'react';

function AddForm({ onAdd }) {
  const [employee, setEmployee] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    position: '',
    image: '',
  });

  const handleInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEmployee({ ...employee, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(employee);
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleInputChange}
          placeholder="Enter name"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="surname" className="form-label">
          Surname
        </label>
        <input
          type="text"
          name="surname"
          value={employee.surname}
          onChange={handleInputChange}
          placeholder="Enter surname"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleInputChange}
          placeholder="Enter email"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="text"
          name="phone"
          value={employee.phone}
          onChange={handleInputChange}
          placeholder="Enter phone"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3" >
        <label htmlFor="position" className="form-label">
          Position
        </label>
        <input
          type="text"
          name="position"
          value={employee.position}
          onChange={handleInputChange}
          placeholder="Enter position"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
      <label htmlFor="position" className="form-label">
        ID
        </label>
         <input
                type="text"
                name="id"
                value={employee.id}
                onChange={handleInputChange}
                placeholder="ID"
                className="form-control"
                required
              />
      </div>        
      <div className="mb-3">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="form-control"
        />
        {employee.image && (
          <img
            src={employee.image}
            alt="Preview"
            className="img-fluid mt-2"
            style={{ maxHeight: '1px', maxWidth:'1px' }}
          />
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Add Employee
      </button>
    </form>
  );
}

export default AddForm;

