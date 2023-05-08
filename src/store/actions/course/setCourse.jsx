import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const addCourse = createAsyncThunk(
  'courses/addCourse',
  async (newCourse) => {
    const response = await axios.post('http://localhost:8080/course/add-course', newCourse);
    return response.data;
  }
);