import PiCard from "./components/piCard";
import "./sass/style.scss";
import { useState } from "react";


function App() {
  const [A, setA] = useState("active"), [B, setB] = useState("inactive"), [C, setC] = useState("inactive"), [D, setD] = useState("inactive"),  [E, setE] = useState("inactive"),  [F, setF] = useState("inactive"),  [G, setG] = useState("inactive");

  const handleVeil=(a, b, c, d, e, f, g)=>{
    if (a||b||c||d||e||f||g=== "active"){
      setA("inactive"); setB("inactive"); setC("inactive"); setD("inactive");
      setE("inactive"); setF("inactive"); setG("inactive");
    }
  }

  return (
    <main className="home flex">
      <header>
        <h1 className="intro">Elvis.</h1>
        <p className="abs greeting">Good Afternoon!</p>
        <PiCard claz="recentWork" imgsrc="../media/profile.jpg" imgalt="profile image" headText="3iftee" paragraph="some text about the project"/>
      </header>
      <section className="midSection">
        <div className="details">
          <aside className="about">
            <h2>About Me</h2>
            <p>more details</p>
            <p>more details</p>
            <img src="" alt=""/>
            <h4>Find me at</h4>
            <div className="contactIcons">
              <img src="../media/icons/instagram.png" alt=""/>
              <img src="../media/icons/github.png" alt=""/>
              <img src="../media/icons/gmail.png" alt=""/>
              <img src="../media/icons/linkedin.png" alt=""/>
              <img src="../media/icons/whatsapp.png" alt=""/>
            </div>
          </aside>
          <aside className="workDetails">
            <h2>Work</h2>

          </aside>
        </div>
        <article className="banner">
          <video autoPlay muted loop src="../media/vid2.mp4" type="video/mp4"></video>
          <div className="box">
            <span className="first"></span>
            <div className="row2">
              <span className="sp1"></span>
              <span className="sp2"></span>
            </div>
            <span></span>
            <div className="row4">
              <span className="sp1"></span>
              <span className="sp2"></span>
            </div>
            <span></span>
            <div className="row5">
              <span className="sp1"></span>
              <span className="sp2"></span>
            </div>
            <div className="row6">
              <span className="sp1"></span>
              <span className="sp2"></span>
            </div>
            <span></span>
          </div>
          <h1>in</h1>
        </article>
        <aside className="recentWork">
          <h2>Experiments</h2>
          <PiCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G); setA("active");}}
            claz={`project ${A}`} imgsrc="../media/profile.jpg" imgalt="profile image" headText="3iftee" paragraph="some text about the project"/>
          <PiCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G); setB("active");}}
            claz={`project ${B}`} imgsrc="../media/profile.jpg" imgalt="profile image" headText="3iftee" paragraph="some text about the project"/>
          <PiCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G); setC("active");}}
            claz={`project ${C}`} imgsrc="../media/profile.jpg" imgalt="profile image" headText="3iftee" paragraph="some text about the project"/>
          <PiCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G); setD("active");}}
            claz={`project ${D}`} imgsrc="../media/profile.jpg" imgalt="profile image" headText="3iftee" paragraph="some text about the project"/>
          <PiCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G); setE("active");}}
            claz={`project ${E}`} imgsrc="../media/profile.jpg" imgalt="profile image" headText="3iftee" paragraph="some text about the project"/>
          <PiCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G); setF("active");}}
            claz={`project ${F}`} imgsrc="../media/profile.jpg" imgalt="profile image" headText="3iftee" paragraph="some text about the project"/>
          <PiCard
            hover={()=>{handleVeil(A, B, C, D, E, F, G); setG("active");}}
            claz={`project ${G}`} imgsrc="../media/profile.jpg" imgalt="profile image" headText="3iftee" paragraph="some text about the project"/>
        </aside>
      </section>
      <footer>

      </footer>
    </main>
  );
}

export default App;