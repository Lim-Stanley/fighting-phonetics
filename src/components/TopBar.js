import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import wug from '../images/wug.png'

const TopBar = () => {
    return(
        <div className='top-bar'>
            <Link to="/">
                <img draggable={false} className='wug' src={wug} alt='Wug' />
            </Link>
            <div className='dropdowns'>
                <Dropdown />
                <Dropdown />
                <Dropdown />
            </div>
        </div>
    )
}
export default TopBar