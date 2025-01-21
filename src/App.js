import "./App.css";
import Header from './components/Header';
import Heroien from "./components/Heroien";
import About from './components/About';
import Projects from "./components/Projects";
import Resume from './components/Resume';
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Heroien/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
