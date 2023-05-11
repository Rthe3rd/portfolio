import {Link} from "react-router-dom";
import {UserCircleIcon} from '@heroicons/react/24/solid'
import { useRef } from "react";

const NavBar = ({aboutRefProp, heroRefProp, contactRefProp, projectRefProp}) => {

    function handleClick(event, ref){
        ref.current.scrollIntoView({block: "start", behavior: "smooth"});
    }

    return(
        <div className="navbar">
            <div className="navbar__nameIconContainer">
                <UserCircleIcon className = "navbar__userCircleIcon" />
                <h3 className="navbar__name">ALEX ZUNIGA</h3>
            </div>
            <div className="navbar__linksContainer">
                {/* floating animations and moving to sections of page */}
                <Link onClick = {(event) => handleClick(event, heroRefProp)} className="navbar__link navbar__link--Home">HOME</Link>
                <Link onClick = {(event) => handleClick(event, aboutRefProp)} className="navbar__link navbar__link--About">ABOUT</Link>
                <Link onClick = {(event) => handleClick(event, projectRefProp)} className="navbar__link navbar__link--Projects">PROJECTS</Link>
                <Link onClick = {(event) => handleClick(event, contactRefProp)} className="navbar__link navbar__link--Contact">CONTACT</Link>
            </div>
            
        </div>
    )
}

export default NavBar