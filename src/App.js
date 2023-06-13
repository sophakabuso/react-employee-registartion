import { useState, useEffect } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import DeleteButton from './components/DeleteButton';
import UpdateButton from './components/UpdateButton';



const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/employees');
      setEmployees(response.data);
    } catch (error) {
      console.log('Error fetching employees:', error);
    }
  };

  const searchEmployeeById = async (searchId) => {
    try {
      const response = await axios.get(`http://localhost:5000/employees/${searchId}`);
      if (response.data) {
        setEmployees([response.data]);
      } else {
        setEmployees([]);
      }
    } catch (error) {
      console.log('Error searching employee:', error);
    }
  };

  const addEmployee = async (newEmployee) => {
    try {
      const response = await axios.post('http://localhost:5000/employees', newEmployee);
      setEmployees([...employees, response.data]);
    } catch (error) {
      console.log('Error adding employee:', error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/employees/${id}`);
      const updatedEmployees = employees.filter((employee) => employee.id !== id);
      setEmployees(updatedEmployees);
    } catch (error) {
      console.log('Error deleting employee:', error);
    }
  };

  const updateEmployee = async (id, updatedEmployee) => {
    try {
      const response = await axios.put(`http://localhost:5000/employees/${id}`, updatedEmployee);
      const updatedEmployees = employees.map((employee) =>
        employee.id === id ? response.data : employee
      );
      setEmployees(updatedEmployees);
    } catch (error) {
      console.log('Error updating employee:', error);
    }
  };
  return (
    <div>
    <h1>Employee Registration</h1>

    <h2>Search Employee by ID</h2>
    <SearchForm onSearch={searchEmployeeById} />

    <h2>Add Employee</h2>
    <AddForm onAdd={addEmployee} />

    <h2>Employee List</h2>
    <ul>
      {employees.map((employee) => (
        <li key={employee.id}>
          {employee.name} {employee.surname} ({employee.position})
          <DeleteButton onDelete={deleteEmployee} employeeId={employee.id} />
          <UpdateButton onUpdate={updateEmployee} employeeId={employee.id} employee={employee} />
        </li>
      ))}
    </ul>
  
    </div>
  );
}

export default App;
