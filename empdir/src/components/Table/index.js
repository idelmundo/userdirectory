import React from "react"

export default function Table(props){
    return(
        <table className= "table table-striped">
            <thead>
                <tr>
                <th>image</th>
                <th>
                    <button
                    onClick={() => this.sortBy('name')}
                    >
                    name
                    </button>
                    </th>
                <th>email</th>
                <th>number</th>
                </tr>
            </thead>
            <tbody>
            {
                props.Employees.map(row =>(
                    <tr>
                        <th scope = "row">< img src={row.image}/></th>
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