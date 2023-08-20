import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const getSyllabuses = createAsyncThunk(
    'syllabuses/getSyllabuses', async () => {
        const response = await axios.get('http://localhost:8080/syllabus');
        console.log("getSyllabuses", response);
        return response.data;
    });