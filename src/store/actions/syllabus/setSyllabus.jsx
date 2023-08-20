import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const addSyllabus = createAsyncThunk(
  'syllabuses/addSyllabus',
  async (newSyllabus) => {
    const response = await axios.post('http://localhost:8080/syllabus/add-syllabus', newSyllabus);
    return response.data;
  }
);