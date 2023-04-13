import React from 'react';
import './App.css';
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



