# Todo-list
## create using react js
### index.js
```javascript

ReactDOM.render(<>
  <div className="main">
  
   <h1 style={{display:"block",backgroundColor:"white",textAlign:"center",color:"pink"}}>To Do List</h1>   
   <App />
  </div>
  

</>,
  document.getElementById("root")
)
```

#### App.jsx
```javascript
import "./index.css"
import {useState} from "react"
import Demo from "./Demo" 
//import { useState } from "react/cjs/react.production.min"
function App(){
const[name,setName]=useState("")
const[fullname,setFullname]=useState([])

    const callingme=(event)=>{
    const val=event.target.value
   setName(val)}

const add=()=>{
  setFullname((itemval)=>{
    return [...fullname,name]
  })
    
    setName("") }
  const deleteitems=(id)=>{
  setFullname((itemvalue)=>{
    return(
    itemvalue.filter((arr,index)=>{
      return index !==id
    }))
  })
  }
   return(
<>

<input type="text" name="todolist" placeholder="Add your Text" onChange={callingme} value={name}>
</input>

<button className="button" onClick={add}>+</button>
{fullname.map((arr,index)=>{
return(
// Demo is componet
// Demo path is src/Demo.jsx
<Demo item={arr}
  delete={deleteitems}
  key={index}
  id={index}

/>
  
)
})}
</>)
}
export default App
```
