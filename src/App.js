import './General.css'
import {Navbar} from './components/Navbar'; 
import {Slider} from './components/Slider';
import {About} from './components/About';
import {Team} from './components/Team';
import {Footer} from './components/Footer';

function App() {
  return (
    <>
   
      <Navbar />
      <Slider/>
      <About/>
      <Team/>
  
      <Footer/>
  </>
  
  )

}

export default App;
