import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Typography from '@mui/material/Typography';

import './InfoBox.css'

export default function InfoBox({info}){
      const HOT_URL ="https://media.istockphoto.com/id/913079746/photo/road-panorama-on-sunny-spring-day.jpg?s=1024x1024&w=is&k=20&c=YLfojgpQjhB9NPGtDYH7t5kWfcIuQg4zK-z09IFx4MU=";
      const COLD_URL ="https://images.unsplash.com/photo-1714039656237-4c8bdd2ef26d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      const RAIN_URL ="https://media.istockphoto.com/id/1416175875/photo/rain.jpg?s=1024x1024&w=is&k=20&c=fxOxFznIsD0oZK4BxcYIZYY0yovR2GOgAEsqoEo71fE=";
      
      return(
            <div className="InfoBox">
                  <div className="cardContainer">
                  <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                        sx={{ height: 120 }}
                        image={info.humidity>80?RAIN_URL: info.temp>20?HOT_URL:COLD_URL}
                        title="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        {info.city}<>{" "}{info.humidity>80?<ThunderstormIcon/>: info.temp>20?<LightModeIcon/>:<AcUnitIcon/>}</>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"} >
                              <p>Temparature = {info.temp}&deg;C</p>
                              <p>Humidity = {info.humidity}%</p>
                              <p>Min Temp = {info.tempMin}</p>
                              <p>Max Temp = {info.tempMax}</p>
                              <p>The weather can be described as <b>{info.weather}</b> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                        </CardContent>
                  </Card>
                  </div>
            </div>
      )
}