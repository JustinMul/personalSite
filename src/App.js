
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Home from './pages/home';
import AboutMe from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Github from './imgs/github.png'
import Linkedin from './imgs/linkedin.png'
import jmLogo from './imgs/jmLogoInvert.png'



function App() {
  
  const [menuState, setMenuState] = useState({button:'Home', open:false})

  return (
    
    <div className='main'>

      {/* for desktop header */}
      <header className="mainBoxDesktop">
     
        <img src={jmLogo}  className='jmLogo' alt='JM logo' onClick={()=>{setMenuState({button:'Home'})}}></img> 
        <div className='buttonContainer'>
          <Button text="Home" onClick={()=>{setMenuState({button:'Home',open:(!menuState.open)})}} className={menuState.button==='Home'? 'newButtonactive': "newButton" }></Button>
          <Button text="About" onClick={()=>{setMenuState({button:'About',open:(!menuState.open)})}} className={menuState.button==='About'? 'newButtonactive': "newButton" }></Button>
          <Button text='Projects' onClick={()=>{setMenuState({button:'Projects',open:(!menuState.open)})}} className={menuState.button==='Projects'? 'newButtonactive': "newButton" }></Button>
          <Button text='Contact' onClick={()=>{setMenuState({button:'Contact',open:(!menuState.open)})}} className={menuState.button==='Contact'? 'newButtonactive': "newButton" }></Button>
        </div>
      </header>

      {/* for mobile header */}
      <header className="mainBox">
      <img src={jmLogo}  className='jmLogo' alt='JM logo' onClick={()=>{setMenuState({button:'Home', open:false})}}></img>      
        <div className='buttonContainer'>

           {menuState.open === false  ? <Button text={`☰`} onClick={()=>{setMenuState({button:menuState.button,open:!menuState.open})}} className={"newButton"}></Button>:  
          <div className='popUpMenu'>
         
          <Button text="Home" onClick={()=>{setMenuState({button:'Home',open:(!menuState.open)})}} className={menuState.button==='Home'? 'newButtonactive': "newButton" }></Button>
          <Button text="About" onClick={()=>{setMenuState({button:'About',open:(!menuState.open)})}} className={menuState.button==='About'? 'newButtonactive': "newButton" }></Button>
          <Button text='Projects' onClick={()=>{setMenuState({button:'Projects',open:(!menuState.open)})}} className={menuState.button==='Projects'? 'newButtonactive': "newButton" }></Button>
          <Button text='Contact' onClick={()=>{setMenuState({button:'Contact',open:(!menuState.open)})}} className={menuState.button==='Contact'? 'newButtonactive': "newButton" }></Button>
          <Button text="✕" onClick={()=>{setMenuState({button:menuState.button,open:!menuState.open})}} className={"newButton" }></Button>

        </div> }
         
          
        </div>
      </header>
    
        {menuState.button==='Home' ? <Home></Home> :''}
        {menuState.button==='About' ? <AboutMe></AboutMe> :''}
        {menuState.button==='Projects' ? <Projects></Projects> :''}
        {menuState.button==='Contact' ? <Contact></Contact> :''}


      <footer className='footer' >
        <img src={Github} height={'50px'} width={'95px'} alt={'Github icon'} onClick={()=>window.open('https://github.com/JustinMul')}></img>
        <img src={Linkedin} height={'50px'} width={'50px'} alt={'Linkedin icon'} onClick={()=> window.open('https://www.linkedin.com/in/justinmulroney/')} ></img>
      </footer>
    </div>
  
  );
}

export default App;
