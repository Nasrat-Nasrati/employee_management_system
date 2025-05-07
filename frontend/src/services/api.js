import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // آدرس بک‌اند جنگو

const API_BASE_URL = 'http://localhost:8000/api';

const login = async (username, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
};

export { login };




// گرفتن لیست کارمندان
export async function getEmployees(token) {
  const response = await axios.get(`${API_URL}/employees/`, {
    headers: {
      Authorization: `Token ${token}`
    }
  });
  return response.data;
}

// ساخت کارمند جدید
export async function createEmployee(token, formData) {
  const response = await axios.post(`${API_URL}/employees/`, formData, {
    headers: {
      Authorization: `Token ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
}


export async function fetchEmployees() {
  const token = localStorage.getItem('token');
  const response = await fetch('http://localhost:8000/api/employees/', {
    headers: {
      'Authorization': `Token ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch employees');
  }

  const data = await response.json();
  console.log('API Response:', data);  // Log the response to check its structure
  return data;  // Return the full response for now
}


// delete employee 
export async function deleteEmployee(id) {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`http://localhost:8000/api/employees/${id}/`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${token}`, // 🔥 این مهم است
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete employee');
    }

    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// #update employee 

export async function fetchEmployeeById(id) {
  const token = localStorage.getItem('token');
  const response = await fetch(`http://localhost:8000/api/employees/${id}/`, {
    headers: {
      'Authorization': `Token ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch employee');
  }
  return await response.json();
}

export async function updateEmployee(id, data, token) {
  const response = await fetch(`http://localhost:8000/api/employees/${id}/`, {
    method: 'PUT',
    headers: {
      'Authorization': `Token ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to update employee');
  }
  return await response.json();
}





// employee details

export async function fetchEmployeeDetails(id) {
  const token = localStorage.getItem('token');
  const response = await fetch(`http://localhost:8000/api/employees/${id}/`, {
    headers: {
      'Authorization': `Token ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch employee');
  }
  return await response.json();
}




