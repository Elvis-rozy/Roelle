//JSON
const projects = [
  {
    projectID : 1,
    projectName : "PixelMind",
    projectImageSrc : "media/images/ProjectsBG/3if-tee.png",
  },
  {
    projectID : 2,
    projectName : "PixelMind",
    projectImageSrc : "media/images/ProjectsBG/decor.png",
  },
  {
    projectID : 3,
    projectName : "PixelMind",
    projectImageSrc : "media/images/ProjectsBG/html-test.png",
  },
  {
    projectID : 4,
    projectName : "PixelMind",
    projectImageSrc : "media/images/ProjectsBG/html-test1.png",
  },
  {
    projectID : 5,
    projectName : "PixelMind",
    projectImageSrc : "media/images/ProjectsBG/jj-translate.png",
  },
  {
    projectID : 6,
    projectName : "PixelMind",
    projectImageSrc : "media/images/ProjectsBG/kiiqx.png",
  },
  {
    projectID : 7,
    projectName : "PixelMind",
    projectImageSrc : "media/images/ProjectsBG/popup.png",
  },
  {
    projectID : 8,
    projectName : "PixelMind",
    projectImageSrc : "media/images/ProjectsBG/Portfolio.png",
  },
  {
    projectID : 9,
    projectName : "PixelMind",
    projectImageSrc : "media/images/ProjectsBG/shopify.png",
  },
  {
    projectID : 10,
    projectName : "PixelMind",
    projectImageSrc : "media/images/ProjectsBG/snaq.png",
  },
  {
    projectID : 11,
    projectName : "PixelMind",
    projectImageSrc : "media/images/ProjectsBG/stylesConf.png",
  },
  {
    projectID : 12,
    projectName : "PixelMind",
    projectImageSrc : "media/images/ProjectsBG/techieBUZZ.png",
  },
  {
    projectID : 13,
    projectName : "PixelMind",
    projectImageSrc : "media/images/ProjectsBG/techieHub.png",
  },
  {
    projectID : 14,
    projectName : "PixelMind",
    projectImageSrc : "media/images/ProjectsBG/walls.png",
  }
];

const hamburgerBtn =  document.querySelector("#menu");
const hamburger =  document.querySelectorAll(".hamburger");
const menuBox = document.querySelector(".mobile-menu");
const links = document.querySelectorAll(".lnk");

links.forEach((link=> link.addEventListener("click", ()=>  {
  menuBox.classList.replace("nav-open", "nav-closed");
  hamburgerBtn.classList.remove("menu-open");
  hamburger.forEach(burger=>burger.style.background = ("#fff"));
  hamburgerBtn.style.background = ("black");
})));

hamburgerBtn.addEventListener("click", function(){
  if(menuBox.classList.contains("nav-open")){ //Close hamburger menu
    hamburgerBtn.classList.remove("menu-open");
    hamburgerBtn.style.background = ("black");
    hamburger.forEach(burger=>burger.style.background = ("#fff"));
    menuBox.classList.replace("nav-open", "nav-closed");
  }
  else { //Open hamburger menu
    hamburgerBtn.classList.add("menu-open");
    hamburgerBtn.style.background = ("#fff");
    hamburger.forEach(burger=>burger.style.background = ("black"));
    menuBox.classList.replace("nav-closed", "nav-open");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => entry.isIntersecting ? entry.target.classList.add("show") : entry.target.classList.remove("show"));
});
const hiddenElements = document.querySelectorAll(".hidden-left, .hidden-right");
hiddenElements.forEach(element => observer.observe(element));

const observ = new IntersectionObserver((entries) => {
  entries.forEach(entry => entry.isIntersecting ? entry.target.classList.add("dark") : entry.target.classList.remove("dark"));
});
const background = document.querySelectorAll(".light");
background.forEach(element => observ.observe(element));

const cancelOn = new IntersectionObserver((entries) => {
  entries.forEach(entry => !entry.isIntersecting ? hamburgerBtn.classList.replace("fadeOut", "fadeIn") : hamburgerBtn.classList.replace("fadeIn", "fadeOut"));
});
const visibleCancel = document.querySelector(".shown");
cancelOn.observe(visibleCancel);


