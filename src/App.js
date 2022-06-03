
import './App.css';
import image from './imageInSrc.jpg';
import video1 from "./myVideo.mp4";
import "./style.css"

function App() {
  var name = "Touir Marwa";

  return (
   <div>
     <div style={{border : "solide 1px black",maxWidth : "100vw"}}>
        <h1 className={"title red"}>My name is {name}</h1>
        <br/>
        <img src={image} alt='not found' width="400px" height="400px"/>
        <br/>
        <img src="/imageInPublic.jpg" alt='not found' width="400px" height="400px"/>
      </div>
      <video width="320" height="240" controls >
          <source src={video1} type="video/mp4"/>
      </video>
   </div>
  );
}

export default App;
