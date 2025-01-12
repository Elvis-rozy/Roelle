const PiCard=({link, claz, hover, imgsrc, imgalt, headText, paragraph})=>{
  return(
    <a href={link} className={claz} onMouseEnter={hover}>
      <img src={imgsrc} alt={imgalt}/>
      <div className="textBOX">
        <h3>{headText}</h3>
        <p>{paragraph}</p>
      </div>
    </a>
  )
}
export default PiCard;