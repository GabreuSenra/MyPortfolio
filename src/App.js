import logo from './logo.svg';
import './App.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skill';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
