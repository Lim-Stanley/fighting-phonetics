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
                <Dropdown title='English Sounds' options={['English Consonants','English Vowels']}/>
                <Dropdown title='International Sounds' options={['International Consonants', 'International Vowels']}/>
                <Dropdown title='Non-pulmonic Sounds' options={['Clicks, Implosives, and Ejectives']}/>
            </div>
        </div>
    )
}
export default TopBar