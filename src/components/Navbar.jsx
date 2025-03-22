import { useState } from "react";
import { Link } from "react-router-dom";
// ... rest of the imports
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Admin Panel
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {/* ... svg remains same */}
        </button>

        <div className="hidden lg:hidden md:flex space-x-4">
          {/* Hide these links since sidebar handles them on large screens */}
          <Link to="/" className="text-gray-300 hover:text-white">
            Dashboard
          </Link>
          <Link to="/users" className="text-gray-300 hover:text-white">
            Users
          </Link>
          <Link to="/settings" className="text-gray-300 hover:text-white">
            Settings
          </Link>
          <Link to="/logout" className="text-gray-300 hover:text-white">
            Logout
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-2 space-y-2">
          {/* Mobile menu remains same */}
        </div>
      )}
    </nav>
  );
}
export default Navbar;
