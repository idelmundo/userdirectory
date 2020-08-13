import React from "react";
import searchName from "../searchName/searchName";
import "./navbarstyle.css"

function Navbar () {
    return (
        <nav className= "navbar navbar-expand-lg navbar-light bg-light fixed">
            <div className="search-area col-4">
                <searchName />
            </div>
        </nav>
    )
}

export default Navbar;