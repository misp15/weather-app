import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Details from './Details';

const Result = (props) => {
  const [resultsDaily, setResultsDaily] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  
  useEffect(() =>{
    const WEATHER_KEY = process.env.REACT_APP_WEATHER_KEY;
    const search = async () => {
      await axios.get('https://api.openweathermap.org/data/2.5/onecall', {
          params: {
            lat: props.lat,
            lon: props.long,
            units: 'metric',
            exclude: 'minutely,hourly,alerts',
            appid: WEATHER_KEY,
          }
        }).then(function (response) {
          setResultsDaily(response.data.daily);
          setShowDetails(false); 
        }).catch(function (error) {
          setErrorMessage([error.response]);       
        });
    };
    search();
  }, [props]);
 
  return (  
    <div>
      <div className="ui middle aligned selection list">
        <div className="item" onClick={(e) => setShowDetails(true)}>
          <img className="ui avatar image" src={`http://openweathermap.org/img/wn/${props.all.weather[0].icon}.png`} alt="boohoo" />
          <div className="content">
            <div className="header">Current Weather for <b>{props.all.name}</b>:</div>
            <div className="description"><b>{new Intl.DateTimeFormat('en-GB', {month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(props.all.dt * 1000)}</b></div>
            <div className="description">{errorMessage.length === 1? errorMessage: " "}</div>
            <div className="description"><b>{props.all.main.temp}C°</b></div>
          </div>
          <i className="chevron down icon right floated"></i>
        </div>
      </div>
      {showDetails? <Details daily={resultsDaily} />: " "}
    </div>
   
  );
};

export default Result;


        
          
      
        
  
      
      