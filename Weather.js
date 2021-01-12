import React, { useContext } from "react";
import { Context } from "./Context";

function Weather() {

    const { weather} = useContext(Context);
    console.log(weather);

        return (
            <div>
                {weather.map((data) => {
                    return (
                    <div key={data.id}>
                        <div>{data.title}</div>
                    </div>
                )})}
            </div>
        )
}

export default Weather;