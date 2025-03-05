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
        <img className="d" src={project.stackImg1} alt=""/>
        <img className="e" src={project.stackImg2} alt=""/>
        <img className="f" src={project.stackImg3} alt=""/>
        <img className="g" src={project.stackImg4} alt=""/>
        <img className="h" src={project.stackImg5} alt=""/>
      </div>
      <div className="projectLinks">
        <a className="button i" href={project.codeLink}>View Github Code</a>
        <a className="button j" href={project.webLink}>View Live Website</a>
      </div>
    </div>
  )
}
export default WorkDetails;