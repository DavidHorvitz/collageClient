import axios from 'axios';

export const editData = async (id,data) => {
    try {
        const response = await axios.put(`http://localhost:8080/student/edit-student/${id}`, data);
        return response.data;
    } catch (err) {
        return Promise.reject(err);
    }
};

