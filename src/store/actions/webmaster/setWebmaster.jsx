import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const addWebmaster = createAsyncThunk(
  'webmasters/addWebmaster',
  async (newWebmaster) => {
    const response = await axios.post('http://localhost:8080/webmaster/add-webmaster', newWebmaster);
    return response.data;
  }
);