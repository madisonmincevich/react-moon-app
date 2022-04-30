import React, { useState } from "react";
import { WiMoonAltNew } from "react-icons/wi";
import { WiMoonAltFull } from "react-icons/wi";
import { WiMoonAltWaxingCrescent3 } from "react-icons/wi";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { WiMoonAltWaxingGibbous3 } from "react-icons/wi";
import { WiMoonAltWaningGibbous3 } from "react-icons/wi";
import "./MoonIcon.css";

export default function MoonIcon(props) {
  let ready = false;

  const codeMapping = {
    "New Moon": WiMoonAltNew,
    "Full Moon": WiMoonAltFull,
    "Waxing Crescent": WiMoonAltWaxingCrescent3,
    "Waning Crescent": WiMoonAltWaningCrescent4,
    "First Quarter": WiMoonAltFirstQuarter,
    "Third Quarter": WiMoonAltThirdQuarter,
    "Waxing Gibbous": WiMoonAltWaxingGibbous3,
    "Waning Gibbous": WiMoonAltWaningGibbous3,
  };

  if (ready) {
    return (
      <div className="moon">
        <WiMoonAltNew value={codeMapping[props.data]} />
      </div>
    );
  } else {
    return "Loading";
  }
}
