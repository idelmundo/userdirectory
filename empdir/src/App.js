import React from "react";
import Table from "./components/Table";
import "./App.css";
import Employees from "./employees.json"


class App extends React.Component {
  constructor(props){
    // sort employee by alphabetical 
    super(props)
    this.state = {
      Employees: Employees,
      dirextion: "asc",
      search: ""
    }
    // this.sortBy = this.sortBy.bind(this)
  }
  compareBy(key) {
    return function (a, b) {
      if (""+a[key]<(""+b[key])) return -1;
      if (""+a[key]>(""+b[key])) return 1;
      return 0;
    };}
    
    sortBy(key) {
    let arrayCopy = [...this.state.Employees];
    arrayCopy.sort(this.compareBy(key));
    //arrayCopy.reverse(); for descending
    this.setState({Employees: arrayCopy});
    } 
    
  // sortBy(key){
  //   console.log(key)
  //   this.setState({
  //   name: Employees.sort ( (a, b) => a[key] < b[key] )
  //   })
  // }
// functional search bar
  
 


  render () {
    return(
      <div>
         <nav className= "navbar navbar-expand-lg navbar-dark bg-dark fixed">
            <div className="search-area col-4">
            <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Name"
                    aria-label="Search"
                />
                <button className="btn my-2 my-sm-0" type="submit">
                    Search
                 </button>
            </form>
        </div>
            </div>
        </nav>
        <div className="header">
            <h1>Employee Directory</h1>
            <p>Click on each heading to filter or use the search box to narrow your results</p>
        </div>
    <div
      className="page-container"> 
      <Table 
      Employees={this.state.Employees}
      sortBy={this.sortBy}
      />
    </div>
    </div>
    )
}
}
export default App
