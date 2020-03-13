import React from 'react';
import {useState} from 'react';
import './cart.css'

const Cart=(props)=> {
    const cart=props.cart;
    const name=cart.map(name=>name.name);
    
   
    


    const total=cart.reduce((total,usd)=> 
        total+parseFloat(usd.sallery),0)
       
        return (
        <div className="cart">
            <h4>Hiring Summary</h4>
            <hr></hr>
         <h3 className="margin">Total Hiring: {cart.length}</h3>
        <h3 className="margin">Total Cost: ${total}</h3>  
        <h3 className="margin">Added:<hr></hr>{name+'\n'}</h3> 
        
        </div>
    )
}

export default Cart
