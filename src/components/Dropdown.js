import { Link } from "react-router-dom";
const linkOf = {
    'English Consonants': 'english-consonants',
    'English Vowels':'english-vowels',
    'International Consonants':'international-consonants',
    'International Vowels':'international-vowels',
    'Clicks, Implosives, and Ejectives':'non-pulmonic',
}
const Dropdown = ({title, options}) => {
    return (
        <div className='dropdown'>
            <h1 className='dd-title'>{title}</h1>
            <ul className = 'dd-menu'>
                {options.map((option, index) => 
                <Link key={index} to={`/${linkOf[option]}`}>
                    <li className = 'dd-menu-item'>{option}</li>
                </Link>
                )}
            </ul>
        </div>
    )
}

export default Dropdown