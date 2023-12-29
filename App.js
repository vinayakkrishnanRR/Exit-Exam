import { Route, Routes } from 'react-router-dom';
import Todolist from './Components/Todolist.jsx'
import Main from '../src/Pages/Main.jsx'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Main child={<Todolist/>}/>}/>
    </Routes>
  );
}

export default App;
