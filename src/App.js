import React from "react";
import "./App.css";
import logo from "./asserts/logo.png";
import pic1 from "./asserts/2.png";
import award from "./asserts/1.png";
import pump from "./asserts/3.png";
import phone from "./asserts/phone.png";
import social from "./asserts/social.png";
import globe from "./asserts/globe.png";

function App() {
  const words = [
    "CHEMICALS",
    "PROCESS",
    "POWER",
    "WATER",
    "WASTE WATER",
    "OILS",
    "GAS",
    "PHARMA",
    "SUGARS",
    "DISTILLERIES",
    "PAPER",
    "PULP",
    "MARINE",
    "DEFENCE",
    "METAL",
    "MINING",
    "FOOD",
    "BEVERAGE",
    "PETROCHEMICAL",
    "REFINERIES",
    "SOLAR",
    "BUILDING HVAC",
    "FIRE FIGHTING",
    "AGRICULTURE",
    "RESIDENTIAL",
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
      </header>

      <div className="image-container">
        <div className="image-wrapper1">
          <img src={award} alt="Image 1" className="image" />
        </div>

        <div className="image-wrapper2">
          <h4>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h4>

          <div className="text">
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
          </div>

          <img src={pic1} alt="Image 2" className="image2" />

          <div className="bottom-text">
            Government of India has awarded the{" "}
            <span className="headd">
              "National Energy Conservation Award 2018"
            </span>
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </div>
        </div>
      </div>

      <p className="center-heading">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.{" "}
      </p>

      <div className="center-image">
        <img src={pump} alt="" className="pump-image" />

        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </p>
      </div>

      <hr className="red-line" />

      <div className="bottom-sec">
        <h5>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>


        <div className="bucket">
        <div className="word-list">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <span className="word">{word}</span>
              {index !== words.length - 1 && (
                <span className="separator"></span>
              )}
            </React.Fragment>
          ))}
        </div>
        </div>
      </div>

    <footer className="foot-sec">
      
      <div className="foot-cont">
        <img src={phone} alt="phone" className="foot-icons" />
        <p>Toll free 1800 200 1234</p>
      </div>

      <div className="foot-cont">
        <img src={social} alt="social" className="foot-icons" />
        <p>www.facebook.Com/cripumps•</p>
      </div>
      
      <div className="foot-cont">
        <img src={globe} alt="globe" className="foot-icons" />
        <p>www.crigroups.com</p>
      </div>

    </footer>

    </div>
  );
}

export default App;
