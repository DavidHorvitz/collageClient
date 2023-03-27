import logo from './logo.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Table } from './components/Table';
import { getData } from './api/getData';


function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getData(setStudents);
  }, []);
  return (
    <div className="App">
      <Table students={students} />
    </div>
  );
}

export default App;
