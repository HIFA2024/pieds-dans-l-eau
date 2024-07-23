
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import theme from './theme.js';
import Login from './components/Auth/Login.jsx';
import Signup from './components/Auth/Signup.jsx';
import ExperienceForm from './components/Experience/ExperienceForm.jsx';
import ExperienceList from './components/Experience/ExperienceList.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/share-experience" element={<ExperienceForm />} />
            <Route path="/" element={<ExperienceList />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
