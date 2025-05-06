



// import React, { useState } from 'react';
// import { login } from '../services/api';
// import './LoginForm.css'; // Importing the CSS for styling

// function LoginForm({ onLogin }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     try {
//       const data = await login(username, password);
//       localStorage.setItem('token', data.token);
//       onLogin();
//     } catch (error) {
//       setError('Login failed, please check your credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2>Login</h2>
//         {error && <div className="error-message">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="input-field"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="input-field"
//           />
//           <button type="submit" className="submit-button">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;




import React, { useState } from 'react';
import { createEmployee } from '../services/api';
import './EmployeeForm.css'; // Importing the CSS for styling

function EmployeeForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    department: '',
    salary: '',
    hire_date: '',
    profile_picture: null,
  });
  const [error, setError] = useState(null);

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
    setError(null); // Reset error on new submit
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const token = localStorage.getItem('token');
      await createEmployee(token, data);
      alert('Employee created!');
    } catch (error) {
      setError('Something went wrong while creating the employee');
    }
  };

  return (
    <div className="employee-form-container">
      <div className="employee-form">
        <h2>Create Employee</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            className="input-field"
          />
          <input
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            className="input-field"
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
          />
          <input
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="input-field"
          />
          <input
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
            className="input-field"
          />
          <input
            name="hire_date"
            type="date"
            value={formData.hire_date}
            onChange={handleChange}
            className="input-field"
          />
          <div className="file-input">
            <label>Profile Picture</label>
            <input
              name="profile_picture"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-button">Save Employee</button>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;
