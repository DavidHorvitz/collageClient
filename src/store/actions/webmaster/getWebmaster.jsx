import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const getWebmaster = createAsyncThunk('webmasters/getWebmaster', async () => {
    const response = await axios.get('http://localhost:8080/webmaster');
    return response.data;
});