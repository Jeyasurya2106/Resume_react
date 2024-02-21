import { SiFuturelearn , SiTestinglibrary } from "react-icons/si";
function Internship(){
    return(
      <div className='intern-div'>
        <div className='internname-div'>
          <h2><SiFuturelearn className='intern-icon'/>INTERNSHIP</h2>
        </div>
        <div className='interncontent-div'>
         <h5 className='i2023'>2023</h5>
         <h3 className='phn'>PHN Technology</h3>
         <h3><SiTestinglibrary className='testing-icon'/>Manual Test Engineer</h3>
         <h3> Creates test plans for both new and existing software. It is also the responsibility of the tester to plan for debugging the code. So what is manual QA testing? The essence of the specialty is to manually check software for errors, with their further correction</h3>
        </div>
      </div>
    );
  }

  export default Internship;