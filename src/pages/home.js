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
          I have a keen eye for detail and a love for clean, efficient code. I specialize in Web Development,
          and have a proven track record of delivering high-quality solutions that meet my clients' needs. 
          When I'm not coding, you can find me playing board games or bouldering. Thanks for stopping by my site, and feel free to shoot me and email at Justinmulroney@gmail.com.
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