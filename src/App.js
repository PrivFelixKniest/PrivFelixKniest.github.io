import './App.css';
import React, { useState } from "react"
import backgroundVideo from "./recourses/videos/breath_ctrl_loop.mp4"
import Button from "./components/Button.jsx"
import TinyButton from './components/TinyButton';
// Icons
import soundcloudIcon from "./recourses/images/soundcloud_icon.png"
import spotifyIcon from "./recourses/images/spotify-512.png"
import instagramIcon from "./recourses/images/Insta.png"
import gumroadIcon from "./recourses/images/gumroad.png"
import discordIcon from "./recourses/images/discord-512.png"
import youtubeIcon from "./recourses/images/youtube.png"
import labelradarIcon from "./recourses/images/labelradar.png"
// Scan Logo
import scanLogo from "./recourses/images/scan_logo.png"


function App() {
  let mediaQuery = window.matchMedia('(min-width: 770px)')

  return (
    <div className="App">
      <div className="container" style={{overflow: "hidden"}}>
        <div className="videoWrapper" style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "black",
        }}>
          <video autoPlay loop muted id="backgroundVideo" style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "0",
          }}>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
        <div className="videoDimmer" style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: "0",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }} />
        <div className="topGradient" style={{
          backgroundImage:  "linear-gradient(black, rgba(0, 0, 0, 0))",
          height: "150px",
          width: "100vw",
          zIndex: "1",
          position: "absolute",
          top: "0px",
        }}>
          
        </div>
        <div className="bottomGradient" style={{
          backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0), black)",
          height: "150px",
          width: "100vw",
          zIndex: "1",
          position: "absolute",
          bottom: "0px",
        }}>
  
        </div>
        <div className="logo" style={{
          position: "absolute",
          top: "10px",
          margin: "0 auto",
          zIndex: "1",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
        }}>
          <img src={scanLogo} height="40px" width="40px" style={{ opacity: "0.7" }} alt="Scan Records Logo"/>
        </div>
        <div className="content" style={{ position: "absolute", left: "14%", bottom: "25%", marginRight: "100px"}}>
          <h1>Scan Records</h1>
          <p><i>Independant Label & Media Company</i></p>
          <Button text="CONTACT US" />  
        </div>
        <div className="linkBar" style={{

        }}>
          <TinyButton image={soundcloudIcon} link="https://soundcloud.com/scan-records" />
          <div style={{width: "40px", height: "40px"}}/>
          <TinyButton image={spotifyIcon} link="https://open.spotify.com/user/3156bnqzd2bg2rslm5qljmfmwndi?si=247c94d8f50c4d32" />
          <div style={{width: "40px", height: "40px"}}/>
          <TinyButton image={instagramIcon} link="https://www.instagram.com/scanrecs/" />
          <div style={{width: "40px", height: "40px"}}/>
          <TinyButton image={youtubeIcon} link="https://www.youtube.com/channel/UCJ8PN5U3dqZGO7A9kGDf33Q?sub_confirmation=1" />
          <div style={{width: "40px", height: "40px"}}/>
          <TinyButton image={discordIcon} link="https://discord.gg/frYEEjPDEd" />
          <div style={{width: "40px", height: "40px"}}/>
          <TinyButton image={gumroadIcon} link="https://scanrecords.gumroad.com" />
          <div style={{width: "40px", height: "40px"}}/>
          <TinyButton image={labelradarIcon} link="https://www.labelradar.com/labels/scanrecords/profile" />
        </div>
        <div className="emails" style={{
          position: "absolute",
          bottom: "10px",
          margin: "0 auto",
          zIndex: "1",
          left: "50%",
          transform: "translateX(-50%)",
        }}>
          <div style={{ color: "white", width: "400px", textAlign: "right"}}><b>SUBMIT:</b> <i>scan.records.release@gmail.com</i></div>
          <div style={{width: "40px"}}/>
          <div style={{width: "2px", hieght: "100%", backgroundColor: "white", borderRadius: "2px"}} />
          <div style={{width: "40px"}}/>
          <div style={{ color: "white", width: "400px", textAlign: "left"}}><b>CONTACT:</b> <i>scan.records.contact@gmail.com</i></div>
        </div>
        <div className="c" style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          margin: "0 auto",
          zIndex: "1",
          display: "flex",
          color: "white",
        }}>
          <div>© Scan Records UF / {new Date().getFullYear()}</div>
        </div>
      </div>  
    </div>
  );
}

export default App;
