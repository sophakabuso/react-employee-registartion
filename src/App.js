
import axios from 'axios';
import './App.css';

import { useState, useEffect } from 'react';
import AddForm from './components/AddForm';
import SearchForm from './components/SearchForm';
import DeleteButton from './components/DeleteButton';
import UpdateButton from './components/UpdateButton';



/* React component called App. It is responsible for rendering an employee registration
 form and managing employee data through various HTTP requests.    
 The code imports necessary dependencies, including useState, useEffect from the react package,
   The axios library is for  HTTP requests. */function App () {
  const [employees, setEmployees] = useState([]);/*set initial statefor employees using useState,setEmployees function is used to update the state */

  useEffect(() => {fetchEmployees(); }, []);/*The useEffect hook is used to fetch the initial employee data when the component mounts. 
                                           It calls the fetchEmployees function defined later in the code. */

  const fetchEmployees = async () => {      /*fetchEmployees function:This asynchronous function uses axios to make a GET request 
              to fetch the list of employees from http://localhost:5000/employees If the request is successful, the response data is set as the new state of employees using the setEmployees function.
If there is an error, it is logged to the console.*/
   try {
      const response = await axios.get('http://localhost:5000/employees');
      setEmployees(response.data);
    } catch (error) {
      console.log('Error fetching employees:', error);
    }
  };

  const searchEmployeeById = async (searchId) => {          /*searchEmployeeById function:

  This asynchronous function is called when a user searches for an employee by ID.
  It makes a GET request to http://localhost:5000/employees/${searchId} to fetch the employee data for the specified ID.
  If a valid response is received, the state of employees is updated with the response data.
  If the response data is empty, the employees state is set to an empty array.
  If there is an error, it is logged to the console. */
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

  const addEmployee = async (newEmployee) => {  /*addEmployee function:

  This asynchronous function is called when a user adds a new employee.
  It makes a POST request to http://localhost:5000/employees with the newEmployee data.
  If the request is successful, the newly added employee is appended to the existing employees state using the spread operator.
  If there is an error, it is logged to the console. */
    try {
      const response = await axios.post('http://localhost:5000/employees', newEmployee);
      setEmployees([...employees, response.data]);
    } catch (error) {
      console.log('Error adding employee:', error);
    }
  };

  const deleteEmployee = async (id) => {    /*deleteEmployee function:

  This asynchronous function is called when a user wants to delete an employee.
  It makes a DELETE request to http://localhost:5000/employees/${id} to delete the employee with the specified ID.
  If the request is successful, the employees state is updated by filtering out the deleted employee using the id.
  If there is an error, it is logged to the console. */
    try {
      await axios.delete(`http://localhost:5000/employees/${id}`);
      const updatedEmployees = employees.filter((employee) => employee.id !== id);
      setEmployees(updatedEmployees);
    } catch (error) {
      console.log('Error deleting employee:', error);
    }
  };

  const updateEmployee = async (id, updatedEmployee) => {  /*updateEmployee function:

  This asynchronous function is called when a user wants to update an employee's details.
  It makes a PUT request to http://localhost:5000/employees/${id} with the updatedEmployee data.
  If the request is successful, the employees state is updated by mapping over the existing employees and replacing the employee with the specified id with the updated response data.
  If there is an error, it is logged to the console. */
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
  return (   /*Component rendering:

  The App component returns JSX that renders various sections of the employee registration form.
  The form consists of a search form, an add form, and a list of employees.
  The list of employees is rendered as an unordered list (ul) where each employee is rendered as a list item (li).
  Each employee is displayed with their name, surname, and position.
  Each employee also has a delete button and an update button, which are components that trigger the respective actions when clicked. */
    <div className="container-app">
      <h1 class='.container-fluid'>Employee Registration</h1> 
      <div className="search-id">   
      <h2>Search Employee by ID</h2>
      <SearchForm onSearch={searchEmployeeById} />
    </div>
    <div className="add-employee">
    <h2>Add Employee</h2>
    <AddForm onAdd={addEmployee} />
    </div>
    
    <div className='employee-list'>
      <h2 className='heading-list'>Employee List</h2>
      <ul>
      {employees.map((employee) => (
        <li key={employee.id}>
          {employee.name} {employee.surname} {employee.position}
          <DeleteButton onDelete={deleteEmployee} employeeId={employee.id} />
          <UpdateButton onUpdate={updateEmployee} employeeId={employee.id} employee={employee} />
        </li>
      ))}
    </ul>
    </div>
  
    </div>
  );
}

export default App;
