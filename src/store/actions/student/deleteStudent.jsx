import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteStudent = createAsyncThunk(
    'students/deleteStudent',
    async (id) => {
        const response = await axios.delete(`http://localhost:8080/student/delete-student/${id}`);
        console.log("The deleted student ID:",id);
        return response.data;
    }
  );