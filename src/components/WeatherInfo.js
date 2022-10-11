import React from 'react'
import FormatedTime from './FormatedTime';
import WeatherIcon from './WeatherIcon';

import './WeatherInfo.css';

const WeatherInfo = (props) => {
  return (
    <div className='WeatherInfo'>
        <div className='current-local-time' >
            <FormatedTime  time={props.data.date}  timezone = {props.data.timezone}/>

        </div>
        <div className='current-location'>
            {props.data.city} , {props.data.country}
            <hr />
        </div>

        <div className='row main-container'>
            <div className='col-3 current-icon'>
                <WeatherIcon 
                code={props.data.icon}
                size={60}
                alt={props.data.description}
               
                />
      
            </div>
            
            <div className='col-6 text-center '>
                <h5 className='current-weather-description'>
                    {props.data.description}    
                </h5>
                <h6 className="current-temperature">
                    {""}
                    {Math.round(props.data.temperature)}
                    <span className="unit">°C</span>
                </h6>
                <h6 className='max-and-min-temperatures'>
                    <i className='fas fa-arrow-up'></i> &nbsp;
                    High:
                    <span className='current-max-temperature'>
                        <strong>
                            {Math.round(props.data.temp_max)} °
                        </strong>
                    </span>
                    <strong>&nbsp;&nbsp; |</strong> &nbsp;&nbsp;
                    <i className='fas fa-arrow-down'></i>&nbsp;
                    Low:
                    <span className='current-min-temerature'>
                        <strong>{Math.round(props.data.temp_min)} °</strong>
                    </span>
                </h6>
            </div>
            <div className='col-4 current-weather-details'>
                <ul>
                    <li className='real-feel'>
                        <i className='fas fa-thermometer-three-quarters'></i>
                        &nbsp; Real feel:
                        <strong>{Math.round(props.data.feels_like)} °</strong>
                    </li>
                    <li className='humidity'>
                        <i className='fas fa-tint'></i>
                        &nbsp; Humidity:
                        <strong>{Math.round(props.data.humidity)} %</strong>
                    </li>
                    <li className='wind'>
                        <i className='fas fa-wind'></i>
                        &nbsp; Wind:
                        <strong>{Math.round(props.data.wind)} km/h</strong>
                    </li>
                </ul>
            </div>

        </div>



    </div>
  )
}

export default WeatherInfo