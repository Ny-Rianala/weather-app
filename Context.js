import React, { useEffect, useState } from "react";
const Context = React.createContext();

function ContextProvider ({children}) {
    const [weather, setWeather] = useState([]);
    const [location, setLocation] = useState('london');
    const [locationArr, setLocationArr] = useState([]);
    const [woeid, setWoeid] = useState(44418);
    
    const url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${location}`

    const getLocation = async() => {
        // const URL = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956/"
        const res = await fetch(url);
        const data = await res.json();
        setLocationArr(data);
        console.log(data);
    }
    const getWether = async() => {
        const URL = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
        const res = await fetch(URL);
        const data = await res.json();
        setWeather(data.consolidated_weather);
        console.log(data);
    }


    useEffect(() => {
        getLocation();
    }, [location])

    useEffect(() => {
        getWether()
    }, [woeid])

    return (
        <Context.Provider value={{ 
            getLocation, 
            weather, 
            setWeather, 
            locationArr,
            setLocation,    
            setLocationArr
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

