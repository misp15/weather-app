import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Result from './Result';

const Search = () => {
  const [term, setTerm] = useState("Stockholm");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const [showResult, setShowResult] = useState(false);
  
  
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
      setErrorMessage([]);
      setShowResult(true);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const WEATHER_KEY = process.env.REACT_APP_WEATHER_KEY;
    const search = async () => {
      await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
        q: debouncedTerm,
        units: 'metric',
        appid: WEATHER_KEY,
        }
      }).then(function (response) {
        setResults([response.data]); 
      }).catch(function (error) {
        setErrorMessage([error.response.data]);       
      });        
    };
    search();
  }, [debouncedTerm]);

  return (
    <div className="ui grid">
      <div className="column">
        <div className="ui top attached  header">
          <div className="ui transparent icon input fullWidth">
            <input
              value={term}
              placeholder="Search..."
              onChange={(e) => setTerm(e.target.value)}
            />
            <i className="search icon"></i>
          </div>
          {errorMessage.length === 0? " ": errorMessage[0].message}
        </div>
        <div className="ui bottom attached segment">
          {showResult? <Result long={results[0].coord.lon} lat={results[0].coord.lat} all={results[0]}/>: "nothing!!"}
        </div>
      </div>
    </div>
  );
};

export default Search;
