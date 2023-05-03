import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const getStudentWithCourses = createAsyncThunk('students/getStudentWithCourses', async (id) => {
    const response = await axios.get(`http://localhost:8080/student/${id}/course/current`);
    console.log("getStudentWithCourses :",response.data);
    return response.data;
});