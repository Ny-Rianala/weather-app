import React, { useContext} from "react";
import { Link } from 'react-router-dom'
import { Context } from "./Context";
import SearchButton from "./SearchButton";

function Weather() {

    //make the images and date worjk properly
    // const [query, setQuery] = useState("");

    const { weather} = useContext(Context);
    console.log(weather);

    // const url_dailyWeather = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/woeid/date?query=${query}`


        return (
            <>
                <SearchButton />
                <div>
                    {weather.map((data)=> {
                        return (
                        <button className="cardWeather">
                            <Link to="/TodaysHighlight" key={data.id}>
                                <div>{data.applicable_date}</div>
                                <div>{data.title}</div>
                                <div>{data.the_temp}</div>
                                <img src={`/static/img/weather/c.svg`}/>
                            </Link>
                        </button>
        )})}
                </div>
            </>
        )
}

export default Weather;

