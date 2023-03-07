import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : "https://React-Discord-API.visibleillusion.repl.co";

export default axios.create({
  baseURL: baseUrl
});
