const Contact =({setStat})=>{

  return (
    <div className="contactIcons">
      <a href="https://github.com/Elvis-rozy"><img src="../media/icons/github.png" alt=""/><p>Github</p></a>
      <span onClick={()=>{setStat("visible")}}><img src="../media/icons/gmail.png" alt=""/><p>gmail</p></span>
      <a href="https://www.linkedin.com/in/elvis-oguoma"><img src="../media/icons/linkedin.png" alt=""/><p>linkedin</p></a>
    </div>
  )
}
export default Contact;