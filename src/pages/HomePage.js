import { Link } from "react-router-dom";
import gloves from '../images/gloves.png'

const HomePage = () => {
  return (
    <div className = 'homepage'>
      <div className='homepage-row one'>
        <img draggable={false} className='gloves-icon' src={gloves} alt='logo' />
      </div>
      <div className='homepage-row two'>
        <Link className='homepage-link' to="/english-consonants">To English Consonants</Link>
        <h1 className="homepage-title one">fighting</h1>
        <h1 className="homepage-title two">phonetics</h1>
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
