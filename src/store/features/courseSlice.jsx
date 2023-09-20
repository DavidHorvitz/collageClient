import { createSlice } from '@reduxjs/toolkit';
import { getCourses } from '../actions/course/getCourse';
import { addStudentToCourse } from '../actions/course/addStudentToCourse';
import { addCourse } from '../actions/course/setCourse';
import { deleteCourse } from '../actions/course/deleteCourse';
import { editCourse } from '../actions/course/editCourse';
import { getCourseWithStudents } from '../actions/course/getCoursesWithStudents';
import { getCountCourses } from '../actions/course/getCourseCount';




const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    courseWithStudents: null,
    course: null,
    countCourses: null,
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
      .addCase(getCountCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCountCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.countCourses = action.payload; // fix the typo here
      })
      .addCase(getCountCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getCourseWithStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.courseWithStudents = action.payload; // Store the received student object directly
      })
      .addCase(getCourseWithStudents.rejected, (state, action) => {
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
      .addCase(editCourse.fulfilled, (state, action) => {
        state.loading = false;
        const updatedCourse = action.payload;
        const index = state.courses.findIndex(
          (course) => course.Id === updatedCourse.Id
        );
        if (index !== -1) {
          state.courses[index] = updatedCourse;
        }
        if (state.course && state.course.Id === updatedCourse.Id) {
          state.course = updatedCourse;
        }
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = state.courses.filter(
          (course) => course.Id !== action.meta.arg
        );
        if (state.course && state.course.Id === action.meta.arg) {
          state.course = null;
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

export default courseSlice.reducer;
