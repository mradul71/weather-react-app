import React, { useState } from 'react'
import DisplayWeather from './DisplayWeather';

function Weather() {

    const APIKEY = '1ccf63d8e9482756bdf0c53ea905a68c';
    const [formData, setFormData] = useState({
        city: "",
        country: ""
    })

    const [weather, setWeather] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if(name==="city"){
            setFormData({...formData, city: value});
        }
        if(name==="country"){
            setFormData({...formData,country:value});
        }
        console.log(formData.city, formData.country);
    }

    async function weatherData(e){
        e.preventDefault();
        if(formData.city==""){
            alert("Add values");
        }
        else{
            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${formData.city},${formData.country}&appid=${APIKEY}`
                )
                .then((res) => res.json())
                .then((data)=>data);
                setWeather({data});
        }
    }

    return (
        <div className="form"> 
            <form>
                <input type="text" name="city" placeholder="City" autoComplete="off" onChange={(e) => handleChange(e)}/>
                <input type="text" name="country" placeholder="Country" autoComplete="off" onChange={(e) => handleChange(e)}/>
                <button className="btn btn-warning" onClick={(e)=>weatherData(e)}>Get Weather</button>
            </form>

            {
                weather.data !== undefined ? 
                <DisplayWeather data={weather.data}/> 
                :
                null
            }

        </div>
    )
}

export default Weather
