export function Navbar() {
  return (
    <div className="navbar bg-base-200">
      <div className="container mx-auto lg:px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#hero" className="text-xl font-rubik">
                  about
                </a>
              </li>
              <li>
                <a className="text-xl font-rubik">portfolio</a>
              </li>
            </ul>
          </div>
          <a className="normal-case text-2xl font-medium tracking-wider font-rubik">
            fima
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-xl font-medium font-rubik">about</a>
            </li>
            <li>
              <a className="text-xl font-medium font-rubik">portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
