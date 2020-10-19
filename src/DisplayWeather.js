import React from 'react'
import "./DisplayWeather.css";
import "./weather-icons/css/weather-icons.css";

function DisplayWeather(props) {

    const {data} = props;
    var image = '';
    // const iconUrl = "http://openweathermap.org/img/wn/" + `${data.cod!=404 ? data.weather[0].icon : null}` + ".png";
    if(data.weather[0].main === "Thunderstorm"){
        image="wi-thunderstorm"
    }
    else if(data.weather[0].main === "Drizzle"){
        image="wi-sleet"
    }
    else if(data.weather[0].main === "Rain"){
        image="wi-storm-showers"
    }
    else if(data.weather[0].main === "Snow"){
        image="wi-snow"
    }
    else if(data.weather[0].main === "Atmosphere"){
        image="wi-fog"
    }
    else if(data.weather[0].main === "Clear"){
        image="wi-day-sunny"
    }
    else if(data.weather[0].main === "Clouds"){
        image="wi-day-fog"
    }

    return (
        <div className="main">
            {
                data.cod !=404 ? 
                <div className="container">
                <span className="heading">
                    {data.name}, {data.sys.country}. Weather
                </span>
                <br></br>
                <span className="time">
                    As of {new Date().toLocaleTimeString()}
                </span>
                <h1>{Math.floor(data.main.temp-273.15)}
                    <sup>o</sup>
                </h1>
                {/* <img className="weather" src={iconUrl} /> */}
                <h5>
                <i className={`wi ${image} display-1`} />
                </h5>
                <div>
                    <div className="table"> 
                        <table>
                            <tr>
                                <td>
                                    <h4>High/low&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                                    
                                </td>
                                <td>
                                    <span>
                                        {Math.floor(data.main.temp_max-273.15)} /{" "}
                                        {Math.floor(data.main.temp_min-273.15)} <sup>o</sup>

                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Humidity&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                                </td>
                                <td>
                                    <span>
                                        {data.main.humidity} %
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Pressure&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                                </td>
                                <td>
                                    <span>
                                        {data.main.pressure} hPa
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Visibility&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                                </td>
                                <td>
                                    <span>
                                        {data.visibility / 1000} km
                                    </span>
                                </td>
                            </tr>

                        </table>
                        <table>
                            <tr>
                                <td>
                                    <h4>Wind</h4>
                                </td>
                                <td>
                                    <span>
                                        {Math.floor((data.wind.speed*18)/5)} km/hr
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Wind Dirn&nbsp;</h4>
                                </td>
                                <td>
                                    <span>
                                        {data.wind.deg} <sup>o</sup>deg
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Sunrise</h4>
                                </td>
                                <td>
                                    <span>
                                        {new Date(data.main.sunrise * 1000).toLocaleTimeString()}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Sunset</h4>
                                </td>
                                <td>
                                    <span>
                                    {new Date(data.main.sunset * 1000).toLocaleTimeString()}
                                    </span>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>


            </div>

            :<div className="mainCard">
                <h2>{data.message}</h2>
                </div>

            }
        </div>
    )
}

export default DisplayWeather;
