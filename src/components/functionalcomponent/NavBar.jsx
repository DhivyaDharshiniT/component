import "../../css/NavBar.css"
import { Link } from "react-router-dom";
const NavBar=()=>
{
  return( //<nav> tag can also be used if nav used then it automattically aligns
    <ol>  
       
       <li><Link to="/">Home</Link></li>
       <li><Link to="/About">About</Link></li>
       <li><Link to="/Experience">Experience</Link></li>
       <li><Link to="/log">Login</Link></li>
    </ol>
  )
}
export default NavBar;
