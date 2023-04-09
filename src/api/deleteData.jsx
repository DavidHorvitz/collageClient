import axios from 'axios';

export const deleteData = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8080/student/delete-student/${id}`);
        return response;
    } catch (err) {
        return Promise.reject(err);
    }
};