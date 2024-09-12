import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
import Alert from '@mui/material/Alert';

export default function SearchBox({updateInfo}){
      let [city,setCity]=useState("")
      let [error,setError]=useState(false)
      const API_URL="https://api.openweathermap.org/data/2.5/weather";
      const API_KEY="a4c5f474ec0205c74c341546198977f1";
      let getWeatherInfo=async()=>{
            try{
                  let response=await fetch(`${API_URL}?q=${city}&APPID=${API_KEY}&units=metric&include=current`)
                  let jsonResponse=await response.json();
                  let result={
                        city:city,
                        temp:jsonResponse.main.temp,
                        tempMin:jsonResponse.main.temp_min,
                        tempMax:jsonResponse.main.temp_max,
                        humidity:jsonResponse.main.humidity,
                        feelsLike:jsonResponse.main.feels_like,
                        weather:jsonResponse.weather[0].description,
                  };
                  console.log(result);
                  return result;
            }
            catch(error){
                  throw error;
            }
      }
      let handleChange=(event)=>{
            setCity(event.target.value);
            setError(false);
      }
      let handleSubmit= async(event)=>{
            try{
                  event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo)
            }
            catch(error){
                  setError(true)
            }
      }
      return(
            <div className="SearchBox">
                  <form onSubmit={handleSubmit}>
                        <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
                        <br></br><br></br>
                        <Button variant="contained" type='submit'>Search</Button><br></br><br></br>
                        {error && <Alert severity="error">No such place exists</Alert>}
                  </form>
            </div>
      )
}