import React , { useState }from 'react';
import axios from 'axios';

const Weather = () => {
    const [city , setCity] = useState('');
    let [weatherData, setWeatherData] = useState({ ready: false });


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        search();

    }

    // function handleResponse(response) {
    //     console.log(response);
    //     setWeatherData({
    //       ready: true,
    //       city: response.data.name,
    //       coordinates: response.data.coord,
    //       country: response.data.sys.country,
    //       date: new Date(response.data.dt * 1000),
    //       description: response.data.weather[0].description,
    //       humidity: response.data.main.humidity,
    //       feels_like:  response.data.main.feels_like,
    //       icon: response.data.weather[0].icon,
    //       temperature: response.data.main.temp,
    //       temp_max: response.data.main.temp_max,
    //       temp_min: response.data.main.temp_min,
    //       timezone: response.data.timezone,
    //       wind: response.data.wind.speed,
    //     });
    //   }
    

    const search= async () => {
        let APIKey = "9da05d8e7133244bf51717640eda95b4";
        // forecast?q={city name}&appid={API key}
        
        let apiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${APIKey}`;
         const response = await  axios.get(apiUrl);
        console.log("response.data is ",response.data.city.name)

       


    }

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
                    onChange={(e) => setCity(e.target.value)}
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


    </div>
  )
}

export default Weather