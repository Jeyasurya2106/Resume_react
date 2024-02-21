import {FaBook } from "react-icons/fa";
function Education() {
    return(
      <div className='education-div'>
        <div className='eduname-div'>
        <h2><FaBook className='edu-icon'/>EDUCATION</h2>
        </div>
        <div className='sslc-total'>
          <h5 className='s2017'>2017</h5>
          <h3 className='sslc'>SSLC</h3>
          <h5 className='s92'>Completed in VMMHSS with 92%</h5>
        </div>
        <div className='hsc-total'>
          <h5 className='s2019'>2019</h5>
          <h3 className='hsc'>HSC</h3>
          <h5 className='s76'>Completed in VMMHSS with <b>76%</b></h5>
        </div>
        <div className='bba-total'>
          <h5 className='c2022'>2022</h5>
          <h3 className='bba'>BBA (Logistics & Shipping)</h3>
          <h5 className='c78'>Completed in Coimbatore Marine College with <b>78%</b></h5>
        </div>
      </div>
    );
  }
export default Education;  