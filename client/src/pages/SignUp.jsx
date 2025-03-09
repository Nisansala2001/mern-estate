import { Link } from 'react-router-dom'


export default function SignUp() {
  return (
    <div className='px-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
      SignUp </h1>
      <form className='flex flex-col ga-4'>
        <input type="text" placeholder='username'
         className='border p-3 rounded-lg' id='username' />
         <input type="email" placeholder='email'
         className='border p-3 rounded-lg' id='email' />
         <input type="password" placeholder='password'
         className='border p-3 rounded-lg' id='password' />
        
        <button disabled className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opactiy-95 disabled:opacity-80' >SignUp</button>
      </form>
      <div className="flex gap-2 mt-5" >
        <p> Have an account?</p>
        <link to={"/sign-in"}>
          <span className='text-blue-700'>Sign in</span>
        </link>

      </div>
      
      
    </div>
  )
}
