import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const getCourseWithStudents = createAsyncThunk('courses/getCourseWithStudents', async (id) => {
    const response = await axios.get(`http://localhost:8080/course/${id}/student`);
    console.log("getCourseWithStudents i try to tu it :",response.data);
    return response.data;
});