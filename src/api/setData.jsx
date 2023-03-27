import axios from 'axios';

export const setData = async (setStudents) => {
    try {
        const response = await axios.post(`http://localhost:8080/student`);
        setStudents(response.data);
    } catch (err) {
        console.log(err);
    }
}