import React, { useEffect, useState } from "react";
const Context = React.createContext();

function ContextProvider ({children}) {
    const [weather, setWeather] = useState([]);

    const getWeather = async() => {
        const URL = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=london"
        const res = await fetch(URL);
        const data = await res.json();
        setWeather(data);
        console.log(data);
    }

    useEffect(() => {
        getWeather();
    }, [])

    return (
        <Context.Provider value={{getWeather, weather}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

