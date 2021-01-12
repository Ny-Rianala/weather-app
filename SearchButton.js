import React, {useState} from "react";
import SearchLocation from "./SearchLocation";


function SearchButton() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen) 
        console.log(isOpen);
    }
    return(
        <div>
            <button className="search" onClick={handleClick}>Search for places</button>   
            {isOpen &&  <div>
                <button className="remove" onClick={handleClick}>X</button>
                <SearchLocation />
                </div>
            }
        </div>        
    )
}


export default SearchButton