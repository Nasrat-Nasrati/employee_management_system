import React, { useEffect, useState } from 'react';
import { getEmployees } from '../services/api';
import './EmployeeList.css';


function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem('token');
        const data = await getEmployees(token);
        setEmployees(data);
      } catch (error) {
        setError('Failed to fetch employees');
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="employee-list-container">
      <h2>Employee List</h2>
      {error && <div className="error-message">{error}</div>}
      <table className="employee-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Hire Date</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
              <td>{employee.hire_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
