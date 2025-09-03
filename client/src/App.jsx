
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'

import BlogTitles from './pages/BlogTitles'
import GenerateImage from './pages/GenrateImages'
import RemoveBackground from './pages/RemoveBackground'
import ReviewResume from './pages/ReviewResume'
import Community from './pages/community'
import RemoveObject from './pages/RemoveObject'
import WriteArticle from './pages/WriteArtical'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
const App = () => {

  
  // const {getToken}= useAuth()
  // useEffect(() => {
  // getToken().then((token)=>console.log(token));
  // }, [])
  

  return (
    <div >
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ai' element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path='write-article' element={<WriteArticle />} />
          <Route path='blog-titles' element={<BlogTitles />} />
          <Route path='generate-images' element={<GenerateImage />} />
          <Route path='remove-background' element={<RemoveBackground />} />
          <Route path='remove-object' element={<RemoveObject />} />
          <Route path='review-resume' element={<ReviewResume />} />
          <Route path='community' element={<Community />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App