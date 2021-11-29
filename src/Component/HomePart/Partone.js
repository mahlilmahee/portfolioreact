import React from 'react';
import top from '../../images/top.png'
import './Partone.css'
const Partone = () => {
    return (
        <div className="fullbody">
           <div className="flex justify-evenly text-center items-center ">
           <div  className="text-center leading-10 topleft"> 
                <h1 > Hey , <span className="text-blue-500">I am Mahlil</span> <br />
                working with React, Node, <br />
                 and frontend skills.
                  <br /> Building me as a web developer</h1>
                
            </div>
          <img src={top} width="30%" alt="" />  
           </div>
        </div>
    );
};

export default Partone;