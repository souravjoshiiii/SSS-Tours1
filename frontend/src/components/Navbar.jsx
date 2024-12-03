import React from 'react';

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 z-10 mt-5">
        <div className="flex-1">
          <a className="btn btn-ghost text-green-400 text-xl z-20">SSS Travels</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Contact</a></li>
            <li><a>About Us</a></li>
            <li><a>Blogs</a></li>
            <li><a>Safaris</a></li>
            <li>
              <details>
                <summary>Trip Category</summary>
                <ul className="p-2">
                  <li><a>Domestic</a></li>
                  <li><a>International</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {/* Enquiries Button */}
        <button className="btn btn-outline btn-accent mr-2 z-20">Enquiries</button> {/* Ensure button is not hidden */}

        <div className="flex-none gap-2">
          {/* Search input with light green background */}
          <div className="form-control z-20">
            <input 
              type="text" 
              placeholder="Search" 
              className="input input-bordered w-24 md:w-auto bg-green-00" 
            />
          </div>

          {/* Avatar dropdown */} 
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
