
import React from 'react';
import './App.css';
//import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddForm from './components/AddForm';
import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className='app-heading'>EMPLOYEE REGISTRATION</h1>
        <Switch>
          <Route exact path="/" component={EmployeeList} />
          <Route path="/add" component={AddForm} />
          <Route path="/update/:id" component={UpdateForm} />
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
