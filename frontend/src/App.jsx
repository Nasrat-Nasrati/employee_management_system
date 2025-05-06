


// import React from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import LoginForm from './components/LoginForm';
// import EmployeeList from './components/EmployeeList';
// import EmployeeForm from './components/EmployeeForm';

// function App() {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     navigate('/employees');  // بعد از لاگین موفق، ریدایرکت به لیست کارمندان
//   };

//   return (
//     <Routes>
//       <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
//       <Route path="/employees" element={<EmployeeList />} />
//       <Route path="/create-employee" element={<EmployeeForm />} />
//     </Routes>
//   );
// }

// export default App;



import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import UpdateEmployee from './components/UpdateEmployee';
import EmployeeDetails from './components/EmployeeDetails';


function App() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/employees');
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
      <Route path="/employees" element={<EmployeeList />} />
      <Route path="/create-employee" element={<EmployeeForm />} />
      <Route path="/update-employee/:id" element={<UpdateEmployee />} />
      <Route path="/employee-details/:id" element={<EmployeeDetails />} />
    </Routes>
  );
}

export default App;
