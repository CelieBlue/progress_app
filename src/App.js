import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from './Components/Menu';
import Home from './Pages/Home';
import AddCourse from './Pages/AddCourse';
import CoursesList from './Pages/CoursesList';
import './Styles/App.css';

function App() {

  const [courses, setCourses] = useState([]); 
  // Résultat de la soumissoin du formulaire [{name: 'React', category: 'front', description: 'Learn React'}, {name: 'Node', category: 'back', description: 'Learn Node'}]
  
  function handleAddCourse(course) {
    console.log('handleAddCourse', course);
  }

  return (
    <>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddCourse handleAddCourse={handleAddCourse} />} />
      <Route path="/list" element={<CoursesList />} />  
    </Routes>
    </> 
  );
}

export default App;
