import { useState } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Work from "./components/work";
import "./sass/style.scss";
import {heroImg} from './components/objects.js'

function App() {  
  const [contactStat, setContactStat] = useState("hidden");
  const [workStat, setWorkStat] = useState("hidden");

  return (
    <main className="home">
      <About/>
      <section>
        <div className="heroContainer">{heroImg.map((hero)=>(<img key={hero} className="hero" src={hero} alt="hero"/>))}</div>
        <Contact setStat={setContactStat}/>
      </section>
      <Work workStat={workStat} setWorkStat={setWorkStat} stat={contactStat} setStat={setContactStat}/>
    </main>
  );
}
export default App;