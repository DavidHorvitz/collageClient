import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const editStudent = createAsyncThunk(
    'students/editStudent',
    async ({ id, updatedStudent }) => {
        const response = await axios.put(`http://localhost:8080/student/edit-student/${id}`, updatedStudent);
        return response.data;
    }
);
