import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteWebmaster = createAsyncThunk(
    'webmasters/deleteWebmaster',
    async (id) => {
        const response = await axios.delete(`http://localhost:8080/webmaster/delete-webmaster/${id}`);
        console.log("The deleted student ID:",id);
        return response.data;
    }
  );