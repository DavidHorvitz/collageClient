import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const getCountStudents = createAsyncThunk('students/getCountStudents', async () => {
    const response = await axios.get('http://localhost:8080/student/count/1/');
    return response.data;
});