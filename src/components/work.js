import PiCard from "./piCard";
import ContactForm from "./global/form";
import WorkDetails from "./workDetails.js";
import { useState } from "react";

let obj ={};

const Work =({stat, setStat, workStat, setWorkStat})=>{

  const [projects] = useState([
    {id: "O1", num: 1, name: "Thriftee", year: "May 2024", mainDesc: "project description", desktopImg: "./media/projectDetails/3iftee.png", mobileImg: "./media/projectDetails/3iftee-2.png", stackImg1: "./media/icons/figma.png", stackImg2: "./media/icons/figma.png", stackImg3: "./media/icons/figma.png", codeLink: "", webLink: "", desc: "An online clothing store for Thrift wears", previewImg: "../media/projects/3iftee.png"},
    {id: "O2", num: 2, name: "BigBite", year: "Nov 2024", mainDesc: "project description", desktopImg: "./media/projectDetails/bigbite.png", mobileImg: "./media/projectDetails/bigbite-2.png", stackImg1: "./media/icons/figma.png", stackImg2: "./media/icons/figma.png", stackImg3: "./media/icons/figma.png", codeLink: "", webLink: "https://big-bite-self.vercel.app", desc: "A local-based Snack shop landing page", previewImg: "../media/projects/bigbite.png"},
    {id: "O3", num: 3, name: "Codei", year: "Dec 2024", mainDesc: "project description", desktopImg: "./media/projectDetails/codei.png", mobileImg: "./media/projectDetails/codei-2.png", stackImg1: "./media/icons/figma.png", stackImg2: "./media/icons/figma.png", stackImg3: "./media/icons/figma.png", codeLink: "", webLink: "https://code-i.vercel.app", desc: "A Web design, development and code optimization company's website", previewImg: "../media/projects/codei.png"},
    {id: "O4", num: 4, name: "FoodLENS", year: "Nov 2024", mainDesc: "project description", desktopImg: "./media/projectDetails/foodlens.png", mobileImg: "./media/projectDetails/foodlens-2.png", stackImg1: "./media/icons/figma.png", stackImg2: "./media/icons/figma.png", stackImg3: "./media/icons/figma.png", codeLink: "", webLink: "", desc: "Food Analysis website with limited nutritional information", previewImg: "../media/projects/foodlens.png"},
    {id: "O5", num: 5, name: "Candela", year: "Jan 2025", mainDesc: "project description", desktopImg: "./media/projectDetails/candela.png", mobileImg: "./media/projectDetails/candela-2.png", stackImg1: "./media/icons/figma.png", stackImg2: "./media/icons/figma.png", stackImg3: "./media/icons/figma.png", codeLink: "", webLink: "https://candela-tawny.vercel.app", desc: "A start-up construction company's website", previewImg: "../media/projects/candela.png"},
    {id: "O6", num: 6, name: "Roelle", year: "May 2024", mainDesc: "project description", desktopImg: "./media/projectDetails/roelle.png", mobileImg: "./media/projectDetails/roelle-2.png", stackImg1: "./media/icons/figma.png", stackImg2: "./media/icons/figma.png", stackImg3: "./media/icons/figma.png", codeLink: "", webLink: "https://roelle.vercel.app", desc: "A frontend Developer's Portfolio website", previewImg: "../media/projects/roelle.png"},
    {id: "O7", num: 7, name: "PixelMind", year: "Oct 2023", mainDesc: "project description", desktopImg: "./media/projectDetails/pixel.png", mobileImg: "./media/projectDetails/pixel-2.png", stackImg1: "./media/icons/figma.png", stackImg2: "./media/icons/figma.png", stackImg3: "./media/icons/figma.png", codeLink: "", webLink: "https://pixel-mind-sable.vercel.app", desc: "An AI image-generation website's landing page", previewImg: "../media/projects/pixelmind.png"},
    {id: "O8", num: 8, name: "Tuneflix", year: "Feb 2024", mainDesc: "project description", desktopImg: "./media/projectDetails/tuneflix.png", mobileImg: "./media/projectDetails/tuneflix-2.png", stackImg1: "./media/icons/figma.png", stackImg2: "./media/icons/figma.png", stackImg3: "./media/icons/figma.png", codeLink: "", webLink: "https://tuneflix-ruby.vercel.app", desc: "A Media streaming web-app (music and videos)", previewImg: "../media/projects/tuneflix.png"},
    {id: "O9", num: 9, name: "Walls", year: "June 2024", mainDesc: "project description", desktopImg: "./media/projectDetails/walls.png", mobileImg: "./media/projectDetails/walls-2.png", stackImg1: "./media/icons/figma.png", stackImg2: "./media/icons/figma.png", stackImg3: "./media/icons/figma.png", codeLink: "", webLink: "https://walls-neon.vercel.app", desc: "A Wallpaper website", previewImg: "../media/projects/walls.png"},
  ]);

  const [activeItemId, setActiveItemId] = useState('active');
  const [bi, setBi] = useState('active');
  const handleMouseOver = (itemId) => {
    setActiveItemId(itemId); setBi('inactive');
  }

  return (
    <aside className="recentWork">
      <h2>Portfolio</h2>
      <main className="projectList">
        {projects.map((project)=>{
          return (
            <PiCard key={project.id} title={project.name} paragraph={project.desc} claz={`project ${activeItemId === project? 'active' : ''}`} 
            hover={()=> handleMouseOver(project)} a={bi} imgsrc={project.previewImg} imgalt="profile image" headText={project.name} click={()=>{
              obj = project;
              setWorkStat();
              return project;
            }}/>
          )
        })}
      <WorkDetails project={obj} stat={workStat} setStat={setWorkStat}/>
      </main>
      <ContactForm stat={stat} setStat={setStat}/>
    </aside>
  )
}
export default Work;