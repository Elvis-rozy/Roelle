import About from "./components/about";
import Contact from "./components/contact";
import Work from "./components/work";
import "./sass/style.scss";

function App() {

  var shadow = "";
  for(var i = 0; i < 10; i++){
    shadow+=(shadow ? "," : " ")+ i*1+"px " + i*1+"px 0 #bfbfbf";
  }

  return (
    <main className="home">
      <About/>
      <section>
        <h1 data-text="Elvis" style={{textShadow: shadow}}>Elvis</h1>
        <img className="hero" src="./media/hero.png" alt=""/>
        <Contact/>
      </section>
      <Work/>
    </main>
  );
}
export default App;