import React from 'react'

const Header = ({ changeUser }) => {
  // Get logged-in user from localStorage
  const userData = JSON.parse(localStorage.getItem('loggedInUser'));

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser('');
  }

  // If userData exists, use their firstName, otherwise default to 'User'
  const displayName = userData?.name || userData?.data?.firstName || 'User';

  return (
    <header className="sticky top-0 z-10 w-full bg-[#111]/70 backdrop-blur-md shadow-lg rounded-xl p-4 mb-6 flex items-center justify-between">
      {/* App Title / Logo */}
      <h1 className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-wide">
        EMS Dashboard
      </h1>

      {/* User Greeting */}
      <div className="flex items-center gap-6">
        <div className="text-right">
          <p className="text-sm text-gray-300">Welcome back,</p>
          <span className="text-lg font-semibold text-white">{displayName} 👋</span>
        </div>

        {/* Logout Button */}
        <button
          onClick={logOutUser}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-all duration-300 text-white font-medium px-4 py-2 rounded-lg shadow-md"
        >
          {/* Replace LogOut icon with emoji fallback */}
          <span role="img" aria-label="logout">🔒</span>
          <span className="hidden sm:inline">Log Out</span>
        </button>
      </div>
    </header>
  )
}

export default Header
