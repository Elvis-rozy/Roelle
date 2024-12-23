const TextCard=({claz, handleClick, headText, paragraph})=>{

  return(
    <div className={claz} onClick={handleClick}>
      <h3>{headText}</h3>
      <p>{paragraph}</p>
    </div>
  )
}

export default TextCard;