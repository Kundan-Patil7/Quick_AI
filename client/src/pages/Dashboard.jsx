import React, { useEffect, useState } from 'react'
import { dummyCreationData } from '../assets/assets'
import { Gem, Sparkles } from 'lucide-react'
import { Protect } from '@clerk/clerk-react'
import CreationItems from '../components/CreationItems'

const Dashboard = () => {
  const [creations, setCreations] = useState([])

  const getDashboardData = async () => {
    setCreations(dummyCreationData) // ✅ fixed typo
  }

  useEffect(() => {
    getDashboardData()
  }, [])

  return (
    <div className='h-full overflow-y-scroll p-6 bg-gray-50'>
      {/* Stats Section */}
     {/* Stats Section */}
      <div className='flex justify-start gap-6 flex-wrap mb-10'>
        {/* Total Creations Card */}
        <div className='flex justify-between items-center w-72 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition duration-200'>
          <div>
            <p className='text-sm text-gray-500'>Total Creations</p>
            <h2 className='text-3xl font-bold text-gray-800 mt-1'>{creations.length}</h2>
          </div>
          <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] flex justify-center items-center shadow-md'>
            <Sparkles className='w-6 h-6 text-white' />
          </div>
        </div>

        {/* Active Plan Card */}
        <div className='flex justify-between items-center w-72 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-pink-300 transition duration-200'>
          <div>
            <p className='text-sm text-gray-500'>Active Plan</p>
            <h2 className='text-3xl font-bold text-gray-800 mt-1'>
              <Protect plan='premium' fallback='Free'>Premium</Protect>
            </h2>
          </div>
          <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF61c5] to-[#9E53EE] flex justify-center items-center shadow-md'>
            <Gem className='w-6 h-6 text-white' />
          </div>
        </div>
      </div>

      {/* Recent Creations */}
      <div className='space-y-4'>
        <p className='mt-4 mb-2 text-lg font-semibold text-gray-700'>Recent Creations</p>
        {creations.length > 0 ? (
          creations.map((item) => <CreationItems key={item.id} item={item} />)
        ) : (
          <p className='text-gray-500 italic'>No creations yet.</p>
        )}
      </div>
    </div>
  )
}

export default Dashboard
