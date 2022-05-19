import '../styles/Fitbit.css'

import React, { useState, useEffect } from "react";

import Watch from '../assets/Watch.png'
import Heart from '../assets/Heart.png'
import Steps from '../assets/Steps.png'
import Wave from '../assets/Wave.png'

const Fitbit = () => {
  const [pressure, setPressure] = useState("144/80");
  const [steps, setSteps] = useState(4019);
  const [bpm, setBpm] = useState(173);

  // BOOM MACHINE LEARNING:
  useEffect(() => {
    if (bpm > 160) alert("WARNING: At serious risk of heart attack")
  }, []);

  return (
    <div className="watch-wrapper">
      <img className="watch-img" src={Watch} alt="Loading..." />
      <img className="heart-img" src={Heart} alt="Loading..." />
      <img className="steps-img" src={Steps} alt="Loading..." />
      <img className="wave-img" src={Wave} alt="Loading..." />

      <p className="health-txt"> Health </p>
      <p className="time-txt"> 9:55 </p>
      <p className="pressure-txt"> {pressure} </p>
      <p className="pressure-unit"> mmHg </p>
      <p className="steps-txt"> {steps} </p>
      <p className="steps-unit"> steps </p>
      <p className="bpm-txt"> {bpm} </p>
      <p className="bpm-unit"> BPM </p>
    </div>
  )
}

export default Fitbit;
