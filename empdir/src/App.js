import React from "react";
import Table from "./components/Table";
import "./App.css";
import data from "./employees.json"


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      filteredData: data,
      rawData: data,
      search: "",
      sortedDirection: null,
    }

  }
 
  sortBy = () => {
    // if the state has sortedDirection then sort the other direcation and save it
    // if the state does not have sorted direction then just sort it and save that.
    
    const data = this.state.rawData;
    
    // Look at the state
    if (this.state.sortedDirection === 'd')  {
      // sort it up
      const sortedData = data.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1);
      
      // then set state with sorted data and sortedDirection as up
      this.setState({filteredData: sortedData, sortedDirection: 'u' });
    } else {
      // sort it  down
      const sortedData = data.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
    
      // then set state with sorted data and sortedDirection as down
      this.setState({filteredData: sortedData, sortedDirection: 'd' });
    }

  }

 //this works one way only   
  

  
// functional search bar
filter =(event) => {

// take the search string aka searchValue!
const searchValue = event.target.value;
console.log (searchValue)
// go throught the raw data

// find the one that match 


// set state to the ones we found in filtred data 

  
//   if (searchValue === '') {
//     this.setState({
//     data: this.state.datas
//     })
//   }
//   else{
//     this.setState({
//       data: this.setState.datas.filter(data => {
//         if(data.name.include(searchValue)){
//         return true
        
//       } else {
//         return false
//       }
//       })
//     })
//   }
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
                    onChange= {this.filter}
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
      data={this.state.filteredData}
      sortBy={this.sortBy}
  
      />
    </div>
    </div>
    )
  }
}
export default App
