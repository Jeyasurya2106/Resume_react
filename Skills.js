import { FaJava , FaHtml5 ,FaCss3Alt} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
function Skills(){
    return(
      <div className='skills-div'>
        <div className='skillsname-div'>
          <h2><GiSkills className='skill-icon'/>SKILLS</h2>
        </div>
        <h4 className='javaname'><FaJava className='java-icon'/>JAVA</h4>
        <div className='java-container'> 
         <div className='java  jprogress'> 
          80%
         </div>
       </div>
  
       <h4 className='htmlname'><FaHtml5  className='html-icon'/>HTML</h4>
        <div className='html-container'> 
         <div className='html  hprogress'> 
          90%
         </div>
       </div>
  
       
       <h4 className='cssname'><FaCss3Alt className='css-icon'/>CSS</h4>
        <div className='css-container'> 
         <div className='css  cprogress'> 
          85%
         </div>
       </div>
         
      </div>
      
    );
   }
   export default Skills;