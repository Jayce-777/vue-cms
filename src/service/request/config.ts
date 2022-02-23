let BASE_URL = '';
const TIME_OUT = 10000;

if (process.env.NODE_ENV) {
  BASE_URL = 'http://123.207.32.32:8000/';
}

export { BASE_URL, TIME_OUT };
