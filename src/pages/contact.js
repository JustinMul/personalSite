import gmail from '../imgs/gmailSquare.png'
import linkedin from '../imgs/linkedinSquare.png'
import github from '../imgs/githubSquare.png'
import './contact.css'
const Contact =()=>{

  return(
    <div className='mainProjectContainer'>

      <div className='rowContainers'>
        <div className='gradient-border'>
          <img src={gmail} alt='Gmail Icon' className='contactIcons' onClick={()=>window.open('mailto:justinmulroney@gmail.com')}></img>
        </div> 
        <div>
          Email
        </div>
      </div>

      <div className='rowContainers'>
        <div className='gradient-border'>
          <img src={linkedin} alt='Linkedin Icon' className='contactIcons' onClick={()=> window.open('https://www.linkedin.com/in/justinmulroney/')}></img>
        </div>
        <div>
          Linkedin
        </div>
      </div>

      <div className='rowContainers'>
        <div className='gradient-border'>
        <img src={github} alt='Github Icon' className='contactIcons' onClick={()=>window.open('https://github.com/JustinMul')}></img> 
        </div>
        <div>
          Github
        </div>
      </div>
    </div>
    
  )
}

export default Contact