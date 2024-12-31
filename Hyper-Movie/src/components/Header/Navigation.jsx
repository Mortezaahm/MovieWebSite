export default function Navigation() {
  return (
    <nav className="container flex mt-10 items-center text-slate-300">
      <div className="flex items-center">
        <h1 className="text-3xl mr-12">
          Hyper<span className="text-rose-600">Movies</span>
          <p className="text-xs text-center text-slate-400 font-light">
            Film Review
          </p>
        </h1>
        <ul className="flex gap-6 uppercase">
          <li>
            <a href="/">Movies</a>
          </li>
          <li>
            <a href="/movies">Tv Shows</a>
          </li>
          <li>
            <a href="/tv-shows">People</a>
          </li>
          <li>
            <a href="/search">More</a>
          </li>
        </ul>
      </div>
      <div className="flex ml-auto uppercase">
        <ul className="flex gap-8">
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
    </nav>
  );
}
