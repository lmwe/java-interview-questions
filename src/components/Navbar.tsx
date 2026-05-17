import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">☕</span>
            <span className="text-white font-bold text-xl">Java面试题</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
            >
              首页
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
