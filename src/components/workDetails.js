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
      <p className="description">{project.mainDesc}</p>
      <p className="description">{project.mainDesc}</p>
      <div className="views">
        <img className="screenshot" src={project.desktopImg} alt={project.name}/>
        <img className="screenshot" src={project.mobileImg} alt={project.name}/>
      </div>
      <div className="techStack">
        <img src="./media/icons/figma.png" alt=""/>
        <img src="./media/icons/figma.png" alt=""/>
        <img src="./media/icons/figma.png" alt=""/>
      </div>
      <div className="projectLinks">
        <a className="button" href={project.codeLink}>View Github Code</a>
        <a className="button" href={project.webLink}>View Live Website</a>
      </div>
    </div>
  )
}
export default WorkDetails;