import React from 'react';
import {useState} from 'react';
import './employeeInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faCheckCircle } from '@fortawesome/free-solid-svg-icons'



const EmployeeInfo=(props)=> {
    const {img,name,sallery,position}=props.employee;
     const [isadd, setIsadd] = useState(false);
     let addButton = <button onClick={() => {props.handleAddEmployee(props.employee); setIsadd(true)} } className="addbtn"><FontAwesomeIcon className="ic" icon={faPlus} /> Add Now</button>
    ;
    if(isadd){
        addButton=<button  className="added" disabled><FontAwesomeIcon className="ic" icon={faCheckCircle} /> Added</button>;
    }
    
    
    return (
        <div className="employee">
            <div className="employee-img">
                <img src={img} alt=""/>
            </div>
            <div className="employee-details">
            <h3>{name}</h3>
            <h4>{position}</h4>
             <h4>${sallery}</h4>
             {addButton}
            </div>
        </div>
    )
}

export default  EmployeeInfo
