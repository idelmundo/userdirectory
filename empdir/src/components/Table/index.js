import React from "react"

export default function Table(props){
    return(
        <table className= "table table-striped">
            <thead>
                <tr>
                <th>image</th>
                <th>
                    <button
                    onClick={() => props.sortBy()}
                    >
                    Name
                    </button>
                    </th>
                <th>email</th>
                <th>number</th>
                </tr>
            </thead>
            <tbody>
            {
                props.data.map(row =>(
                    <tr key={row.id}>
                        <th scope = "row">< img alt="" src={row.image}/></th>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.number}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}