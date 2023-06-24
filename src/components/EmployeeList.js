import React, { useState, useEffect} from 'react';
import axios from 'axios';
import EmployeeCard from './EmployeeCard';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';




function EmployeeList() {
    //state variables to hold the search results:
  const [employees, setEmployees] = useState([]);
   //state variables to hold the search results:
  const [searchQuery, setSearchQuery] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      let url = 'http://localhost:5000/employees';
      if (searchQuery) {
        url += `?search=${encodeURIComponent(searchQuery)}`;
      }
      const response = await axios.get(url);
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    }
  };

   const handleSearch = (id) => {
    setSearchQuery(id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/employees/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <SearchForm onSearch={handleSearch} />
      <Link to="/add" className="btn btn-success mb-3">
        Add Employee
      </Link>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} onDelete={() => handleDelete(employee.id)} />
      ))}
    </div>
  );
}

export default EmployeeList;
