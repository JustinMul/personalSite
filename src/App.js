
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Home from './pages/home';
import AboutMe from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Github from './imgs/github.png'
import Linkedin from './imgs/linkedin.png'

function App() {
  
  const [buttonStatus, setButtonStatus] = useState(0)

  return (
    
    <div className='main'>

      <header className="mainBox">
        <span>Justin Mulroney</span>       
        <div className='buttonContainer'>
          <Button text="Home" onClick={()=>{setButtonStatus(0)}} className={buttonStatus===0? 'newButtonactive': "newButton" }></Button>
          <Button text="About" onClick={()=>{setButtonStatus(1)}} className={buttonStatus===1? 'newButtonactive': "newButton" }></Button>
          <Button text='Projects' onClick={()=>{setButtonStatus(2)}} className={buttonStatus===2? 'newButtonactive': "newButton" }></Button>
          <Button text='Contact' onClick={()=>{setButtonStatus(3)}} className={buttonStatus===3? 'newButtonactive': "newButton" }></Button>
        </div>
      </header>

  
      {buttonStatus===0 ? <Home></Home> :''}
      {buttonStatus===1 ? <AboutMe></AboutMe> :''}
      {buttonStatus===2 ? <Projects></Projects> :''}
      {buttonStatus===3 ? <Contact></Contact> :''}
      

      <footer>
        <img src={Github} height={'50px'} width={'95px'} alt={'Github icon'} onClick={()=>window.open('https://github.com/JustinMul')}></img>
        <img src={Linkedin} height={'50px'} width={'50px'} alt={'Linkedin icon'} onClick={()=> window.open('https://www.linkedin.com/in/justinmulroney/')} ></img>
      </footer>
    </div>
  
  );
}

export default App;
