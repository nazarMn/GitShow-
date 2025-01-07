import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import General from './components/MainPage/Page/General';
import Header from './components/MainPage/Header/Header';
import Home from './components/HomePage/Home/Home';
import Portfolio from './components/HomePage/PortfolioPage/Portfolio/Portfolio';
import AccountSettings from './components/HomePage/Setting/AccountSettings/AccountSettings';
import SettingsProjects from './components/HomePage/Setting/SettingsProjects/SettingsProjects';
import Resume from './components/HomePage/ResumePage/Resume/Resume';
import ResumeSettings from './components/HomePage/Setting/ResumeSettings/ResumeSettings';
import Skills from './components/HomePage/Skills/Skills';
import SkillsSettings from './components/HomePage/Setting/SkillsSettings/SkillsSettings';
import ProjectPage from './components/HomePage/ProjectPage/ProjectPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then((res) => {
        if (res.status === 401) {
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      })
      .catch(() => setIsAuthenticated(false));
  }, []);

  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <Routes>
        {/* If the user is logged in, redirect from General to Home */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <>
                <Header />
                <General />
                
              </>
            )
          }
        />
        {/* Protect the Home route */}
        <Route
          path="/home"
          element={
            isAuthenticated ?<> <Home /> <Portfolio />   <Skills /> <Resume />  <SettingsProjects /> <ProjectPage />  </> : <Navigate to="/" replace />
          }
        />
        <Route 
        path='/ResumeSettings'
        element={
          isAuthenticated ? <ResumeSettings /> : <Navigate to="/" replace />
        }
        
        />
        <Route 
        path='/PublicProfileSettings'
        element={
          isAuthenticated ? <AccountSettings /> : <Navigate to="/" replace />
        }
        
        />

        <Route 
        path='/SkillsSettings'
        element={
          isAuthenticated ? <SkillsSettings /> : <Navigate to="/" replace />
        }

        />
      </Routes>
    </Router>
  );
};

export default App;
