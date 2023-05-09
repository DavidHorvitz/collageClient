import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteCourse = createAsyncThunk(
    'courses/deleteStudent',
    async (id) => {
        const response = await axios.delete(`http://localhost:8080/course/delete-course/${id}`);
        console.log("The deleted student ID:",id);
        return response.data;
    }
  );