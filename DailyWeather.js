import React, { useContext} from "react";
import { Link } from 'react-router-dom'
import { Context } from "./Context";
import SearchButton from "./SearchButton";
import { format } from "date-fns";

function DailyWeather() {


    const { weather} = useContext(Context);
    console.log(weather);



        return (
            <>
                <div className="dayWeek">
                    {weather.slice(1).map((data)=> {
                        return (
                        <div className="dailyWeather" key={data.id}>
                            <button className="cardWeather">
                                <Link to="/TodaysHighlight">
                                <div>{
                                    <div className="dayOfWeek">
                                      <span>{format(new Date(data.applicable_date), 'eee')}</span>
                                      <span>{format(new Date(data.applicable_date), 'd')}</span>
                                      <span>{format(new Date(data.applicable_date), 'MMM')}</span>
                                    </div>
                                    }
                                </div>
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

