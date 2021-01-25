import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from "./Context";
import SearchButton from "./SearchButton";
import { format } from "date-fns";


function TempSideBar() {

    const { locationArr, weather, woeid } = useContext(Context);
    console.log(locationArr);
  
    return (
        <div className="sideBar">
                <SearchButton />
                <div className="weatherToday">
                    {weather.slice(1, 2).map((data, index) => {
                        return (
                            <div key={index}>
                                <img src={`https://www.metaweather.com//static/img/weather/${data.weather_state_abbr}.svg`}/>
                                <h1>{data.title}</h1>
                                <h2>{data.weather_state_name}</h2>
                                {/* <div>{
                                    <div className="dateToday">Today, 
                                      <span>{format(new Date(data.applicable_date), 'eee')}</span>
                                      <span>{format(new Date(data.applicable_date), 'd')}</span>
                                      <span>{format(new Date(data.applicable_date), 'MMM')}</span>
                                    </div>
                                    }
                                </div> */}
                                {/* <div>Today, {data.applicable_date}</div> */}
                                {/* <div>{data.title}</div> */}
                            </div>
                        )
                    })} 
                </div>
            </div>
        )
    }
    
    
export default TempSideBar

