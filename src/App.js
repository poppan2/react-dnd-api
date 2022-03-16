import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ClassList from './pages/ClassList/ClassList';
import ClassDetails from './pages/ClassDetails/ClassDetails';

function App() {
  const [navItems, setNavItems] = useState([
    {url: "/class-list", name: "Class List"}, 
    {url: "/monster-list", name: "Scary Monsters"}, 
    {url: "/spell-search", name: "Search for Spells"}
  ])
  return (
    <>
      <NavBar navItems={navItems} />
      <Routes>
        <Route path='/class-list' element={<ClassList />} />
        <Route path='/class' element={<ClassDetails />} />
      </Routes>
    </>
  );
}

export default App;
