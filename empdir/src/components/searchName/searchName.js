import React, { useContext } from "react";
import "./.css";

const searchName = () => {
    const context = useContext(dataText);

    return(
        <div className="searchBox">
            <form className="inline">
                <input>
                className="form-control mr-sm-2"
                type="search"
                placeholder="search"
                area-label="search"
                onChange={e => context.handleSearch(e)}
                </input>
                <button className="btn my-3 my-sm-0" type="submit">
                    
                </button>
            </form>
        </div>
    )
}

export default searchName;