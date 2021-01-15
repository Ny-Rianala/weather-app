import React, { useContext} from "react";
import { Link } from 'react-router-dom'
import { Context } from "./Context";
import SearchButton from "./SearchButton";

function DailyWeather() {


    const { weather} = useContext(Context);
    console.log(weather);
    
        



        return (
            <>
                <div>
                    {weather.slice(1).map((data)=> {
                        return (
                        <div>
                            <button className="cardWeather">
                                <Link to="/TodaysHighlight" key={data.id}>
                                    <div>{data.applicable_date}</div>
                                    <div>{data.title}</div>
                                    <img src={`https://www.metaweather.com//static/img/weather/${data.weather_state_abbr}.svg`}/>
                                    <div className="temp">
                                        <div>{Math.floor(data.max_temp)} ºC</div>
                                        <div>{Math.floor(data.min_temp)} ºC</div>
                                    </div>
                                </Link>
                            </button>
                        </div>
        )})}
                </div>
            </>
        )
}

export default DailyWeather;

