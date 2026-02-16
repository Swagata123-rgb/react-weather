import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infobox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
  const INIT_URL="https://images.unsplash.com/photo-1515000339305-3cf05402b690?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let COLD_URL="https://images.unsplash.com/photo-1550077404-c00d89693129?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_URL="https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
    <div className="info-box">
      <div className="card">
      <Card className="weather-card">
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity > 80 ? RAIN_URL : (info.temp > 30 ? HOT_URL : COLD_URL)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity > 80 ? <ThunderstormIcon /> : (info.temp > 30 ? <SunnyIcon /> : <AcUnitIcon />)}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <p>Temperature: {info.temp}°C</p>
         <p>Humidity: {info.humidity}%</p>
         <p>Min Temp: {info.tempmin}°C</p>
         <p>Max Temp: {info.tempmax}°C</p>
         <p>The weather condition is <i>{info.weather}</i> and feels like {info.feelsLike}°C</p>
        </Typography>
      </CardContent>
    </Card></div>
    </div>
  );
}