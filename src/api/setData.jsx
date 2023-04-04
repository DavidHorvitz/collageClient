import axios from 'axios';



export const setData = async (data) => {
    try {
      const response = await axios.post(`http://localhost:8080/student`, data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };