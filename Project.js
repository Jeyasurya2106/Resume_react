import {FaProjectDiagram,FaAnchor ,FaWarehouse }from "react-icons/fa";
function Project(){
    return(
      <div className='project-div'>
        <div className='projectname-div'>
          <h2><FaProjectDiagram className='project-icon'/>PROJECT</h2>
        </div>
        <div className='logisticname-div'>
          <h3><FaAnchor className='anchor-icon'/>Logistics & Shipping Management</h3>
        </div>
        <div className='logisticcontent-div'>
          <h5>Project Based upon How the Cargo move One Place to another
  What are the Bills are Required to Shipp the Cargo
  What are Documents Need in Customs Clearancde This all the things I have learned in this project</h5>
        </div>
        <div className='warehousename-div'>
          <h3><FaWarehouse className='warehouse-icon'/>Ware House Management :</h3>
        </div>
        <div className='warehousecontent-div'>
          <h5>
          Its About a warehouse capacity to store a cargo based upon the landDifferent ways of packing based upon the items in the cargo
  What are the bills are used in warehouse
  What are the pesticides are used to prevent a cargo in ware house
          </h5>
        </div>
      </div>
    );
  }
  export default Project;