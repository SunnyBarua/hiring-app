import React from 'react';
import './employeeInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const EmployeeInfo=(props)=> {
    const {img,name,sallery,position}=props.employee;
    console.log(props);
    
    return (
        <div className="employee">
            <div className="employee-img">
                <img src={img} alt=""/>
            </div>
            <div className="employee-details">
            <h3>{name}</h3>
            <h4>{position}</h4>
             <h4>${sallery}</h4>
             <button className="addbtn" onClick={()=>props.handleAddEmployee(props.employee)}> <FontAwesomeIcon className="ic" icon={faPlus} />Add to Hire</button>
            </div>
        </div>
    )
}

export default  EmployeeInfo
