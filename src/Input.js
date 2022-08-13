import React from "react";
import "./Input.css";

export default function Input(props) {
  function handleSubmit(e) {
    e.preventDefault();
    if (props.note === "") {
      props.changeNote("");
    } else {
      props.changeNotes([...props.notes, props.note]);
      props.changeNote("");
    }
  }

  function handleChange(e) {
    var value = e.target.value;
    props.changeNote(value);
  }

  return (
    <div className="input pt-5">
      <div className="col-sm-12">
        <form action="/" onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            id="note"
            placeholder="Enter a note"
            onChange={handleChange}
            value={props.note}
          />
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}
