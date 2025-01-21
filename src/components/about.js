import TypingAnimation from './global/typing.js';
import { info } from './objects.js';


const About =()=>{

  return (
    <aside className="about">
      <img src="../media/icons/logo.png" alt=""/>
      <h1>roelle</h1>
      <div>
        {info.map((deets)=>{
          return (
            <div key={deets.id} className="text">
              <h2>{deets.h2}</h2>
              <span>
                <h4>{deets.h4}</h4>
                <TypingAnimation p={deets.p}/>
              </span>
            </div>
          )
        })}

      </div>
    </aside>
  )
}
export default About;