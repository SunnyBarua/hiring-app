import React from 'react';
import fakeData from '../../fakeData/users';
import { useState } from 'react';
import './employee.css'
import EmployeeInfo from '../EmployeeProfile/employeeInfo';
import Cart from '../Cart/cart';

const Employee = () => {
    const [employee,setEmployee]= useState(fakeData);
    const [cart,setCart]=useState([])

    const handleAddEmployee=(employee)=>{   
        const newCart=[...cart,employee];
        setCart(newCart);
    }
    return (
        <div className="main-container">
           <div className="employee-container">
               
               {
                employee.map(employee=><EmployeeInfo employee={employee}
                    handleAddEmployee={handleAddEmployee}></EmployeeInfo>)
               }
            
           </div>
           <div className="cart-container">
              <Cart cart={cart}></Cart>
        </div>

        </div>
    );
};

export default Employee;