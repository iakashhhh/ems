import React from 'react'

const Header = (props) => {
  // Get logged-in user from localStorage
  const userData = JSON.parse(localStorage.getItem('loggedInUser'));

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  }

  // If userData exists, use their firstName, otherwise default to 'User'
  const displayName = userData?.name || userData?.data?.firstName || 'User';

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{displayName} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
