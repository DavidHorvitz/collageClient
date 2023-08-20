import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const addRoom = createAsyncThunk(
  'rooms/addRoom',
  async (newRoom) => {
    const response = await axios.post('http://localhost:8080/room/add-room', newRoom);
    return response.data;
  }
);