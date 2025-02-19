import './App.scss';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route, Routes , useLocation} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Project from './components/Project';
import Life from './components/Life';

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let keys = [];
    const secretCode = 'magic';
    const handleKeyPress = (event) => {
      keys.push(event.key.toLowerCase());
      keys = keys.slice(-secretCode.length);

      if (keys.join('') === secretCode) {
        console.log('Secret code detected!');
        localStorage.setItem('lifeAuthorized', 'true'); 
        navigate('/life');
        console.log('Navigating to /life');
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [navigate]);


  useEffect(() => {
    if (location.pathname === '/about') {
     
      const hash = '#about';
      navigate(`/${hash}`, { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='resume' element={<Resume />} />
          <Route path='contact' element={<Contact />} />
          <Route path='projects' element={<Project />} />
          <Route path='life' element={<Life />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
