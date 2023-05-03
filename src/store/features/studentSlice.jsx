import { createSlice } from '@reduxjs/toolkit';
import { getStudents } from '../actions/student/getStudent';
import { getStudentWithCourses } from '../actions/student/getStudentWithCourses';
import { addStudent } from '../actions/student/setStudent';
import { editStudent } from '../actions/student/editStudent';
import { deleteStudent } from '../actions/student/deleteStudent';

const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    students: [],
    studentCourses: [],
    student: null,
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
      .addCase(getStudentWithCourses.fulfilled, (state, action) => {
        state.loading = false;
        const studentWithCourses = action.payload;
        const index = state.studentCourses.findIndex(
          (student) => student.Id === studentWithCourses.Id,
        );
        if (index !== -1) {
          // Update the student object with the new data, including courses
          state.studentCourses[index] = { ...state.studentCourses[index], ...studentWithCourses };
          // If the updated student is the current student, update the state accordingly
          if (state.student && state.student.Id === studentWithCourses.Id) {
            state.student = { ...state.student, ...studentWithCourses };
          }
        } else {
          // If the student is not already in the state, add it to the studentCourses array
          state.studentCourses.push(studentWithCourses);
        }
      })
      .addCase(getStudentWithCourses.rejected, (state, action) => {
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
        if (state.student && state.student.Id === updatedStudent.Id) {
          state.student = updatedStudent;
        }
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students = state.students.filter(
          (student) => student.Id !== action.meta.arg
        );
        if (state.student && state.student.Id === action.meta.arg) {
          state.student = null;
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

export default studentsSlice.reducer;
