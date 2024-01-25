import "../../css/PropsComponent.css"
function PropsComponent(props){
  
    //<div style={{ color:"yellow"}}>   ---->Inline
    /*const StyleAttrs={                 -->internal
        backgroundColor:"brown",
        color:"white"}
    <div style={StyleAttrs}></div> */
    
    
    return(
       
        <h1>Hello, {props.name}  <br></br>This is {props.course} class</h1>
        
      
    )
  
}
export default  PropsComponent;