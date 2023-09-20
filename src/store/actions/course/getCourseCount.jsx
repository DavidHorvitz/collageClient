import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const getCountCourses = createAsyncThunk('courses/getCountCourses', async () => {
    const response = await axios.get('http://localhost:8080/course/count/1/');
    return response.data;
});