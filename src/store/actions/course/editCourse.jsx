import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const editCourse = createAsyncThunk(
    'courses/editCourse',
    async ({ id, updatedCourse }) => {
        const response = await axios.put(`http://localhost:8080/course/edit-course/${id}`, updatedCourse);
        return response.data;
    }
);
