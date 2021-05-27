import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import "./index.css"


ReactDOM.render(<>
  <div className="main">
  
   <h1 style={{display:"block",backgroundColor:"white",textAlign:"center",color:"pink"}}>To Do List</h1>   
   <App />
  </div>
  

</>,
  document.getElementById("root")
)
