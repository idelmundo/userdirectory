import React, { useContext } from "react";
import "./.css";
import ArticleContext from "../../utils/AritcleContext";

const searchName = () => {
    const context = useContext(ArticleContext);

    return(
        <div className="searchBox">
            <form className="form-inline">
                <input>
                className="form-control mr-sm-2"
                type="search"
                placeholder="search"
                area-label="search"
                onChange={e => context.handleSearch(e)}
                </input>
                <button className="btn my-3 my-sm-0" type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}

export default searchName;