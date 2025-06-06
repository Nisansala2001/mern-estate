import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center mx-auto p-3'>
      <Link to='/'>

        <h1 className='font-bold text-sm sm:text-xl flex-wrap'>
          <span className='text-slate-500'>Sahand</span>
          <span className='text-slate-700'>Estate</span>
        </h1>
      </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input 
            type='text' 
            placeholder='Search...' 
            className='bg-transparent focus:out'
          />
          <FaSearch className='text-slate-600'/>
        </form>     
  <ul className='flex gap-4'> 
      <Link to='/'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
       </Link>
       <Link to='/about'>
      <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
      </Link>
      <Link to='/sign-in'>
      <li className= 'text-slate-700 hover:underline'>Sign in</li>
      </Link>
  </ul>

      </div>
    </header>
  );
}
