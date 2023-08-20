import { createSlice } from '@reduxjs/toolkit';
import { getSyllabuses } from '../actions/syllabus/getSyllabus';
import { addSyllabus } from '../actions/syllabus/setSyllabus';
const syllabusesSlice = createSlice({
  name: 'syllabuses',
  initialState: {
    syllabuses: [], 
    syllabus: null, 
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
