import React, { useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [con, setCon] = useState("");
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9a0c6342f6920368ab29b5c528e370a5`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
          console.log(res.data);
          setCon(true)
        })
        .catch((err) => {
          console.log(err);
        });
      setLocation("");
    }
  };

  return (
    <div className="bgi">
      <h1 className="app_name"> Weather App</h1>
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={ location}
          onKeyPress={searchLocation}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter City"
        />
      </div>
      
      {con && <div className="container">
        <div className="city">
          <div>
          <h1>City Name</h1>
          <h3>{data.name}, {data.sys.country} </h3>
          </div>
          <div>
            <h1  className="temp"> {Math.floor(data.main.feels_like - 273.15)}% </h1>
          </div>
        </div>
        <div className="weather">
          <div>
            <h2>Temperature</h2>
            <h3>{data.main.temp}.F</h3>
          </div>
          <div>
            <h2>Humidity</h2>
            <h3>{data.main.humidity} %</h3>
          </div>
          <div>
            <h2>Wind Speed</h2>
            <h3>{Math.floor(data.wind.speed)} KMpH</h3>
          </div>
        </div>
        {/* <p>Co-Ordinates : LONGITUDE( {data.coord.lon} ) LATITUDE( {data.coord.lat} )</p> */}
        <h2>CLOUDS: <span>{data.weather[0].description}</span></h2>
      </div>}

    
    </div>
    </div>
  );
}

export default App;