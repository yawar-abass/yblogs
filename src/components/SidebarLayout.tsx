import React from "react";
export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { name: "Dashboard", icon: "home" },
    { name: "Blogs", icon: "blogs" },
    { name: "Authors", icon: "Authors" },
    { name: "Users", icon: "users" },
    { name: "Keywords", icon: "Keywords" },
    { name: "Analytics", icon: "trending-up" },
    { name: "Tags", icon: "tags" },
    { name: "Settings", icon: "settings" },
  ];
  return (
    <div className="flex flex-1 bg-gray-50 min-h-screen">
      <aside className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white">
          <div className="flex items-center flex-shrink-0 px-4">
            <h2>YBlogs Admin</h2>
          </div>

          <div className="px-4 mt-8">
            <label htmlFor="sidebar-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="sidebar-search"
                className="block w-full py-2 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                placeholder="Search here"
              />
            </div>
          </div>

          <div className="px-4 mt-6">
            <hr className="border-gray-200" />
          </div>

          <div className="flex flex-col flex-1 px-3 mt-6 space-y-4">
            <nav className="flex-1 space-y-2">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-indigo-600 hover:text-white group"
                >
                  <svg
                    className="w-5 h-5 mr-4 text-gray-400 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4h16v16H4z"
                    />
                  </svg>
                  {item.name}
                </a>
              ))}
            </nav>

            <hr className="border-gray-200" />

            <div className="pb-4 mt-20">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg hover:bg-gray-100"
              >
                <img
                  className="w-6 h-6 mr-3 rounded-full object-cover"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/2/avatar-male.png"
                  alt="User"
                />
                Jacob Jones
                <svg
                  className="w-5 h-5 ml-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex flex-col flex-1">
        <div className="py-6">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
