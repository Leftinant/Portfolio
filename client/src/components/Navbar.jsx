import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-99'>
      <nav className='flex justify-between items-center py-4 px-6 bg-black/50 backdrop-blur-md'>
        <h1 className='md:text-3xl text-xl font-extrabold text-blue-500'>
          A y a s a
        </h1>
        <div className='md:space-x-5 space-x-2 text-white'>
          <Link to='/' className='hover:text-blue-300'>
            Home
          </Link>
          <Link to='/about' className='hover:text-blue-300'>
            About
          </Link>
          <Link to='/projects' className='hover:text-blue-300'>
            Projects
          </Link>
          <Link to='/contact' className='hover:text-blue-300'>
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
