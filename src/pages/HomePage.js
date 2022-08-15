import { Link } from "react-router-dom";
import gloves from '../images/gloves_white.png'

const HomePage = () => {
  return (
    <div className = 'homepage'>
      <div className='homepage-row one'>
        <img draggable={false} className='gloves-icon' src={gloves} alt='logo' />
      </div>
      <div className='homepage-row two'>
        <Link className='homepage-link' to="/english-consonants">To English Consonants</Link>
        <h1>fighting phonetics</h1>
        <Link className='homepage-link' to="/international-consonants">To International Consonants</Link>
      </div>
      <div className='homepage-row three'>
        <Link className='homepage-link' to="/english-vowels">To English Vowels</Link>
        <Link className='homepage-link' to="/non-pulmonic">To Non-Pulmonic Sounds</Link>
        <Link className='homepage-link' to="/international-vowels">To International Vowels</Link>
      </div>
    </div>
  );
};
export default HomePage;
