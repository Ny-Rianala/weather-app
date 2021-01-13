import React, { useEffect, useState } from "react";
const Context = React.createContext();

function ContextProvider ({children}) {
    const [weather, setWeather] = useState([]);

    const getWeather = async() => {
        const URL = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956/"
        const res = await fetch(URL);
        const data = await res.json();
        setWeather(data.consolidated_weather);
        console.log(data.consolidated_weather);
    }

    useEffect(() => {
        getWeather();
    }, [])

    return (
        <Context.Provider value={{getWeather, weather, setWeather}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

