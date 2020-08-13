import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";
import Wrapper from "./components/Wrapper/Wrapper"
import "./App.css";

function App() {
  return (
    <div className="App">
   <Wrapper>
     <Navbar />
     {/* <Jumbotron /> */}
     <Table />
   </Wrapper>
    </div>
  );
}

export default App;