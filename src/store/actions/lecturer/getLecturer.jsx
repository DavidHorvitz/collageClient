import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const getLecturers = createAsyncThunk(
    'lecturers/getLecturers', async () => {
    const response = await axios.get('http://localhost:8080/lecturer');
    return response.data;
});