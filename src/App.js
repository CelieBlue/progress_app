import { Routes, Route } from 'react-router-dom';

import Menu from './Components/Menu';
import Home from './Pages/Home';
import AddCourse from './Pages/AddCourse';
import CoursesList from './Pages/CoursesList';
import './Styles/App.css';

function App() {
  return (
    <>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddCourse />} />
      <Route path="/list" element={<CoursesList />} />  
    </Routes>
    </> 
  );
}

export default App;
