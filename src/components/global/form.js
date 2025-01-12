const ContactForm =({stat, setStat})=>{

  return (
    <form className={`form ${stat}`} id="form" action="https://formsubmit.co/elvisrozy52@gmail.com" method="POST">
      <img onClick={()=>{setStat("hidden")}} className="cancelBtn" src="./media/icons/x-lg.svg" alt="cancel button"/>
      <input type="text" name="name" required placeholder="Name"/>
      <input type="email" name="email" required placeholder="Email Address"/>
      <input type="text" name="subject" required placeholder="Subject"/>
      <textarea name="message" required placeholder="Message"></textarea>
      <input type="hidden" name="_captcha" value="false"/>
      {/*       <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input>   put your own email send confirmation page link here*/}
      <button type="submit" className="button">Send</button>
    </form>
  )
}
export default ContactForm;