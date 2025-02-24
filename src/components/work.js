import PiCard from "./piCard";
import ContactForm from "./global/form";
import WorkDetails from "./workDetails.js";
import { useState } from "react";

let obj ={};

const Work =({stat, setStat, workStat, setWorkStat})=>{

  const [projects] = useState([
    {id: "O1", num: 1, name: "Codei", year: "Dec 2024", mainDesc: "With it's modern yet confident design, Codei was made for a web design and development agency that strives to build long-term relationships with their clients, helping them achieve their online goals and grow their businesses. Their services include: Website Design, Website Development, E-commerce Solutions, graphic design, Optimization, and Content Management Systems (CMS).", desktopImg: "./media/projectDetails/codei.png", mobileImg: "./media/projectDetails/codei-2.png", stackImg1: "./media/icons/figma.png", stackImg2: "./media/icons/figma.png", stackImg3: "./media/icons/figma.png", codeLink: "", webLink: "https://code-i.vercel.app", desc: "A Web design, development and optimization company's website", previewImg: "../media/projects/codei.png"},
    {id: "O2", num: 2, name: "Vvyd", year: "Feb 2025", mainDesc: "Vvyd was developed to be a source of endless Inspiration, through a vast and constantly updated collection of wallpapers, carefully curated to spark your imagination. Inspired by Pinterest, It allows you to easily find and save your favorite wallpapers, and is optimized for various devices and screen resolutions.", desktopImg: "./media/projectDetails/vvyd.png", mobileImg: "./media/projectDetails/vvyd-2.png", stackImg1: "./media/icons/figma.png", stackImg2: "./media/icons/figma.png", stackImg3: "./media/icons/figma.png", codeLink: "", webLink: "https://vvyd.vercel.app", desc: "A Wallpaper website", previewImg: "../media/projects/vvyd.png"},
    {id: "O3", num: 3, name: "Audivo", year: "jan 2025", mainDesc: "As a media streaming webapp with dual options, Audivo is your premier destination for streaming free music and videos which provides a vast library of high-quality content, while supporting artists and creators. It's features include: A Huge Music Library, Video Streaming, Content Discovery, and Offline Listening.", desktopImg: "./media/projectDetails/audivo.png", mobileImg: "./media/projectDetails/audivo-2.png", stackImg1: "./media/icons/figma.png", stackImg2: "./media/icons/figma.png", stackImg3: "./media/icons/figma.png", codeLink: "", webLink: "https://audivo.vercel.app", desc: "A Media streaming web-app (music and videos)", previewImg: "../media/projects/audivo.png"},
    {id: "O4", num: 4, name: "Candela", year: "dec 2024", mainDesc: "Construction at it's best is just art, and at Candela, they are dedicated to delivering high-quality projects on time and within budget. With a team of experts and stacked years of experience in the industry, they're committed to providing exceptional service to clients. The website features their services which include: General Contracting, Construction Management, Design-Build, Renovation and Remodeling, and Landscaping.", desktopImg: "./media/projectDetails/candela.png", mobileImg: "./media/projectDetails/candela-2.png", stackImg1: "./media/icons/figma.png", stackImg2: "./media/icons/figma.png", stackImg3: "./media/icons/figma.png", codeLink: "", webLink: "https://candela-tawny.vercel.app", desc: "A start-up construction company's website", previewImg: "../media/projects/candela.png"},
    {id: "O5", num: 5, name: "Roelle", year: "May 2024", mainDesc: "This of course is my portfolio website, written with React, CSS3 and SASS. It showcases my recent projects, both personal and group works that depict my level of experience and overall competence. I hope you find it interesting and decide to give me a call for a job placement or collaborative work.", desktopImg: "./media/projectDetails/roelle.png", mobileImg: "./media/projectDetails/roelle-2.png", stackImg1: "./media/icons/figma.png", stackImg2: "./media/icons/figma.png", stackImg3: "./media/icons/figma.png", codeLink: "", webLink: "https://roelle.vercel.app", desc: "My Portfolio website", previewImg: "../media/projects/roelle.png"},
    {id: "O6", num: 6, name: "BigBite", year: "Nov 2024", mainDesc: "project description", desktopImg: "./media/projectDetails/bigbite.png", mobileImg: "./media/projectDetails/bigbite-2.png", stackImg1: "./media/icons/figma.png", stackImg2: "./media/icons/figma.png", stackImg3: "./media/icons/figma.png", codeLink: "", webLink: "https://big-bite-self.vercel.app", desc: "A local-based Snack shop landing page", previewImg: "../media/projects/bigbite.png"},
    {id: "O7", num: 7, name: "Thriftee", year: "May 2024", mainDesc: "project description", desktopImg: "./media/projectDetails/3iftee.png", mobileImg: "./media/projectDetails/3iftee-2.png", stackImg1: "./media/icons/figma.png", stackImg2: "./media/icons/figma.png", stackImg3: "./media/icons/figma.png", codeLink: "", webLink: "", desc: "An online clothing store for Thrift wears", previewImg: "../media/projects/3iftee.png"},
    {id: "O8", num: 8, name: "FoodLENS", year: "Nov 2024", mainDesc: "project description", desktopImg: "./media/projectDetails/foodlens.png", mobileImg: "./media/projectDetails/foodlens-2.png", stackImg1: "./media/icons/figma.png", stackImg2: "./media/icons/figma.png", stackImg3: "./media/icons/figma.png", codeLink: "", webLink: "", desc: "Food Analysis website with limited nutritional information", previewImg: "../media/projects/foodlens.png"},
    {id: "O9", num: 9, name: "PixelMind", year: "Oct 2023", mainDesc: "project description", desktopImg: "./media/projectDetails/pixel.png", mobileImg: "./media/projectDetails/pixel-2.png", stackImg1: "./media/icons/figma.png", stackImg2: "./media/icons/figma.png", stackImg3: "./media/icons/figma.png", codeLink: "", webLink: "https://pixel-mind-sable.vercel.app", desc: "An AI image-generation website's landing page", previewImg: "../media/projects/pixelmind.png"},
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
            <PiCard id={project.num} key={project.id} title={project.name} paragraph={project.desc} claz={`project ${activeItemId === project? 'active' : ''}`} 
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