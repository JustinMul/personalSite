
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import cakeMan from './imgs/cakeMan.svg'
function App() {
  
  const [buttonStatus, setButtonStatus] = useState(0)

  const handleClick=(e)=>{
    console.log('this is clicked')
  }



  return (
    // note want to change the buttons to be red when showing what tab they're in
    
    <div className='main'>

      <header className="mainBox">
        <div>Justin Mulroney</div>
        <div className='buttonContainer'>
          <Button text="Home" onClick={handleClick}></Button>
          <Button text="About" onClick={handleClick}></Button>
          <Button text='Contact' onClick={handleClick}></Button>
          <Button text='Projects' onClick={handleClick}></Button>
        </div>
      </header>

  

      <div className='mainBody'>

        <div className="leftBody">
          <p className='nameIntro'>
            Hi, I'm Software Developer
          </p>
          <p className='textBody'>
          I'm a passionate software developer with a keen eye for detail and a love for clean, efficient code. I specialize in Web Development,
           and have a proven track record of delivering high-quality solutions that meet my clients' needs. 
           When I'm not coding, you can find me playing board games or bouldering. Thanks for stopping by my site, and feel free to shoot me and email at Justinmulroney@gmail.com.
          </p>
          <Button text="Hire Me"></Button>
        </div>

        <div className='rightBody'>
          <img src={cakeMan} style={{ width: 600}} alt='Cake!'></img>
        </div>
          
      </div>

   
   


    </div>
  
  );
}

export default App;
