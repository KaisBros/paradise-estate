import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="p-3 sm:max-w-sm max-w-xs mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-xl border-[#343434]"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-xl border-[#343434]"
          id="username"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-xl border-[#343434]"
          id="username"
        />
        <button className="bg-[#343434] text-[#f3f3f3] p-3 rounded-2xl hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Already have an account?</p>
        <Link to={'/sign-in'}>
          <span className="text-[#212121] font-semibold underline hover:opacity-85">
            Sign In
          </span>
        </Link>
      </div>
    </div>
  );
}
