import { createSlice } from '@reduxjs/toolkit';
import { getWebmaster } from '../actions/webmaster/getWebmaster';

const webMasterSlice = createSlice({
    name: 'webmasters',
    initialState: {
      webmasters: [],
      webmaster: null,
      loading: false,
      error: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getWebmaster.pending, (state) => {
          state.loading = true;
        })
        .addCase(getWebmaster.fulfilled, (state, action) => {
          state.loading = false;
          state.webmasters = action.payload;
        })
        .addCase(getWebmaster.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
      
        // .addCase(addStudent.fulfilled, (state, action) => {
        //   state.loading = false;
        //   state.webmasters.push(action.payload);
        // })
        // .addCase(editStudent.fulfilled, (state, action) => {
        //   state.loading = false;
        //   const updatedStudent = action.payload;
        //   const index = state.webmasters.findIndex(
        //     (student) => student.Id === updatedStudent.Id
        //   );
        //   if (index !== -1) {
        //     state.webmasters[index] = updatedStudent;
        //   }
        //   if (state.webmaster && state.webmaster.Id === updatedStudent.Id) {
        //     state.webmaster = updatedStudent;
        //   }
        // })
        // .addCase(deleteStudent.fulfilled, (state, action) => {
        //   state.loading = false;
        //   state.webmasters = state.webmasters.filter(
        //     (student) => student.Id !== action.meta.arg
        //   );
        //   if (state.webmaster && state.webmaster.Id === action.meta.arg) {
        //     state.webmaster = null;
        //   }
        // })
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
  
  export default webMasterSlice.reducer;
  