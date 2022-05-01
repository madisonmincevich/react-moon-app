import { render } from "@testing-library/react";
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
  let ready = true;

  const mapping = [
    { name: "New Moon", component: <WiMoonAltNew /> },
    { name: "Full Moon", component: <WiMoonAltFull /> },
    { name: "Waxing Crescent", component: <WiMoonAltWaxingCrescent3 /> },
    { name: "Waning Crescent", component: <WiMoonAltWaningCrescent4 /> },
    { name: "First Quarter", component: <WiMoonAltFirstQuarter /> },
    { name: "Third Quarter", component: <WiMoonAltThirdQuarter /> },
    { name: "Waxing Gibbous", component: <WiMoonAltWaxingGibbous3 /> },
    { name: "Waning Gibbous", component: <WiMoonAltWaningGibbous3 /> },
  ];

  if (ready) {
    function takeComponent(state) {
      return state.name === props.data;
    }

    let lastObj = mapping.find(takeComponent);

    return <div className="moon">{lastObj.component}</div>;
  } else {
    return "Loading";
  }
}
