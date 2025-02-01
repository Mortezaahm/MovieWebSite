import { useState } from "react";
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="container flex mt-10 items-center text-slate-300 bg-slate-900 -my-6 p-4 md:bg-transparent md:m-0 md:p-0">
        <div className="flex items-center">
          <a href="/">
            <h1 className="text-3xl mr-12">
              Hyper<span className="text-rose-600">Movies</span>
              <p className="text-xs text-center text-slate-400 font-light">
                Film Review
              </p>
            </h1>
          </a>
          <ul className="hidden md:flex text-sm lg:text-base gap-4 uppercase">
            <li>
              <a href="/movies">Movies</a>
            </li>
            <li>
              <a href="/tv-shows">Tv</a>
            </li>
            <li>
              <a href="/people">People</a>
            </li>
            <li>
              <a href="/more">More</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block text-sm lg:text-base ml-auto uppercase">
          <ul className="flex gap-4">
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a
                className="bg-rose-600 hover:bg-rose-500 px-6 py-3 rounded-2xl text-white"
                href="/register"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div className="m-4"></div>
      <div
        className={`bg-slate-900 text-center overflow-hidden transition-all duration-200 text-slate-300 ${
          isMenuOpen
            ? "max-h-96 py-4 border-t-2 border-slate-700 mt-4"
            : "max-h-0 py-0 mt-0"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4">
          <li>
            <a href="/movies">Movies</a>
          </li>
          <li>
            <a href="/tv-shows">Tv</a>
          </li>
          <li>
            <a href="/people">People</a>
          </li>
          <li>
            <a href="/more">More</a>
          </li>
        </ul>
        <div className="mt-8 flex justify-center items-center gap-4 p-4 border-t-2 pt-4 border-slate-700">
          <a href="/login" className="text-xl">
            Login
          </a>
          <a
            href="/signUp"
            className="bg-rose-600 rounded-xl py-2 px-4 text-white"
          >
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
}
