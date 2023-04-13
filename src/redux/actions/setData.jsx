import axios from "axios";

export const SET_STUDENT = `SET_STUDENT`;

export const addStudent = (obj,navigate) => async dispatch => {
    axios.post(`http://localhost:8080/student/add-student`, {
        data: obj
    })
        .then(res => {
            console.log(res);
            navigate('/');
            dispatch({ type: SET_STUDENT, payload: res.data });
        })
        .catch(err => console.log(`err ${err}`));
}


