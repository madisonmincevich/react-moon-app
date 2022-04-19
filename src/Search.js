import React from "react";
import "./Search.css";

export default function Search(props) {
  let city = "London";

  function handleSubmit(event) {
    event.preventDefault();
    alert("Hello");
  }

  return (
    <div className="search">
      <div className="row">
        <div className="col-sm-12">
          <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Search by city..."></input>
            <input type="submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
}
