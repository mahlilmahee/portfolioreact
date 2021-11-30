import React from 'react';
import { useTransition } from 'react-transition-state';
import './About.css'
const About = () => {
    const [state, toggle] = useTransition({ timeout: 750, preEnter: true });
  return (
    <div id="aboutme" >
      <button className="button2" onClick={() => toggle()}> <h3>About Me</h3> <span>click</span> </button>
      <div className={`example ${state}  metoo`}  > <h2 className="text-green-500"> Hey, I am mahlil mohammed mahee . Working with the react elements to be a  Fullstack developer. I have more than half year of work experience. And still I am working to be better in this field. If you have any query feel free to contact with me.</h2> </div>
    </div>
  );
};

export default About;