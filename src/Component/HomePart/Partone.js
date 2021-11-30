import React from 'react';
import top from '../../images/top.png'
import './Partone.css'
import TextTransition, { presets } from "react-text-transition";
const TEXTS = [
    " Hey , Welcome",
    "To, My portfolio ",
    "I am Mahlil ",
    "Mohammed Mahee"
  ];

const Partone = () => {

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        3000 // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className="fullbody">
           <div className="flex justify-evenly text-center items-center ">
           <div  className="text-center leading-10 topleft"> 
                {/* <h1 > Hey , <span className="text-blue-500">I am Mahlil</span> <br />
                working with React, Node, <br />
                 and frontend skills.
                  <br /> Building me as a web developer</h1> */}
                  <h1 className="text-center">
      <TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.wobbly }
      />
       </h1>
                
            </div>
          <img src={top} width="30%" alt="" />  
           </div>
        </div>
    );
};

export default Partone;