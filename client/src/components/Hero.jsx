import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>

      {/* Heading and Description */}
      <div className='text-center mb-6'>
        <h1 className='text-3xl sm:text-5xl md:text-7xl font-semibold mx-auto leading-[1.2]'>
          Create amazing content <br /> with <span className='text-primary'>AI tools</span>
        </h1>

        <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl mx-auto text-sm sm:text-base text-gray-600'>
          Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow.
        </p>
      </div>

      {/* CTA Button */}
      <div className='flex justify-center'>
        <button
          onClick={() => navigate('/ai')}
          className='bg-primary text-white px-6 py-3 rounded-lg text-sm hover:bg-primary/80 transition duration-200'
        >
          Start Creating Now
        </button>
      </div>

      {/* Trust Indicator */}
      <div className='flex items-center gap-3 mt-8 mx-auto text-gray-600 text-sm'>
        <img src={assets.user_group} alt="User group icon" className='h-8' />
        Trusted by <span className='font-semibold text-black'>50k+</span> people
      </div>

    </div>
  );
};

export default Hero;
