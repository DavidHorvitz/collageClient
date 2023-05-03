import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const getCourses = createAsyncThunk('courses/getCourses', async () => {
    const response = await axios.get('http://localhost:8080/course');
    return response.data;
});