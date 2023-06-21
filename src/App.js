
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddForm from './components/AddForm';
import SearchForm from './components/SearchForm';
import EmployeeList from './components/EmployeeList';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addEmployee = async (employee) => {
    try {
      await axios.post('http://localhost:5000/employees', employee);
      fetchEmployees();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/employees/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error(error);
    }
  };

  const searchEmployee = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/employees/${id}`
      );
      setEmployees(response.data ? [response.data] : []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div className="container p-5 my-5 bg-info text-black "> {/* Apply Bootstrap container class */}
        <h1 className="mt-4 text-center">EMPLOYEE REGISTRATION</h1> {/* Apply Bootstrap margin class */}
        <nav className="mb-4  "> {/* Apply Bootstrap margin class */}
          <ul className="nav nav-tabs nav justify-content-center ">
            <li className="nav-item">
              <Link className="nav-link" to="/">EMPLOYEE LIST</Link> {/* Apply Bootstrap link class */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">ADD EMPLOYEE</Link> {/* Apply Bootstrap link class */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">SEARCH EMPLOYEE</Link> {/* Apply Bootstrap link class */}
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <EmployeeList
              employees={employees}
              onDelete={deleteEmployee}
              onUpdate={fetchEmployees}
            />
          </Route>
          <Route path="/add">
            <AddForm onAdd={addEmployee} />
          </Route>
          <Route path="/search">
            <SearchForm onSearch={searchEmployee} />
            <EmployeeList
              employees={employees}
              onDelete={deleteEmployee}
              onUpdate={fetchEmployees}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
