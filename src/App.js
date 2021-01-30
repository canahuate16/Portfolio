import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'


import './index.css';

function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
