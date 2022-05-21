//jshint esversion: 6
import {Link} from "react-router-dom";
function Nav(){
    return (
    <ul>
        <li>
            <Link to='/home'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/services'>Services</Link>
        </li>
    </ul>
    )
}

export default Nav;