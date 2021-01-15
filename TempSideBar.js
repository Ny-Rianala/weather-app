import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from "./Context";
import SearchButton from "./SearchButton";


function TempSideBar() {

    const { weather} = useContext(Context);
    
    const arr = weather[0];
    console.log(arr);

    return (
        <div className="sideBar">
                <SearchButton />
                <div className="weatherToday">
                    {weather.slice(0, 1).map((data) => {
                        return (
                            <div>
                                <img src={`https://www.metaweather.com//static/img/weather/${data.weather_state_abbr}.svg`}/>
                                <h1>{Math.floor(data.the_temp)} ºC</h1>
                                <h2>{data.weather_state_name}</h2>
                                <div>Today, {data.applicable_date}</div>
                                <div>{data.title}</div>
                            </div>
                        )
                    })} 
                </div>
            </div>
        )
    }
    
    
export default TempSideBar
