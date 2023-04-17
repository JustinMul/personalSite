import Button from "../components/Button"
import cakeMan from '../imgs/cakeMan.svg'
import './home.css' 

const Home = () =>{
  return(
    <div className='mainBody'>
      <div >
        <span className='nameIntro'>
          Hi, I'm a
        </span>
        <span className='developer' > Software Developer</span>
        <p className='textBody'>
            I have experience 
        </p>
        <Button text="Hire Me" className='hireMe'></Button>
      </div>

      <div >
        <img src={cakeMan} style={{ width: 600}} alt='Cake!' ></img>
      </div>
     </div>
  )
}

export default Home