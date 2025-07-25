
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import WriteArtical from './pages/WriteArtical'
import BlogTitles from './pages/BlogTitles'
import GenrateImages from './pages/GenrateImages'
import RemoveBackground from './pages/RemoveBackground'
import ReviewResume from './pages/ReviewResume'
import Community from './pages/community'
import RemoveObject from './pages/RemoveObject'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ai' element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path='write-article' element={<WriteArtical />} />
          <Route path='blog-titles' element={<BlogTitles />} />
          <Route path='generate-images' element={<GenrateImages />} />
          <Route path='remove-background' element={<RemoveBackground />} />
          <Route path='remove-object' element={<RemoveObject />} />
          <Route path='review-resume' element={<ReviewResume />} />
          <Route path='comunity' element={<Community />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App