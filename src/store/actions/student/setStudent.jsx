import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const addStudent = createAsyncThunk(
  'students/addStudent',
  async (newStudent) => {
    const response = await axios.post('http://localhost:8080/student/add-student', newStudent);
    return response.data;
  }
);