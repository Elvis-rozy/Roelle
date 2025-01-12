import { useState } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Work from "./components/work";

import "./sass/style.scss";

function App() {  
  const [stat, setStat] = useState("hidden");

  var shadow = "";
  for(var i = 0; i < 10; i++){
    shadow+=(shadow ? "," : " ")+ i*1+"px " + i*1+"px 0 #bfbfbf";
  }

  return (
    <main className="home">
      <About/>
      <section>
        <h1 data-text="roelle" style={{textShadow: shadow}}>roelle</h1>
        <img className="hero" src="./media/hero.png" alt=""/>
        <Contact setStat={setStat}/>
      </section>
      <Work stat={stat} setStat={setStat}/>
    </main>
  );
}
export default App;