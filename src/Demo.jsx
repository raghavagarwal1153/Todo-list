import "./index.css"
function Demo(props){
    return (<>
    <div className="Demo">
      <button onClick={()=>{
          props.delete(props.id)

      }}> x</button>
      

      
    <li style={{listStyle:"none"}}>{props.item}</li>
    
    </div>
    </>)
}
export default Demo