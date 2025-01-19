const PiCard=({claz, a, hover, click, imgsrc, imgalt, headText, paragraph})=>{
  return(
    <div className={`${claz} ${a}`} onMouseEnter={hover} onClick={click}>
      <img src={imgsrc} alt={imgalt}/>
      <div className="textBOX">
        <h3>{headText}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  )
}
export default PiCard;