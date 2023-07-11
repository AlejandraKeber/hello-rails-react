import axios from 'axios';

export const getRandomGreeting = async () => {
  try {
    const response = await axios.get('/api/random_greeting');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};