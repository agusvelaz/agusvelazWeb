import './App.css';
import {ThemeProvider} from '@mui/material'
import theme from './assets/theme'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills/Skills';
import AboutMe from './components/AboutMe/AboutMe';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <NavBar/>
      <Home/>
      <Skills/>
      <AboutMe/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
