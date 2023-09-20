import { createSlice } from '@reduxjs/toolkit';
import { getSyllabuses } from '../actions/syllabus/getSyllabus';
import { addSyllabus } from '../actions/syllabus/setSyllabus';
import { getCountSyllabuses } from '../actions/syllabus/getCountSyllabuses';
const syllabusesSlice = createSlice({
  name: 'syllabuses',
  initialState: {
    syllabuses: [],
    syllabus: null,
    countSyllabuses: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSyllabuses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSyllabuses.fulfilled, (state, action) => {
        state.loading = false;
        state.syllabuses = action.payload;
      })
      .addCase(getSyllabuses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getCountSyllabuses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCountSyllabuses.fulfilled, (state, action) => {
        state.loading = false;
        state.countSyllabuses = action.payload;
      })
      .addCase(getCountSyllabuses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addSyllabus.fulfilled, (state, action) => {
        state.loading = false;
        state.syllabuses.push(action.payload);
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
      );
  },
});

export default syllabusesSlice.reducer;
