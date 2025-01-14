const Contact =({setStat})=>{

  return (
    <div className="contactIcons">
      <a className="a" href="https://github.com/Elvis-rozy"><img src="../media/icons/github.png" alt="Github icon"/><p>Github</p></a>
      <span className="a" onClick={()=>{setStat("visible")}}><img src="../media/icons/gmail.png" alt="gmail icon"/><p>gmail</p></span>
      <a className="a" href="https://www.linkedin.com/in/elvis-oguoma"><img src="../media/icons/linkedin.png" alt="linkedin icon"/><p>linkedin</p></a>
      <a className="a" href="https://x.com/r0elle"><img src="../media/icons/X.svg" alt="twitter-X icon"/><p>Twitter-X</p></a>
    </div>
  )
}
export default Contact;