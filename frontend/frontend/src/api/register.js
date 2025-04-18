import axios from 'axios';

const REGISTER_URL = 'http://127.0.0.1:8000/api/cuentas/register/';

export const register = async (userData) => {
  return axios.post(REGISTER_URL, userData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
