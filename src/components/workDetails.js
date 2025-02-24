//import { projectDetails } from './objects.js';

const WorkDetails =({project, stat, setStat})=>{

  return (
    <div className={`workDetails ${stat}`}>
      <img onClick={()=>{setStat("hidden")}} className="cancelBtn" src="./media/icons/x-lg.svg" alt="cancel button"/>
      <div className="head">
        <h1>{project.id}</h1>
        <h3>{project.name}</h3>
        <p>{project.year}</p>
      </div>
      <p className="description a">{project.mainDesc}</p>
      <div className="views">
        <img className="screenshot b" src={project.desktopImg} alt={project.name}/>
        <img className="screenshot c" src={project.mobileImg} alt={project.name}/>
      </div>
      <div className="techStack">
        <img className="d" src="./media/icons/figma.png" alt=""/>
        <img className="e" src="./media/icons/figma.png" alt=""/>
        <img className="f" src="./media/icons/figma.png" alt=""/>
      </div>
      <div className="projectLinks">
        <a className="button g" href={project.codeLink}>View Github Code</a>
        <a className="button h" href={project.webLink}>View Live Website</a>
      </div>
    </div>
  )
}
export default WorkDetails;