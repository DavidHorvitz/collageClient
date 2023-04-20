import axios from "axios";

export const EDIT_STUDENTS = `EDIT_STUDENTS`;

export const editStudent = (id, data, navigate) => {
    return (dispatch) => {
        axios.put(`http://localhost:8080/student/edit-student/${id}`, data).then((res) => {
            dispatch({ type: EDIT_STUDENTS, payload: res.data });
        });
        navigate("/");
    };
};