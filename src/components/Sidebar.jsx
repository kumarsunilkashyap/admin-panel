import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="hidden lg:block w-64 bg-gray-900  text-white h-min-screen p-4">
      <nav className="space-y-2">
        <Link to="/" className="block p-2 hover:bg-gray-700 rounded">
          Dashboard
        </Link>
        <Link to="/users" className="block p-2 hover:bg-gray-700 rounded">
          Users
        </Link>
        <Link to="/settings" className="block p-2 hover:bg-gray-700 rounded">
          Settings
        </Link>
        <Link to="/logout" className="block p-2 hover:bg-gray-700 rounded">
          Logout
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
