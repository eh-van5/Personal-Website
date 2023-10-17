import TopBar from "./components/TopBar";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home(){
  return(
    <>
      <div>
        <TopBar/>
        <About/>
        <Projects/>
      </div>
    </>
    
      
  );
}