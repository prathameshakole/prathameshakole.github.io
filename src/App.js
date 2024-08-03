import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About/>} />
          <Route path='resume' element={<Resume/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='projects' element={<Project/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
