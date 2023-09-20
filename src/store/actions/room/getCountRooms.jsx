import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const getCountRooms = createAsyncThunk('rooms/getCountRooms', async () => {
    const response = await axios.get('http://localhost:8080/room/count/1/');
    return response.data;
});