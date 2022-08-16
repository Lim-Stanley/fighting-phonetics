import { Link } from "react-router-dom";
import gloves from '../images/gloves.png'

const HomePage = () => {
  return (
    <div className = 'homepage'>
      <div className='homepage-row one'>
        <img draggable={false} className='gloves-icon' src={gloves} alt='logo' />
      </div>
      <div className='homepage-row two'>
        <Link className='homepage-link upper' to="/english-consonants">
          <h1 className='homepage-symbol'>[ð]</h1> To English Consonants </Link>
        <h1 className="homepage-title one">fighting</h1>
        <h1 className="homepage-title two">phonetics</h1>
        <Link className='homepage-link upper' to="/international-consonants">
          <h1 className='homepage-symbol'>[r]</h1>To International Consonants</Link>
      </div>
      <div className='homepage-row three'>
        <Link className='homepage-link' to="/english-vowels">
          <h1 className='homepage-symbol'>[ə]</h1>To English Vowels</Link>
        <Link className='homepage-link' to="/non-pulmonic">
          <h1 className='homepage-symbol'>[ɠ]</h1>To Non-Pulmonic Sounds</Link>
        <Link className='homepage-link' to="/international-vowels">
          <h1 className='homepage-symbol'>[i]</h1>To International Vowels</Link>
      </div>
    </div>
  );
};
export default HomePage;
