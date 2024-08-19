import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  // 1. Get the current location
  const location = useLocation();

  // 2. Define a function to determine the link class based on route and active state
  const getLinkClass = ({ isActive }) => {
    if (isActive) {
      return "text-blue-500";  // Active link gets a blue color
    }
    if (location.pathname === "/") {
      return "text-white";  // Home page gets white color
    }
    return "text-black";  // Other pages get black color
  };

  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">

            <p className="blue-gradient_text">CD</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={getLinkClass}>
                About
            </NavLink>
            <NavLink to="/projects" className={getLinkClass}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar