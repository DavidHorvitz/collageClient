import axios from 'axios';

export const getData = async (setStudents) => {
    try {
        const response = await axios.get(`http://localhost:8080/student`);
        setStudents(response.data);
    } catch (err) {
        console.log(err);
    }
}