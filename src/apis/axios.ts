import axios from 'axios';

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_BASE_URL,
  },
});

export default client;
