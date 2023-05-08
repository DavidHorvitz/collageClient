import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const addStudentToCourse = createAsyncThunk(
    'courses/addStudentToCourse',
    //In the addStudentToCourse API, you need to pass an object with the courseId and studentId as properties
    async ({courseId, studentId}) => {
        const response = await axios.post(`http://localhost:8080/course/${courseId}/student/${studentId}`);
        return response.data;
    }
);