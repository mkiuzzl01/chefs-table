import { FaUserCircle } from "react-icons/fa";
function Navigation_bar() {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="#">Home</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Search</a></li>
        </ul>
      </div>
      <a className="lg:text-3xl font-bold">Recipe Calories</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 lg:space-x-6">
        <li><a href="#">Home</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Search</a></li>
      </ul>
    </div>
    <div className="navbar-end space-x-3">
    <input type="text" placeholder="Search" className="input rounded-full w-full max-w-xs bg-slate-100" />
      <a className="text-lg p-4 bg-[#0BE58A] rounded-full"><FaUserCircle /></a>
    </div>
  </div>
  );
}

export default Navigation_bar;