let index = 0;
const workSection = document.querySelector(".work");
const workDetailsSection = document.querySelector(".workDetails");
const description = document.querySelector(".description");
const workHeading = document.querySelector(".job-details");
const workHeadingText = document.querySelector(".headingText");
const box = document.querySelector(".set1");
const moreDetailsBox = document.querySelector(".moredetails");

const cancelBtn = document.querySelector(".exitBtn");

const exitBtn = document.querySelector(".extBtn");
const viewAll = document.querySelector(".viewAll");
const allProjects = document.querySelector(".projects");

window.addEventListener("DOMContentLoaded", () => {
  displayWorks (projects);
  displayAllWork (projects);


  viewAll.addEventListener("click", ()=>{
    allProjects.classList.replace("hide", "flex");
  });
  exitBtn.addEventListener("click", ()=>{
    allProjects.classList.replace("flex", "hide");
  });

  Array.from(document.getElementsByClassName("workImage")).forEach((previewImage)=>{
    previewImage.addEventListener("click", (e) => {
      index = e.target.id;

      description.classList.replace("hide", "flex");
      workDetailsSection.classList.remove("hide");

      workSection.style.display = "block";
      workSection.classList.remove("overflow");
      previewImage.classList.add("inView");
      previewImage.style.height = 300 + "px";
      previewImage.style.width = 75 + "vw";
      workHeading.classList.add("headingstyle");
      workHeading.style.height = 50 + "%";
      box.classList.add("jstoverflow");
      box.classList.replace("flex", "hide");
      workHeadingText.classList.add("headingposition");
      workHeadingText.classList.replace("headerText", "activeText");
      cancelBtn.classList.remove("hide");

      cancelBtn.addEventListener("click", ()=> {
        cancelBtn.classList.add("hide");
        description.classList.replace("flex", "hide");
        workDetailsSection.classList.add("hide");

        workSection.style.display = "grid";
        workSection.classList.add("overflow");
        previewImage.classList.remove("inView");
        previewImage.classList.replace("rot", "orignal");
        previewImage.style.height = 200 + "px";
        previewImage.style.width = 400 + "px";
        box.style.height = 50 + "%";
        workHeadingText.classList.replace("activeText", "headerText");
        workHeadingText.classList.remove("headingposition");
        box.classList.remove("jstoverflow");
        workHeading.classList.remove("headingstyle");
        workHeading.style.height = 90 + "%";
      });

      const stillShowing = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            cancelBtn.classList.add("hide");
            description.classList.replace("flex", "hide");
            workDetailsSection.classList.add("hide");

            workSection.style.display = "grid";
            workSection.classList.add("overflow");
            previewImage.classList.remove("inView");
            previewImage.classList.replace("rot", "orignal");
            previewImage.style.height = 200 + "px";
            previewImage.style.width = 400 + "px";
            box.style.height = 50 + "%";
            workHeadingText.classList.replace("activeText", "headerText");
            workHeadingText.classList.remove("headingposition");
            box.classList.remove("jstoverflow");
            workHeading.classList.remove("headingstyle");
            workHeading.style.height = 90 + "%";
          }
          else {
            entry.target.classList.remove("dark");
          }
        });
      });
      const showing = document.querySelectorAll(".showing");
      showing.forEach(element => stillShowing.observe(element));
    });
  });
});
/* let arr = ["bob", "billy", "santa"];
let a = 0;
const welcomeText = document.querySelector(".lock");
setTimeout (()=> {
  while (a < arr.length) {
    welcomeText.innerHTML= arr[a];
  }
  a+=1;
}, 50);
 */
//setTimeout(function() {
//  welcomeText.innerHTML="tata",
//  welcomeText.innerHTML="lalaata";
//}, 50);


//The function that displays Projects section
function displayWorks (works) {
  let displayWorks = works.map((work) => {
    return `<img id="${work.projectID}" class="workPreview workImage orignal" src=${work.projectImageSrc} alt="">`;
  });
  displayWorks = displayWorks.join("");
  box.innerHTML = displayWorks;
}
//The function that displays All Projects section
function displayAllWork (works) {
  let displayWorks = works.map((work) => {
    return `<article class="unknown">
          <h3>Job name</h3>
          <img id="${work.projectID}" class="" src=${work.projectImageSrc} alt="">
        </article>`;
  });
  displayWorks = displayWorks.join("");
  moreDetailsBox.innerHTML = displayWorks;
}