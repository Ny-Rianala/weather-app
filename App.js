import React from "react";
import { Switch, Route} from 'react-router-dom';

import CityButton from "./CityButton";
import TempSideBar from "./TempSideBar";
import TodaysHighlight from "./TodaysHighlight";
import  DailyWeather from "./DailyWeather";


function App() {
    return (
        <div>
          <div className="container">
            <div className="sidebar">
              <TempSideBar /> 
            </div>
            <div>
              <DailyWeather />
              <TodaysHighlight />
            </div>
          </div>
            <Switch>
                <Route exact path="/CityButton">
					        <CityButton />
				        </Route>
                <Route path="/TodaysHighlight">
					        <TodaysHighlight />
				        </Route>
            </Switch>
        </div>
    )
}

export default App;