

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EmployeeDetails.css'; // فایل CSS جداگانه

function EmployeeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:8000/api/employees/${id}/`, {
          headers: {
            'Authorization': `Token ${token}`,  // ✅ دقت کن که Token باشه، نه Bearer
          },
        });
        if (!response.ok) throw new Error('Failed to fetch employee');
        const data = await response.json();
        setEmployee(data);
      } catch (err) {
        setError(err.message);
      }
    };
  
    fetchEmployeeDetails();
  }, [id]);
  


  if (error) return <div className="error-message">{error}</div>;
  if (!employee) return <div>Loading...</div>;

  return (
    <div className="employee-details-container">
      <h2> Details of : {employee.first_name} {employee.last_name}</h2>

      <div className="profile-card">
      <img 
  src={employee.profile_picture ? employee.profile_picture : '/default-profile.png'} 
  alt="Employee" 
  className="profile-pic"
/>





        <div className="profile-info">
          <p><strong>Email Address:</strong> {employee.email}</p>
          <p><strong> Phone Number:</strong> {employee.phone}</p>
          <p><strong>Department:</strong> {employee.department}</p>
          <p><strong>Salary:</strong> ${employee.salary}</p>
          <p><strong>Hire Date :</strong> {employee.hire_date}</p>
        </div>

        <button onClick={() => window.print()} className="btn btn-primary">
  Print Employee Record
</button>

      </div>

      <button onClick={() => navigate(-1)} className="back-btn">  Return to employee list</button>
    </div>
  );
}

export default EmployeeDetails;
