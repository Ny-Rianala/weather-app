import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from "./Context";
import SearchButton from "./SearchButton";


function TempSideBar() {

    const { weather} = useContext(Context);
    
    const arr = weather[0];
    console.log(arr);

    // function WeatherToday() {
    //     return (
    //         <div>
    //             <p>{arr.weather_state_name}</p>
    //         </div>
    //     )}
        
    // console.log(WeatherToday);

    
    return (
        <div>
                <SearchButton />
                {/* <WeatherToday /> */}
                {/* <div>{predictedWeather}</div>
                 */}
                {/* <div>{arr.the_temp}</div> */}
            </div>
        )
    }
    
    
    
    // const predictedWeather = ((arr, index) => {
    //     <div>
    //         <Link to="/TodaysHighlight" key={index.id}>
    //             <div>{arr.weather_state_name}</div>
    //             <img src={`https://www.metaweather.com//static/img/weather/${arr.weather_state_abbr}.svg`}/>
    //             <div>Today,{arr.applicable_date}</div>
    //             <div>{arr.the_temp}</div>
    //             <div>{arr.title}</div>
    //         </Link>
    //     </div>
    // })

   
    // console.log(predictedWeather);

export default TempSideBar
