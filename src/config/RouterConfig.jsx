import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Detail from '../components/Detail.jsx'
const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default RouterConfig
