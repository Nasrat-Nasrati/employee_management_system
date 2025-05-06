

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEmployees } from '../services/api';
import './EmployeeList.css';
import { deleteEmployee } from '../services/api'; // تابع حذف از API

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const data = await fetchEmployees();
        if (Array.isArray(data)) {
          setEmployees(data);
        } else {
          setEmployees([]);  // Fallback to empty array if it's not an array
          setError('Invalid response format');
        }
      } catch (err) {
        setError('Failed to fetch employees');
      }
    };
    loadEmployees();
  }, []);

  const handleUpdate = (id) => {
    navigate(`/update-employee/${id}`);
  };

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this employee?');
    if (isConfirmed) {
      try {
        const token = localStorage.getItem('token');
        await deleteEmployee(id, token);  // حذف واقعی
        alert('Employee deleted successfully!');
        // بعد از حذف، لیست را ریفرش کن:
        setEmployees((prevEmployees) => prevEmployees.filter(emp => emp.id !== id));
      } catch (error) {
        alert('Failed to delete employee.');
        console.error(error);
      }
    }
  };

  const handleDetails = (id) => {
    navigate(`/employee-details/${id}`);
  };

  return (
    <div className="employee-list-container">
      <h2>Employee List</h2>
      {error && <div className="error-message">{error}</div>}
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Hire Date</th>
            <th>Update</th>
            <th>Delete</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.department}</td>
                <td>{employee.salary}</td>
                <td>{employee.hire_date}</td>
                <td>
                  <button onClick={() => handleUpdate(employee.id)}>📝</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(employee.id)}>🗑️</button>
                </td>
                <td>
                  <button onClick={() => handleDetails(employee.id)}>🔍</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11">No employees found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
