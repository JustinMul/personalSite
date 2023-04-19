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
        <img src={aboutMe} className="timeMan" alt='TimeMan'></img>
      </div>

      <div className='rightBody'>
        <span className='developer'>
          ABOUT ME
        </span>
        <p className='textBody'>
          Originally I started out in the finance sector, but I transitioned to software development in 2022.
          I have a proven track record of delivering high-quality solutions that meet my clients' needs, which was showcased in my time at Ryna.
          When I'm not coding, you can find me playing board games or bouldering. Feel free to click the button down below and learn all about my skills and experience!
        </p>
        <div className="mobileContainer">
          <Button text="Download CV" className='hireMe' onClick={saveFile} ></Button>
        </div>
        
      </div>
     </div>
     
  )
}

export default AboutMe