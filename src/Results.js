import React from "react";
import MoonIcon from "./MoonIcon";
import "./Results.css";
import { WiMoonrise } from "react-icons/wi";
import { WiMoonset } from "react-icons/wi";

export default function Results(props) {
  return (
    <div>
      <h2>
        {props.data.place}, {props.data.country}
      </h2>
      <MoonIcon data={props.data.phase} />
      <h3>{props.data.phase}</h3>
      <h4>Illumination: {props.data.light}%</h4>
      <ul>
        <li className="me-4">
          <span className="fs-1">
            <WiMoonrise />
          </span>
          Moonrise: {props.data.rise}
        </li>
        <li>
          <span className="fs-1">
            <WiMoonset />
          </span>
          Moonset: {props.data.set}
        </li>
      </ul>
    </div>
  );
}
