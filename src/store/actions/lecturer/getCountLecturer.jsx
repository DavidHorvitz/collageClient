import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const getCountLecturer = createAsyncThunk('lecturers/getCountLecturer', async () => {
    const response = await axios.get('http://localhost:8080/lecturer/count/1/');
    return response.data;
});