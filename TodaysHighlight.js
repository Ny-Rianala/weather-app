import React, { useContext } from 'react';
import {Context} from "./Context";


function TodaysHighlight() {

    const {weather} = useContext(Context);
    
    return (
        <div>
            <h1>Today's Highlight</h1>
            {weather.slice(0, 1).map((data) => {
                return (
                    <div key={data.id}>
                        <div className="highlightDate">
                            <h2>Wind Status</h2>
                            <div>{Math.floor(data.wind_direction)}mph</div>
                            <div>{data.wind_direction_compass}</div>
                        </div>
                        <div className="highlightDate">
                            <h2>Humidity</h2>
                            <div>{data.humidity}%</div>
                            <progress  value="$`{data.humidity} %`"></progress>
                        </div>
                        <div className="highlightDate">
                            <h2>Visibility</h2>
                            <div>{Math.floor(data.visibility)} miles</div>
                        </div>
                        <div className="highlightDate">
                            <h2>Air Pressure</h2>
                            <div>{data.air_pressure} mb</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}


export default TodaysHighlight