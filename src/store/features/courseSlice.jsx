import { createSlice } from '@reduxjs/toolkit';
import { getCourses } from '../actions/course/getCourse';
import { addStudentToCourse } from '../actions/course/addStudentToCourse';
import { addCourse } from '../actions/course/setCourse';




const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    courseWithStudents: [],
    course: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload; // fix the typo here
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses.push(action.payload);
      })
      .addCase(addStudentToCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courseWithStudents.push(action.payload);
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

export default courseSlice.reducer;


        //   .addCase(editStudent.fulfilled, (state, action) => {
        //     state.loading = false;
        //     const updatedStudent = action.payload;
        //     const index = state.students.findIndex(
        //       (student) => student.Id === updatedStudent.Id
        //     );
        //     if (index !== -1) {
        //       state.students[index] = updatedStudent;
        //     }
        //   })
        //   .addCase(deleteStudent.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.students = state.students.filter(
        //       (student) => student.Id !== action.meta.arg
        //     );
        //   })
        //   .addMatcher(
        //     (action) =>
        //       action.type.endsWith('/pending') || action.type.endsWith('/rejected'),
        //     (state) => {
        //       state.loading = true;
        //       state.error = null;
        //     }
        //   )
        //   .addMatcher(
        //     (action) => action.type.endsWith('/rejected'),
        //     (state, action) => {
        //       state.loading = false;
        //       state.error = action.error.message;
        //     }
        //   )