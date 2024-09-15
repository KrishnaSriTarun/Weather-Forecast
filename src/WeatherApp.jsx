import { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'
import './WeatherApp.css'

export default function WeatherApp(){
      let [weatherInfo,setWeatherInfo] = useState(
            {
                  city:"India",
                  feelsLike: 21.54,
                  humidity: 49,
                  temp: 22,
                  tempMax: 22,
                  tempMin: 22,
                  weather: "broken clouds",
            }
      );
      let updateInfo=(newInfo)=>{
            setWeatherInfo(newInfo);
      }
      return(
            <div className='WeatherApp'>
                  {/* <h2>Weather App</h2> */}
                  <SearchBox updateInfo={updateInfo}/>
                  <InfoBox info={weatherInfo}/>
            </div>
      )
}