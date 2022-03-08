import React from 'react'
import Cntr from './assests/man.png';
import useWebAnimations, { fadeInUp } from '@wellyshen/use-web-animations';

const App = () => {

  const { keyframes, animationOptions } = fadeInUp;
  const { ref } = useWebAnimations({
    keyframes,
    animationOptions: {
      ...animationOptions,
      delay: 100,
      duration: animationOptions.duration - 2
    }
  });



  return (
    <div className='bd'>
      <pre className='para' >
        <img src={Cntr} className="center1" ref={ref} alt=''/>
        <p>
          With the Web Animations API, we can move interactive animations<br />
          from stylesheets to JavaScript, separating presentation<br />
          from behavior. The API was designed based on the concept<br />
          of the CSS Animations but there're still some differences<br />
          between them. I strongly recommend you to read the documentation<br />
          before we dive into this hook.
        </p>
        <h1>Playback Control</h1>
        <p className='p2'>
          The shortcoming with existing technologies was the lack of <br />
          playback control. The Web Animations API provides several <br />
          useful methods for controlling playback: play, pause, reverse,<br />
          cancel, finish, seek, control speed via the methods of the <br />
          Animation interface. This hook exposes the animation instance <br />
          for us to interact with animations, we can access it by the <br />
          getAnimation()return value<br /><br />
          <a href="https://panacloud.github.io/bootcamp-2020/#bootcamp-2020-bonus-extra-project-5-build-an-animated-react-website-which-follows-the-latest-trends-like-animated-illustrations">
            <button className='btn1'>Go to Bootcamp Page</button>
          </a>
        </p>
      </pre>

    </div>
  )
}

export default App;