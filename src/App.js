import React, { useEffect } from 'react';
import './App.css';
import { MainApp } from './components/MainApp';
import { useDispatch } from 'react-redux';
import { getStudents } from './store/actions/student/getStudent';
import { getCourses } from './store/actions/course/getCourse';
import { getLecturers } from './store/actions/lecturer/getLecturer';
import { getWebmaster } from './store/actions/webmaster/getWebmaster';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);
  dispatch(getCourses());
  dispatch(getLecturers());
  dispatch(getWebmaster());
  return (
    <div className="App">
      <MainApp />
    </div>
  );
}
export default App;



