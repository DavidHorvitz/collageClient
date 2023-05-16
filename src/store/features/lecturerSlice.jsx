import { createSlice } from '@reduxjs/toolkit';
import { getLecturers } from '../actions/lecturer/getLecturer';
import { addCourseToLecturer } from '../actions/lecturer/addCourseToLecturer';
import { addLecturer } from '../actions/lecturer/setLecturer';
import { deleteLecturer } from '../actions/lecturer/deleteLecturer';
import { editLecturer } from '../actions/lecturer/editLecturer';




const lecturerSlice = createSlice({
    name: 'lecturers',
    initialState: {
        lecturers: [],
        lecturerWithCourses: [],
        lecturer: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLecturers.pending, (state) => {
                state.loading = true;
            })
            .addCase(getLecturers.fulfilled, (state, action) => {
                state.loading = false;
                state.lecturers = action.payload; // fix the typo here
            })
            .addCase(getLecturers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addLecturer.fulfilled, (state, action) => {
                state.loading = false;
                state.lecturers.push(action.payload);
            })
            .addCase(addCourseToLecturer.fulfilled, (state, action) => {
                state.loading = false;
                state.lecturerWithCourses.push(action.payload);
            })
            .addCase(editLecturer.fulfilled, (state, action) => {
                state.loading = false;
                const updatedLecturer = action.payload;
                const index = state.lecturers.findIndex(
                    (lecturer) => lecturer.Id === updatedLecturer.Id
                );
                if (index !== -1) {
                    state.lecturers[index] = updatedLecturer;
                }
                if (state.lecturer && state.lecturer.Id === updatedLecturer.Id) {
                    state.lecturer = updatedLecturer;
                }
            })
            .addCase(deleteLecturer.fulfilled, (state, action) => {
                state.loading = false;
                state.lecturers = state.lecturers.filter(
                    (course) => course.Id !== action.meta.arg
                );
                if (state.lecturer && state.lecturer.Id === action.meta.arg) {
                    state.lecturer = null;
                }
            })
            .addMatcher(
                (action) =>
                    action.type.endsWith('/pending') || action.type.endsWith('/rejected'),
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                }
            )
    }
});

export default lecturerSlice.reducer;
