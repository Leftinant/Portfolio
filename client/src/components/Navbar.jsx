import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='max-w-screen-2xl container md:px-40 px-10 fixed mx-auto z-99 justify-center items-center'>
      <div className='navbar rounded-4xl justify-around border-b-3 bg-black/50 backdrop-blur-md'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {" "}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-black/60 backdrop-blur-md rounded-box z-1 mt-3 w-52 p-2 '
            >
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/about'>About</a>
              </li>
              <li>
                <a href='/projects'>Projects</a>
              </li>
              <li>
                <a href='/contact'>Contact</a>
              </li>
            </ul>
          </div>
          <a className='btn btn-ghost text-2xl'>A Y A S A</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal text-xl px-1'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/projects'>Projects</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
