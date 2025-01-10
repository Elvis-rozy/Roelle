const PiCard=({link, claz, hover, handleClick, imgsrc, imgalt, headText, paragraph})=>{
  return(
    <a href={link} className={claz} onMouseEnter={hover} onClick={handleClick}>
      <img src={imgsrc} alt={imgalt}/>
      <div className="textBOX">
        <h3>{headText}</h3>
        <p>{paragraph}</p>
      </div>
    </a>
  )
}

export default PiCard;