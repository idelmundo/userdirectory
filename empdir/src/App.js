import React from "react";
import Table from "./components/Table";
import "./App.css";
import data from "./employees.json"


class App extends React.Component {
  constructor(props){
    // sort employee by alphabetical 
    super(props)
    this.state = {
      data: data,
      datas: data,
      search: ""
    }

  }
  
  function compareValue(key, order = "asc") {
    return function sortBykey(a, b) {
        const varA = (typeof a[key] === "String") ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === "String") ? b[key].toUpperCase() : b[key];

        let compare = 0;
        if (varA > varB) {
            compare = 1
        }
        else if (varA < varB) {
            compare = -1
        }
        return (
            (order === "desc") ? (compare * -1) : compare
        )
    }
}
  //this works one way only 
  // sortBy = () => {
  //   var newArr = this.state.data
  //   console.log(newArr)
  //   for (var i = 0; i < newArr.length; i++) {
  //     for (var j = 0; j < newArr.length; j++) {
  //       if (newArr[i].name < newArr[j].name) {
  //         var temp = newArr[i]
  //         newArr[i] = newArr[j]
  //         newArr[j] = temp

  //       } 
        // else { 
        //   for (var i = 0; i < newArr.length; i++){
        //     for (var j = 0; j < newArr.length; j++){
        //       if (newArr[i].name < newArr[j].name){
        //         var temp2 = newArr[i]
        //         newArr[i] = newArr[j]
        //         newArr[j]= temp2
        //       }
        //     }
        //   }
        // } 
      

  //     }
  //     this.setState({ data: data })
  //   }
  // }
 //this works one way only   
  

  
// functional search bar
lookFor =(event) => {
  const searchValue = event.target.value;
  if (searchValue === '') {
    this.setState({
    data: this.state.datas
    })
  }
  else{
    this.setState({
      data: this.setState.datas.lookFor(data => {
        if(data.name.include(searchValue)){
        return true
      } else {
        return false
      }
      })
    })
  }
}
 

// front end
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
                    onChange= {this.lookFor}
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
      data={this.state.data}
      sortBy={this.sortBy}
      />
    </div>
    </div>
    )
}
}
export default App
