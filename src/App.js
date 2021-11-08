import './Css/style.css';
import Navbar from './Components/Navbar'
import About from './Components/about'
import Projects from './Components/projects'
import Contact from './Components/contact'
import Footer from './Components/footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
