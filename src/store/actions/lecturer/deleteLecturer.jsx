import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteLecturer = createAsyncThunk(
    'lecturers/deleteLecturer',
    async (id) => {
        const response = await axios.delete(`http://localhost:8080/lecturer/delete-lecturer/${id}`);
        console.log("The deleted Lecturer ID:",id);
        return response.data;
    }
  );