import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const getCountSyllabuses = createAsyncThunk('students/getCountSyllabuses', async () => {
    const response = await axios.get('http://localhost:8080/syllabus/count/1/');
    return response.data;
});