import axios from "axios";

export const GET_STUDENTS = `GET_STUDENTS`;

export const getStudents = () => async dispatch => {
    axios.get(`http://localhost:8080/student`)
        .then(res => {
            dispatch({ type: GET_STUDENTS, payload: res.data });
        })
        .catch(err => console.log(`err ${err}`));
}

