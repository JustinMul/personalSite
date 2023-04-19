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
          I've developed, and maintained software applications in both Javascript and Python. 
          I specilize in web-development and have developed sites for dragons den winning companies (see projects). 
          Thanks for stopping by my site, and feel free to shoot me and email at Justinmulroney@gmail.com.

             
        </p>
        <Button text="Email Me" className='hireMe' onClick={()=>window.open('mailto:justinmulroney@gmail.com')}></Button>
      </div>

      <div >
        <img src={cakeMan} style={{ width: 600}} alt='Cake!' ></img>
      </div>
     </div>
  )
}

export default Home