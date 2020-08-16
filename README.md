
   
  <p>
  <img src="https://media.giphy.com/media/jtKRpqx7HY9pn6DxbB/giphy.gif"width="450"/></p>
  <hr>
  
  ## Table Of Contents
  |   |       | |
| ------------- |:-------------:| -----:|
| [E-mail](#email)| [Project Title](#Project-title)| [Description](#description)|
| [Installation](#installation)| [Usage](#usage)| [License](#license)|
| [Contribute](#contribute)| [Tests](#tests)| [Questions](#questions)|
  <hr>

  ## Email 
  idelmundo@gmail.com
  <hr>
      
  ## Project title 
 User directory 
  <hr>

  ## Description 
  In this project we had to make a user directory for employee who wants to look for there co-workers information.
  this is by far the hardest homework where I have to sort through names and make sure they're in order as well. 
  Here is the code for sort. 
  '''  sortBy = () => {
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

  } '''
  <hr>

  ## Installation 
  React package 
  <hr>

  ## Usage 
  HTML
  CSS
  JS
  Node.js
  React
  <hr>

  ## License 
  MIT
  <hr>

  ## Contribute
  Github and my readMe generator 
  <hr>

  ## Tests 
  js
  <hr>

  ## Questions 
  
  <hr>

  ![license](https://img.shields.io/badge/license-MIT-orange.svg)
        