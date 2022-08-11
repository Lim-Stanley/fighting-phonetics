import { Link } from "react-router-dom";
import wug from '../images/wug.png'

const TopBar = () => {
    return(
        <div className='top-bar'>
            <Link to="/">
                <img draggable={false} className='wug' src={wug} alt='Wug' />
            </Link>
        </div>
    )
}
export default TopBar