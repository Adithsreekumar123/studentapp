import logo from './logo.svg';
import './App.css';
import AddStudents from './components/AddStudents';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Searchstudent } from './components/Searchstudent';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>

<Route path='/' element={<AddStudents/>}/>
<Route path='/search' element={<Searchstudent/>}/>

</Routes>
</BrowserRouter>

</div>
  );
}

export default App;
