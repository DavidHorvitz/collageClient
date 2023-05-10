import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const addCourseToLecturer = createAsyncThunk(
    'lecturers/addCourseToLecturer',
    //In the addCourseToLecturer API, you need to pass an object with the courseId and studentId as properties
    async ({ lecturerId, courseId }) => {
        const response = await axios.post(`http://localhost:8080/lecturer/${lecturerId}/course/${courseId}`);
        return response.data;
    }
);