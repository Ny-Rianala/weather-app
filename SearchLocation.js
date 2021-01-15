import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";



function SearchLocation() {
    const [query, setQuery] = useState("");
    


//create the state for weather, and update the 
const { weather, setWeather} = useContext(Context);


    const searchWeather = async (e) => {
        e.preventDefault();
        console.log("Submitted");

        const url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${query}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setWeather(data);
        }catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <form className="form" onSubmit={searchWeather}>
                <input className="input" type="text" name="query" placeholder="london" value={query} onChange={(e) => setQuery(e.target.value)}/>
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {weather.filter(dailyWeather => dailyWeather).map(city =>   { 
                return (
                   <button className="city"><Link to="/CityButton">{city.title}</Link></button> 
                )})}
            </div>
        </>
        )
    }

export default SearchLocation;