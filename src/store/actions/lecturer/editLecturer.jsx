import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const editLecturer = createAsyncThunk(
    'lecturers/editLecturer',
    async ({ id, updatedLecturer }) => {
        const response = await axios.put(`http://localhost:8080/lecturer/edit-lecturer//${id}`, updatedLecturer);
        console.log('updatedLecturer', response);
        return response.data;
    }
);
