import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import './index.css';

function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Skills />
    </div>
  );
}

export default App;
