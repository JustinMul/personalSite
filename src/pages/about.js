import Button from "../components/Button"
import aboutMe from '../imgs/aboutMe.svg'
import './about.css'
import { saveAs } from "file-saver";
import Resume from '../imgs/ResumeJustin.pdf'

const AboutMe = () =>{
  const saveFile = () => {
    saveAs(
      Resume,
      "JustinMulroneyResume.pdf"
    );
  };

  return(
    <div className='aboutMainBody'>
     
      <div className="leftBody">
        <img src={aboutMe} style={{ width: 600}} alt='TimeMan'></img>
      </div>

      <div className='rightBody'>
        <span className='developer'>
          ABOUT ME
        </span>
        <p className='textBody'>
          I have a keen eye for detail and a love for clean, efficient code. I specialize in Web Development,
          and have a proven track record of delivering high-quality solutions that meet my clients' needs. 
          When I'm not coding, you can find me playing board games or bouldering. Thanks for stopping by my site, and feel free to shoot me and email at Justinmulroney@gmail.com.
        </p>
        <Button text="Download CV" className='hireMe' onClick={saveFile} ></Button>
      </div>
     </div>
     
  )
}

export default AboutMe