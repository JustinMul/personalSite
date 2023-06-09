import Button from "../components/Button"
import cakeMan from '../imgs/cakeMan.svg'
import './home.css' 

const Home = () =>{
  return(
    <div className='mainBody'>
      <div>
        <span className='nameIntro'>
          Hi, I'm
        </span>
        <span className='developer' > Justin Mulroney</span>
        <p className='textBody'>
          I've developed, and maintained software applications in both Javascript and Python. 
          I specialize in web-development and have built sites for Dragons Den winning companies (see projects). 
          Thanks for stopping by my site, and feel free to shoot me an email at Justinmulroney@gmail.com.

             
        </p>
        <div className="mobileContainer">
          <Button text="Email Me" className='hireMe' onClick={()=>window.open('mailto:justinmulroney@gmail.com')}></Button> 
        </div>
        
      </div>

      <div >
        <img src={cakeMan} className="cakeman" alt='Cake!' ></img>
      </div>
    </div>
  )
}

export default Home