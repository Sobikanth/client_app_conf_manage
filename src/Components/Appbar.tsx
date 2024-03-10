import React from "react";

const Appbar = () => {
  return (
    <nav className="mt-5">
      <div className="flex justify-between max-w-7xl mx-auto">
        <div>
          <span className=" text-green-500 font-bold text-4xl">Conf </span>
          <span className="text-slate-500 font-thin text-3xl">Xpert</span>
        </div>
        <div>
          <ul className="flex space-x-8">
            <li className="menu border-b-4">
              <a href="/" className="font-body">
                Home
              </a>
            </li>
            <li className="menu">
              <a href="/sessions" className="font-body">
                Sessions
              </a>
            </li>
            <li className="menu focus:border-blue-400">
              <a href="/speakers" className="font-body ">
                Speakers
              </a>
            </li>
            <li className="menu">
              <a href="/contact" className="font-body">
                Contact
              </a>
            </li>
            <li className="px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
