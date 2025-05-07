import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchEmployeeById, updateEmployee } from '../services/api';
import './UpdateEmployee.css'; 


function UpdateEmployee() {
  const { id } = useParams();  // گرفتن ID از URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    department: '',
    salary: '',
    hire_date: '',
  });

  useEffect(() => {
    const loadEmployee = async () => {
      try {
        const data = await fetchEmployeeById(id);
        setFormData(data);
      } catch (error) {
        alert('Failed to load employee data.');
      }
    };
    loadEmployee();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
  
      // فقط فیلدهای قابل آپدیت را بفرستیم
      const updatedData = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        department: formData.department,
        salary: formData.salary,
        hire_date: formData.hire_date,
      };
  
      await updateEmployee(id, updatedData, token);
      alert('Employee updated successfully!');
      navigate('/employees');
    } catch (error) {
      alert('Failed to update employee.');
      console.error(error);
    }
  };
  

  return (
    <div className="update-employee-container">
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>ID No (cannot change):</label>
        <input type="text" name="id" value={formData.id} readOnly />

        <label>First Name:</label>
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />

        <label>Last Name:</label>
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />

        <label>Department:</label>
        <input type="text" name="department" value={formData.department} onChange={handleChange} />

        <label>Salary:</label>
        <input type="number" name="salary" value={formData.salary} onChange={handleChange} />

        <label>Hire Date:</label>
        <input type="date" name="hire_date" value={formData.hire_date} onChange={handleChange} />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateEmployee;
