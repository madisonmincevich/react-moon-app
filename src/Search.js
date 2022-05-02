import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Results from "./Results";

export default function Search(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [moonData, setMoonData] = useState({});
  let [ready, setReady] = useState(false);

  function showData(response) {
    setMoonData({
      place: response.data.location.name,
      country: response.data.location.country,
      phase: response.data.astronomy.astro.moon_phase,
      rise: response.data.astronomy.astro.moonrise,
      set: response.data.astronomy.astro.moonset,
      light: response.data.astronomy.astro.moon_illumination,
    });
    setReady(true);
    console.log(response.data);
  }

  function Call() {
    const apiKey = "8913678c8d7a4e299d6214300221904";
    const apiUrl = `https://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=${city}`;
    axios.get(apiUrl).then(showData);
  }

  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Call();
  }

  if (ready) {
    return (
      <div className="search">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                className="search-form"
                placeholder="Search by city..."
                onChange={handleCityChange}
              ></input>
              <input type="submit" className="submit-btn"></input>
            </form>
            <Results data={moonData} />
          </div>
        </div>
      </div>
    );
  } else {
    Call();
    return <h1>Loading...</h1>;
  }
}
