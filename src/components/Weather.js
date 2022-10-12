import React , { useState }from 'react';
import axios from 'axios';
import './Weather.css';
import WeatherInfo from './WeatherInfo';
import WeatherForcast from './WeatherForcast';
import Loader from 'react-loader-spinner';

const Weather = (props) => {
    const [city , setCity] = useState(props.defaultCity);
    let [weatherData, setWeatherData] = useState({ ready: false });


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        
        fetchData();
    }

  

    const handleResponse = (response)=> {
        setWeatherData({
            ready : true,
            city: response.data.name,
            coordinates : response.data.coord,
            country : response.data.sys.country,
            date : new Date(response.data.dt * 1000),
            description : response.data.weather[0].description,
            humidity : response.data.main.humidity,
            feels_like : response.data.main.feels_like,
            icon : response.data.weather[0].icon,
            temperature : response.data.main.temp,
            temp_max : response.data.main.temp_max,
            temp_min : response.data.main.temp_min,
            timezone : response.data.timezone,
            wind : response.data.wind.speed,

        });

    }
    

    const fetchData=  () => {
        let APIKey = "9da05d8e7133244bf51717640eda95b4";
        // forecast?q={city name}&appid={API key}
        
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

        //  const response = await  axios.get(apiUrl);
        // console.log("all data :" , response);
        axios.get(apiUrl).then(handleResponse)

    }

    function updateCity(event){
        setCity(event.target.value)
    }
if (weatherData.ready){

  return (
    <div className='WeatherApp-content'>
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <div className='col-9'>
                    <input 
                    type="search" 
                    className='form-control search-input'
                    placeholder='search city'
                    autoComplete='off'
                    value={city}
                    onChange={updateCity}
                    />
                </div>
                <div className='col-3 p-0'>
                    <button
                    className='btn btn-sm btn-primary-outline search-city-button'
                    id="search-city-button"
                    type="submit"
                    >
                        <i className='fas fa-search'></i>
                    </button>
                </div>
            </div>
        </form>
       {/* weather information shown  in 2 different components 
        WeatherInfo components
        WeatherForcastPreview */}

        <WeatherInfo data={weatherData} />
      <hr/>
        <WeatherForcast coordinates={weatherData.coordinates}/>
    </div>
  );
} else {
    fetchData();
    return(
        <Loader 
        type='threeDots'
        color='#d6f67e'
        height={80}
        width={80}
        timeout={3000}/>

    )
}
}

export default Weather