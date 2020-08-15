import React, { useContext } from "react";
import "./tablestyle.css"
import AritcleContext from "../../utils/AritcleContext";

const Table = () => {
    const context = useContext(AritcleContext);
    
    //key visible and explicit such as object....
return(
    <div className="table mt-5">
    <table className="table table-striped">
      <thead>
        <tr>
            {context.devState.heading.map(({name,width}) =>{
                return(
                    <th className = "col"
                    key={name}
                    onClick={() => {
                        context.handleSort(name.toLowerCase());
                    }}
                    > {name} 
                    <span className="click"></span> </th>
                )
            })}
        </tr>
      </thead>
    </table>
    </div>
);
    };

    export default Table;
