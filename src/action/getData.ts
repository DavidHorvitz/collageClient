import axios from 'axios';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT'
const serverUrl = process.env.REACT_APP_SERVER_URL;
const sendData = async () => {
  try {
    const response = await axios.post('http://localhost:8080/student', { data: 'example data' });
    console.log(response.data);
  } catch (error) {
    console.error(error)
    
  }
};

export const getData = async (dispatch) => {
  const response = await axios.get(`${serverUrl}/student`)
    .then(response => {
      dispatch({ type: GET_ALL_PRODUCT, payload: response.data });
    }).catch(err => console.log(err));
};
