import React, { useState } from 'react';
import { createEmployee } from '../services/api';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    department: '',
    salary: '',
    hire_date: '',
    profile_picture: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const token = localStorage.getItem('token');
      await createEmployee(token, data);
      alert('Employee created!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Employee</h2>
      <input name="first_name" placeholder="First Name" onChange={handleChange} />
      <input name="last_name" placeholder="Last Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="department" placeholder="Department" onChange={handleChange} />
      <input name="salary" placeholder="Salary" onChange={handleChange} />
      <input name="hire_date" type="date" onChange={handleChange} />
      <input name="profile_picture" type="file" accept="image/*" onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
}

export default EmployeeForm;
