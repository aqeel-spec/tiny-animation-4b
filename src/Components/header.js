import React from 'react'
//images
import Lgo from './assests/lgo.png';
import Background from './assests/background.jpg';
import '../App.css';
//style using web animation
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";

const App = () => {
  const { keyframes, animationOptions } = bounce;
  const { ref } = useWebAnimations({
    keyframes,
    animationOptions: {
      ...animationOptions,
      delay: 100,
      duration: animationOptions.duration - 2
    }
  });



  return (
    <div className='container' style={{ backgroundImage: `url(${Background})` }}>
      <nav className='NavBar'>
        <img src={Lgo} className="lgo" ref={ref} />
        <div>
          <button className='btn'><span>Login</span></button>
          <button className='btn'><span>Register</span></button>
        </div>
      </nav>
      <div>
        <h2 className='scnd'>
          <div className='static-txt' >WELCOME TO</div>
          <div className='dynamic-txt' data-txt="ANIMATED WEBSITE">Animated Website</div>
          
        </h2>
      </div>
    </div>
      
  )
}
export default App;
