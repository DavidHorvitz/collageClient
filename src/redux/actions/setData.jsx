import axios from "axios";

export const SET_STUDENTS = `SET_STUDENTS`;

export const addStudent = (data, navigate) => {
  return (dispatch) => {
    axios.post("http://localhost:8080/student/add-student", data).then((res) => {
      dispatch({ type: SET_STUDENTS, payload: res.data });
      console.log(data);
      navigate("/");
    });
  };
};


