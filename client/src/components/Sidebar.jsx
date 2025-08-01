import { Protect, useClerk, useUser } from '@clerk/clerk-react';
import { House, SquarePen, Hash, Image, Eraser, Scissors, Users, LogOut } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom'; // Make sure you have react-router-dom installed

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user, isLoaded, isSignedIn } = useUser(); // Get isLoaded and isSignedIn
  const { signOut, openUserProfile } = useClerk();

  const navItems = [
    { to: '/ai', label: 'Dashboard', icon: House },
    { to: '/ai/Write-article', label: 'Write Article', icon: SquarePen },
    { to: '/ai/blog-titles', label: 'Blog Titles', icon: Hash },
    { to: '/ai/generate-images', label: 'Generate Images', icon: Image },
    { to: '/ai/remove-background', label: 'Remove Background', icon: Eraser },
    { to: '/ai/remove-object', label: 'Remove Object', icon: Scissors },
    { to: '/ai/comunity', label: 'Community', icon: Users },
  ];

  // Handle loading and not signed in states gracefully
  if (!isLoaded) {
    return (
      <div className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-center items-center max-sm:absolute top-14 bottom-0 ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'
        } transition-all duration-300 ease-in-out`}>
        <p>Loading user data...</p>
      </div>
    );
  }

  // If loaded but not signed in, you might show a different UI or redirect
  if (!isSignedIn) {
    return (
      <div className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-center items-center max-sm:absolute top-14 bottom-0 ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'
        } transition-all duration-300 ease-in-out`}>
        <p>Please sign in to view this content.</p>
        {/* Potentially add a sign-in button here */}
      </div>
    );
  }

  return (
    <div className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'
      } transition-all duration-300 ease-in-out`}>
      <div className='my-7 w-full text-center'>
        {/* Use optional chaining and provide a fallback image */}
        <img
          src={user?.imageUrl || "https://via.placeholder.com/52x52/CCCCCC/FFFFFF?text=User"}
          alt='User Avatar'
          className='w-[52px] h-[52px] rounded-full mx-auto object-cover'
        />
        {/* Use optional chaining and provide a fallback name */}
        <h1 className='mt-1 font-medium text-center text-gray-800'>
          {user?.fullName || user?.firstName || 'Guest'}
        </h1>
      </div>

      <div className='px-6 mt-5 text-sm text-gray-600 font-medium w-full'>
        {/* Added w-full for consistent padding */}
        {navItems.map(({ to, label, icon: IconComponent }) => (
          // Renamed 'icon' to 'IconComponent' to avoid conflict
          <NavLink
            key={to}
            to={to}
            end={to === '/ai'}
            onClick={() => setSidebar(false)}
            className={({ isActive }) =>
              `px-3.5 py-2.5 flex items-center gap-3 rounded mb-2 ${isActive
                ? 'bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white'
                : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            {/* Correctly render the icon component */}
            <IconComponent className={`w-4 h-4 ${({ isActive }) => isActive ? 'text-white' : ''}`} />
            {/* Apply active text color to icon */}
            {label}
          </NavLink>
        ))}
      </div>

      

      <div className='w-full border-t border-gray-200 p-4 px-7  flex items-center justify-between' >
        <div onClick={openUserProfile} className='flex gap-2 items-center cursor-pointer ' >
          <img src={user.imageUrl} className='w-8 rounded-full' alt="" />
        </div>
        <div>
          <h1 className='text-sm font-medium' >{user.fullName}</h1>
          <p className='text-xs text-gray-500' >
            <Protect plan='Premium' fallback="Free" >
              Premium
            </Protect>
            Plan
          </p>
        </div>
        <LogOut onClick={signOut} className='w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer' />

      </div>

    </div>
  );
};

export default Sidebar;
