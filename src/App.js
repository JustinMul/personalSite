
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import cakeMan from './imgs/cakeMan.svg'
function App() {
  
  const [buttonStatus, setButtonStatus] = useState(0)

  return (
    
    <div className='main'>

      <header className="mainBox">
        <div>Justin Mulroney</div>
        <div className='buttonContainer'>
          <Button text="Home" onClick={()=>{setButtonStatus(0)}} className={buttonStatus===0? 'newButtonactive': "newButton" }></Button>
          <Button text="About" onClick={()=>{setButtonStatus(1)}} className={buttonStatus===1? 'newButtonactive': "newButton" }></Button>
          <Button text='Contact' onClick={()=>{setButtonStatus(2)}} className={buttonStatus===2? 'newButtonactive': "newButton" }></Button>
          <Button text='Projects' onClick={()=>{setButtonStatus(3)}} className={buttonStatus===3? 'newButtonactive': "newButton" }></Button>
        </div>
      </header>

  

      <div className='mainBody'>

        <div className="leftBody">
          <span className='nameIntro'>
            Hi, I'm a
          </span>
          <span className='developer' > Software Developer</span>
          <p className='textBody'>
           I have a keen eye for detail and a love for clean, efficient code. I specialize in Web Development,
           and have a proven track record of delivering high-quality solutions that meet my clients' needs. 
           When I'm not coding, you can find me playing board games or bouldering. Thanks for stopping by my site, and feel free to shoot me and email at Justinmulroney@gmail.com.
          </p>
          <Button text="Hire Me" className='hireMe'></Button>
        </div>

        <div className='rightBody'>
          <img src={cakeMan} style={{ width: 600}} alt='Cake!'></img>
        </div>
          
      </div>

   
   


    </div>
  
  );
}

export default App;
