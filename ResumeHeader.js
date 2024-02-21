import React from "react";
import MyPic from './vestpiccrop.jpg'
import { FaPhoneAlt }from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ResumeHeader(){
    return(
      <div className='resumehead-div'>
        <div className='picture-div'>
        <img src={MyPic} alt='My pic'className='pic'></img>
        </div>
        <div className='name-div'>
          <h1  className='myname'><i>Jeya Surya.M</i></h1>
          <h4 className='description'>I am passionate in Designing , developing and have extra skills about Testing</h4>
        </div>
        <div className='contact'>
          <ol>
          <h3><FaPhoneAlt className='phone-icon1'/>Phone : 9042975096</h3>
          <h3><FaPhoneAlt className='phone-icon2'/>Alternate Ph.No : 90xxxxxx</h3>
          <h3><MdEmail className='email-icon'/>Email : jeyasurya2106@gmail.com</h3>
          </ol>
          
        </div>
      </div>
      
        );
  }
  export default ResumeHeader;