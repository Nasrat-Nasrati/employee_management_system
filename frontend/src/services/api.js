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
