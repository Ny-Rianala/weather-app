import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";



function SearchLocation() {
    // const [query, setQuery] = useState("");
    


//create the state for weather, and update the 
const { locationArr, weather, setLocationArr, setLocation } = useContext(Context);
    return (
        <>
            <form className="form" onSubmit={(e) => {
                e.preventDefault();
                setLocation(e.target.query.value)
                console.log(location);
            }}>
                <input 
                    className="input" 
                    type="text" 
                    name="query" 
                    placeholder="london" 
                    onChange={() => {}} />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {locationArr.map((city, index) =>   { 
                return (
                   <button key={index} className="city">
                       <Link to="/CityButton">{city.title}</Link>
                    </button> 
                )})}
            </div>
        </>
        )
    }

export default SearchLocation;