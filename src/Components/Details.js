import React from 'react';

const Details = (props) =>{
   const renderDetails = props.daily.map((res, index)=>
   {
       return(
        <div className="item" key={index+res.dt}>
            <img className="ui avatar image" src={`http://openweathermap.org/img/wn/${res.weather[0].icon}.png`} alt={`${res.weather[0].description}`} />
            <div className="content">
                <div className="header">
                    {new Intl.DateTimeFormat('en-GB', { weekday: 'long', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(res.dt * 1000)},
                </div>
                <div className="description">Max temp: <b>{res.temp.max}C°</b></div>
                <div className="description">Min temp: <b>{res.temp.min}C°</b></div>
            </div>
        </div> 
       );
   });
    return(
        <div className="ui celled list">
        {renderDetails}
       </div>
    );
};
export default Details;