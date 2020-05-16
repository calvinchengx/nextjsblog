const NavButton = () => {
  return (
    <div className="flex flex-grow lg:w-3/4 xl:w-4/5">
      <div className="w-full lg:px-6 xl:w-3/4 xl:px-12"></div>

      <button
        type="button"
        id="sidebar-open"
        className="flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700"
      >
        <svg
          className="fill-current w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>

      <button
        type="button"
        id="sidebar-close"
        className="hidden flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700"
      >
        <svg
          className="fill-current w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>
        </svg>
      </button>

      <div className="hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6">
        Nav Items
      </div>
    </div>
  )
}

export default NavButton
