import React , {useState , useEffect} from 'react';
import WeatherForecastDay from './WeatherForecastDay';
import axios from 'axios';
import Loader from 'react-loader-spinner';

const WeatherForcast = (props) => {
    const [loaded , setLoaded] = useState(false);
    const [forecast,setForecast]=useState(null);

    useEffect(() => {
        setLoaded(false);
    },[props.coordinates]);

//    const groupDays = data => {
//         return(data.reduce((list,item) => {
//             const forecastDate = item.dt_txt.substr(0,10);
//             list[forecastDate]= list[forecastDate] || [];
//             list[forecastDate].push(item);
//             return list;
            
//         },{}));
//     };



    const handleResponse = (response) => {
       
        setForecast(response.data.daily)
        setLoaded(true);
        console.log(forecast);

    }

    // const fetchForecastData = async () =>{

    //     let apiKey="9da05d8e7133244bf51717640eda95b4";
    //     let lat = props.coordinates.lat;
    //     let lon = props.coordinates.lon;
    //     let units= "metric";
    //     // let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    //     // let apiUrl=`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}` ;
    //     // let apiUrl=`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    //    let apiUrl= `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    //     const response=  await axios.get(apiUrl);
    //    console.log("hello",response.data);
    // }




    if (loaded) {
        return(
            <div className='WeatherForecast'>
                <div className='WeatherForecast-header'>
                    Next 5 Days
                </div>
                {/* <hr /> */}
                <div className='row'>
                    {forecast.map((dailyForecast , index)=> {
                        if(index < 6 && index > 0){
                            return(
                                <div className='col' key={index}>
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            );
                            
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        );
    } else {
        // console.log("else");

        let apiKey="9da05d8e7133244bf51717640eda95b4";
      
        let lon = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let units= "metric";
        
        // let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=44.34&lon=10.99&appid=9da05d8e7133244bf51717640eda95b4&units=metric`;
        let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${lon}&appid=${apiKey}&units=${units}`;
        // let apiUrl= `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${lon}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse)
        // console.log(props.coordinates);
        // console.log(props.coordinates.lat);
        // console.log(props.coordinates.lon);
        

        // fetchForecastData();

        
        return (
         
            <Loader 
            type='threeDots'
            color='#d6f67e'
            height={80}
            width={80}
            timeout={3000}/>
        )



    }

 
}

export default WeatherForcast