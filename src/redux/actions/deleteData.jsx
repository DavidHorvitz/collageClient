import axios from 'axios';
export const DELETE_STUDENTS = 'DELETE_STUDENTS';

export const deleteData =  (id, navigate) => {
    return (dispatch) => {
        axios.delete(`http://localhost:8080/student/delete-student/${id}`);
        dispatch({ type: DELETE_STUDENTS, payload: id })
        console.log("The deleted student ID:",id);
        navigate("/");
    }
};

