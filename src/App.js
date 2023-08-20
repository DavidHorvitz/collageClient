import React, { useEffect } from 'react';
import './App.css';
import { MainApp } from './components/MainApp';
import { useDispatch } from 'react-redux';
import { getStudents } from './store/actions/student/getStudent';
import { getCourses } from './store/actions/course/getCourse';
import { getLecturers } from './store/actions/lecturer/getLecturer';
import { getWebmaster } from './store/actions/webmaster/getWebmaster';
import { ThemeProvider } from '@mui/material/styles';
import { dashboardTheme } from './dashboardTheme';
import { getRooms } from './store/actions/room/getRoom';
import { getSyllabuses } from './store/actions/syllabus/getSyllabus';
const App = () => {

  const dispatch = useDispatch();

  // useEffect(() => {
  //   // dispatch();
  // }, []);
  dispatch(getStudents());
  dispatch(getCourses());
  dispatch(getLecturers());
  dispatch(getWebmaster());
  dispatch(getRooms());
  dispatch(getSyllabuses());

  return (
    <ThemeProvider theme={dashboardTheme}>
      <div className="App">
        <MainApp />
      </div>
    </ThemeProvider>
  );
}
export default App;



