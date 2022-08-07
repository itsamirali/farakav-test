import ReactHlsPlayer from "react-hls-player/dist";
import "./App.css";
import Register from "./Component/Register";
import videoSrc from "./Static/master.m3u8";

function App() {
  return (
    <div className="appMainContainer">
      <div className="videoContainer">
        <div className="videoContainerOuter"></div>
        <ReactHlsPlayer
          src={videoSrc}
          autoPlay={true}
          muted
          controls={false}
        />
      </div>
      <Register />
    </div>
  );
}

export default App;
