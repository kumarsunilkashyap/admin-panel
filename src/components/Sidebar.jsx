import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex ${
        isOpen ? "lg:w-64" : "lg:w-64"
      } bg-gray-900 text-white min-h-screen`}
    >
      {/* Sidebar */}
      <div
        className={`p-4 flex flex-col ${
          isOpen ? "w-64" : "w-64"
        } transition-all duration-300`}
      >
        {/* Hamburger Menu Button */}
        <div className="flex items-center justify-between lg:hidden mb-4">
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
        <nav className="space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center p-2 rounded hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <FaTachometerAlt className="mr-3" />
            <span className={`${isOpen ? "block" : "hidden"} lg:inline`}>
              Dashboard
            </span>
          </NavLink>

          <div className="relative group">
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `flex items-center p-2 rounded hover:bg-gray-700 ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              <FaUsers className="mr-3" />
              <span className={`${isOpen ? "block" : "hidden"} lg:inline`}>
                Users
              </span>
            </NavLink>
            <div className="absolute left-full top-0 mt-2 hidden group-hover:block bg-gray-800 text-white rounded shadow-lg w-48">
              <NavLink
                to="/users/add"
                className="block px-6 py-2 hover:bg-gray-700"
              >
                Add User
              </NavLink>
              <NavLink
                to="/users/manage"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Manage Users
              </NavLink>
            </div>
          </div>
          {/* 
         { <div className="relative group">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `flex items-center p-2 rounded hover:bg-gray-700 ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              <FaUsers className="mr-3" />
              <span className={`${isOpen ? "block" : "hidden"} lg:inline`}>
                Services
              </span>
            </NavLink>
            <div className="absolute left-full top-0 mt-2 hidden group-hover:block bg-gray-800 text-white rounded shadow-lg w-48">
              <NavLink
                to="/services/add"
                className="block px-6 py-2 hover:bg-gray-700"
              >
                Add Service
              </NavLink>
              <NavLink
                to="/services/manage"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Manage Services
              </NavLink>
            </div>
          </div>} */}

          <div className="relative group">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `flex items-center p-2 rounded hover:bg-gray-700 ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              <FaCog className="mr-3" />
              <span className={`${isOpen ? "block" : "hidden"} lg:inline`}>
                Projects
              </span>
            </NavLink>
            <div className="absolute left-full top-0 mt-2 hidden group-hover:block bg-gray-800 text-white rounded shadow-lg w-48">
              <NavLink
                to="/projects/add"
                className="block px-6 py-2 hover:bg-gray-700"
              >
                Add Project
              </NavLink>
              <NavLink
                to="/projects/manage"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Manage Projects
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center p-2 rounded hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <FaCog className="mr-3" />
            <span className={`${isOpen ? "block" : "hidden"} lg:inline`}>
              Settings
            </span>
          </NavLink>
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              `flex items-center p-2 rounded hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <FaSignOutAlt className="mr-3" />
            <span className={`${isOpen ? "block" : "hidden"} lg:inline`}>
              Logout
            </span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
