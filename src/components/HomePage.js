import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>This is the Homepage</h1>
      <Link to="/english-consonants">To English Consonants</Link>
    </>
  );
};

export default HomePage;
