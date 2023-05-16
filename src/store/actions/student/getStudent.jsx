import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const getStudents = createAsyncThunk('students/getStudents', async () => {
    const response = await axios.get('http://localhost:8080/student');
    console.log("getStudents", response);
    return response.data;
});