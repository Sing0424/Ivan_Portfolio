import Home from "../Home/Home";
import Nav from "../Nav/Nav";
import Resume from "../Resume/Resume";
import Collection from "../Collection/Collection";
import Contact from '../Contact/Contact';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/Ivan_Portfolio" element={<Home/>} />
        <Route path="/Ivan_Portfolio/Resume" element={<Resume/>} />
        <Route path="/Ivan_Portfolio/Collection" element={<Collection/>} />
        <Route path="/Ivan_Portfolio/Contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App;
