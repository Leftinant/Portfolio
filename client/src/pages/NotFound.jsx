import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className='p-8 text-center text-red-200'>
      <h1 className='text-4xl mb-4'>404 - Page Not Found 🧽</h1>
      <p className='mb-4'>Looks like you're off the chalkboard!</p>
      <Link to='/' className='text-yellow-300 underline'>
        Go back to Home
      </Link>
    </div>
  );
}
