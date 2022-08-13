import React, { useState } from "react";
import Note from "./Note";
import Input from "./Input";
import "./Task.css";

export default function Time() {
  const [notes, changeNotes] = useState([
    "Set up a telescope",
    "Count shooting stars",
    "Pack a picnic",
    "Spot UFOs",
    "Look for planets",
  ]);
  const [note, changeNote] = useState("");

  function handleRemove(id) {
    changeNotes(notes.filter((_, i) => i !== id));
  }

  return (
    <div className="task">
      <div className="container">
        <div className="row">
          <h1 className="text-start">Stargazing To Do List</h1>
          <div className="col-sm-12">
            {notes.map((element, index) => (
              <Note
                msg={element}
                id={index}
                key={index}
                class={index === notes.length - 1 ? "last" : "other"}
                remove={handleRemove}
              />
            ))}
            <Input
              notes={notes}
              changeNote={changeNote}
              changeNotes={changeNotes}
              note={note}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
