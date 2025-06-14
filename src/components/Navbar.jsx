import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-950 text-white px-8 py-6 flex justify-between items-center shadow-md">
        <div className="text-xl font-bold"> </div>
        <div className="space-x-12">
        </div>
      
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      
    </nav>
  );
};

export default Navbar;
