import { contactIcons } from './objects.js';

const Contact =({setStat})=>{

  return (
    <div className="contactIcons">
      <span className="a" onClick={()=>{setStat("visible")}}><img src="../media/icons/gmail.png" alt="gmail icon"/><p>gmail</p></span>
      {contactIcons.map(icon=>(<a key={icon.id} className="a" href={icon.link}><img src={icon.imgSrc} alt={icon.imgAlt}/><p>{icon.name}</p></a>))}
    </div>
  )
}
export default Contact;