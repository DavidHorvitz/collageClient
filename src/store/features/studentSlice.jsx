// src/redux/slices/studentSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { getStudents } from '../actions/student/getStudent';
import { addStudent } from '../actions/student/setStudent';
import { editStudent } from '../actions/student/editStudent';
import { deleteStudent } from '../actions/student/deleteStudent';



const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    students: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students.push(action.payload);
      })
      .addCase(editStudent.fulfilled, (state, action) => {
        state.loading = false;
        const updatedStudent = action.payload;
        const index = state.students.findIndex(
          (student) => student.Id === updatedStudent.Id
        );
        if (index !== -1) {
          state.students[index] = updatedStudent;
        }
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students = state.students.filter(
          (student) => student.Id !== action.meta.arg
        );
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

export default studentsSlice.reducer;
