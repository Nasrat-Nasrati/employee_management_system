import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // آدرس بک‌اند جنگو

// تابع لاگین
export async function login(username, password) {
  const response = await axios.post(`${API_URL}/auth/`, { username, password });
  return response.data;  // اینجا token برمی‌گردد
}

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
