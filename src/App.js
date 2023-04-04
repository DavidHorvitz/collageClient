import React from 'react';
// import logo from './logo.svg';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
import './App.css';
// import { Table } from './components/Templates/Table';
// import { getData } from './api/getData';
import { MainApp } from './components/MainApp';

const App = props => {

  return (
    <div className="App">
      <MainApp />

    </div>
  );
}
export default App;


// function App() {
//   const [students, setStudents] = useState([]);
//   useEffect(() => {
//     getData(setStudents);
//   }, []);
//   return (
//     <div className="App">
//       <Table students={students} />
//     </div>
//   );
// }

// export default App;



