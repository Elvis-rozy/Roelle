const PiCard=({claz, hover, handleClick, imgsrc, imgalt, headText, paragraph})=>{
  return(
    <>
      <div className={claz} onMouseEnter={hover} onClick={handleClick}>
        <img src={imgsrc} alt={imgalt}/>
        <div className="textBOX">
          <h3>{headText}</h3>
          <p>{paragraph}</p>
        </div>
      </div>
    </>
  )
}

export default PiCard;