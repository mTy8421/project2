import SideBar from "./SideBar";

export default function NavBar() {
  return (
    <div className="navbar bg-indigo-500 text-white">
      <div className="flex-none md:hidden">
        <SideBar />
      </div>
      <div className="flex-1 justify-center">
        <a className="btn btn-ghost text-xl">Systme Somthing</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
