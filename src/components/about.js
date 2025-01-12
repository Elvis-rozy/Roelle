const info = [
  {
    id: 0,
    h2: "Hi",
    h4: "I'm Elvis",
    p: "A passionate frontend developer with 2 years of experience and love for crafting responsive, accessible, and visually stunning web applications."
  },
  {
    id: 1,
    h2: "My",
    h4: "Expertise",
    p: "I am proficient in HTML5, CSS3(Sass), JavaScript(ES6+), React, and React Router. Experienced with version control systems and collaborative workflows(Git and Github), and skilled in creating mobile-friendly, responsive designs that adopt the best practices for inclusive web experiencs."
  }
]

const About =()=>{
  return (
    <aside className="about">
      <img src="../media/icons/gmail.png" alt=""/>
      <div>
        {info.map((deets)=>{
          return (
            <div key={deets.id} className="text">
              <h2>{deets.h2}</h2>
              <span>
                <h4>{deets.h4}</h4>
                <p>{deets.p}</p>
              </span>
            </div>
          )
        })}
      </div>
    </aside>
  )
}
export default About;