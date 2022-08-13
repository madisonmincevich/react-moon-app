import React from "react";
import Checkbox from "@mui/material/Checkbox";
import "./Note.css";

export default function Note(props) {
  function removeNote() {
    props.remove(props.id);
  }

  return (
    <div className="container">
      <div className={`note ${props.class}`}>
        <div className="checkbox">
          <Checkbox checked={false} onClick={removeNote} />
        </div>
        <h3>{props.msg}</h3>
      </div>
    </div>
  );
}
