import React, { useEffect } from 'react';
import './App.css';
import { MainApp } from './components/MainApp';
import { useDispatch } from 'react-redux';
import { getStudents } from './store/actions/student/getStudent';
import { getCourses } from './store/actions/course/getCourse';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);
  dispatch(getCourses());
  return (
    <div className="App">
      <MainApp />
    </div>
  );
}
export default App;



