import './projects.css'
import Button from '../components/Button'
import Ryna from '../imgs/ryna-removebg.png'
import Kyrpto from '../imgs/KRYPTO.png'
import Calc from '../imgs/calculator.png'
import Scheduler from '../imgs/scheduler.png'

const Projects =()=>{



  return(
    <section className="mainProjectContainer">
      <div className='contentContainer'>
        <div className="box" >
          <h1 className='developer'>Ryna</h1>
          <img src={Ryna} height={'200px'} maxwidthwidth={'300px'} alt={'ryna Logo'}></img>
          <p>Ryna is the next generation rental platform designed to make the rental experience easy and safe for modern women and inclusive-minded allies.</p>
          
        </div>
        <Button text={'Visit'} className='hireMe' onClick={()=>{window.open('https://www.theryna.com/')}}>Visit</Button>
      </div>
      <div className='contentContainer'>
        <div className="box">
          <h1 className='developer'>Krypto</h1>
          <img src={Kyrpto} height={'200px'} maxwidth={'200px'} alt={'Krypto Logo'}></img>
          <p>The idea behind this Krypto was to ultimately address the overwhelming number of crypto information sources out there and provide users with a smooth & seamless experience.</p>
         
        </div>
        <Button text={'Visit'} className='hireMe' onClick={()=>{window.open('https://github.com/JustinMul/Krypto')}}>Visit</Button>
      </div>

      <div className='contentContainer'>
        <div className="box">
          <h1 className='developer'>Calculator</h1>
          <img src={Calc} height={'200px'} maxwidth={'300px'} alt={'Calculator'}></img>
          <p>Project to mimic a calculator, with full funtionality ranging from multiplication and square roots to memory functions and history tracking. </p>
          
        </div>
        <Button text={'Visit'} className='hireMe' onClick={()=>{window.open('https://github.com/JustinMul/Calculator')}}>Visit</Button>
      </div>

      <div className='contentContainer'>
        <div className="box">
          <h1 className='developer'> Scheduler</h1>
          <img src={Scheduler} height={'200px'} maxwidthwidth={'300px'} alt={'Calendar'}></img>
          <p>Create an interview scheduler with React that allows users to book and cancel interviews.</p>
        </div>
        <Button text={'Visit'} className='hireMe' onClick={()=>{window.open('https://github.com/JustinMul/-scheduler')}}>Visit</Button>
      </div>
    </section>
  )
}

export default Projects 