import PiCard from "./piCard";
import { useState } from "react";
const Work = () =>{
  /*
  const [projects, setProjects] = useState([
    {id: "01", num: 1, name: "3iftee", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/projects/3iftee.png"},
    {id: "02", num: 2, name: "bigBite", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/projects/bigbite.png"},
    {id: "03", num: 3, name: "Decor", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/projects/decor.png"},
    {id: "04", num: 4, name: "FoodLENS", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/projects/foodlens.png"},
    {id: "05", num: 5, name: "Gears", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/projects/gears.png"},
    {id: "06", num: 6, name: "Kiqx", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/projects/kiqx.png"},
    {id: "07", num: 7, name: "PixelMind", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/projects/pixelmind.png"},
    {id: "08", num: 8, name: "Tuneflix", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/projects/tuneflix.png"},
    {id: "09", num: 9, name: "Walls", desc1: "bla bla bla", desc2: "bla bla bla", collab1: "img", collab2: "img", previewImg: "../media/projects/walls.png"},
  ]);

  const [clicked, setClicked] = useState('01');
  const [activeItemId, setActiveItemId] = useState('active');
  const [bi, setBi] = useState('active');
  const handleMouseOver = (itemId) => {
    setActiveItemId(itemId);
    setBi('inactive');
  }
  */

  const [A, setA] = useState("active"), [B, setB] = useState("inactive"), [C, setC] = useState("inactive");
  const [D, setD] = useState("inactive"), [E, setE] = useState("inactive"), [F, setF] = useState("inactive");
  const [G, setG] = useState("inactive"), [h, setH] = useState("inactive"), [i, setI] = useState("inactive");

  const handleVeil=(a, b, c, d, e, f, g, h, i)=>{
    if (a||b||c||d||e||f||g|h|i=== "active"){
      setA("inactive"); setB("inactive"); setC("inactive"); setD("inactive");
      setE("inactive"); setF("inactive"); setG("inactive"); setH("inactive");
      setI("inactive");
    }
  }

  return (
    <aside className="recentWork">
      <h2>Portfolio</h2>
      {/*
      {projects.map((project)=>{
        return (
          <PiCard key={project.id} title={project.name} paragraph={project.desc1} hover={()=> handleMouseOver(project)} a={bi} claz={`project ${activeItemId === project? 'active' : ''}`}
          handleClick={()=>{setClicked(1);}} imgsrc={project.previewImg} imgalt="profile image" headText={project.name}/>
        )
      })}*/}
      <main className="projectList">
        <PiCard 
          hover={()=>{handleVeil(A, B, C, D, E, F, G, h, i); setA("active");}} link=""
          claz={`project ${A}`} imgsrc="../media/projects/3iftee.png" imgalt="profile image" headText="thriftee" paragraph="some text about the project"/>
        <PiCard 
          hover={()=>{handleVeil(A, B, C, D, E, F, G, h, i); setB("active");}} link="https://big-bite-self.vercel.app"
          claz={`project ${B}`} imgsrc="../media/projects/bigbite.png" imgalt="profile image" headText="Bigbite" paragraph="some text about the project"/>
        <PiCard 
          hover={()=>{handleVeil(A, B, C, D, E, F, G, h, i); setC("active");}} link="https://code-i.vercel.app"
          claz={`project ${C}`} imgsrc="../media/projects/codei.png" imgalt="profile image" headText="Codei" paragraph="some text about the project"/>
        <PiCard
          hover={()=>{handleVeil(A, B, C, D, E, F, G, h, i); setD("active");}} link=""
          claz={`project ${D}`} imgsrc="../media/projects/foodlens.png" imgalt="profile image" headText="Foodlens" paragraph="some text about the project"/>
        <PiCard
          hover={()=>{handleVeil(A, B, C, D, E, F, G, h, i); setE("active");}} link="https://candela-tawny.vercel.app"
          claz={`project ${E}`} imgsrc="../media/projects/candela.png" imgalt="profile image" headText="Candela" paragraph="some text about the project"/>
        <PiCard
          hover={()=>{handleVeil(A, B, C, D, E, F, G, h, i); setF("active");}} link="https://kiqx.vercel.app"
          claz={`project ${F}`} imgsrc="../media/projects/kiqx.png" imgalt="profile image" headText="Kiqx" paragraph="some text about the project"/>
        <PiCard
          hover={()=>{handleVeil(A, B, C, D, E, F, G, h, i); setG("active");}} link="https://pixel-mind-sable.vercel.app"
          claz={`project ${G}`} imgsrc="../media/projects/pixelmind.png" imgalt="profile image" headText="Pixelmind" paragraph="some text about the project"/>
        <PiCard
          hover={()=>{handleVeil(A, B, C, D, E, F, G, h, i); setH("active");}} link="https://tuneflix-ruby.vercel.app"
          claz={`project ${h}`} imgsrc="../media/projects/tuneflix.png" imgalt="profile image" headText="Tuneflix" paragraph="some text about the project"/>
        <PiCard
          hover={()=>{handleVeil(A, B, C, D, E, F, G, h, i); setI("active");}} link="https://walls-neon.vercel.app"
          claz={`project ${i}`} imgsrc="../media/projects/walls.png" imgalt="profile image" headText="Walls" paragraph="some text about the project"/>
      </main>
    </aside>
  )
}
export default Work;