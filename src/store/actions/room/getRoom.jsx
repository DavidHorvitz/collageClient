import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const getRooms = createAsyncThunk(
    'rooms/getRooms', async () => {
        const response = await axios.get('http://localhost:8080/room');
        console.log("getRooms", response);
        return response.data;
    });