import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const addLecturer = createAsyncThunk(
  'lecturers/addLecturer',
  async (newLecturer) => {
    const response = await axios.post('http://localhost:8080/lecturer/add-lecturer', newLecturer);
    return response.data;
  }
);