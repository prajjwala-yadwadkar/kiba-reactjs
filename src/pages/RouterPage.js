import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Features from './Features'
import Documentation from './Documentation';


export default function RouterPage() {
  return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/documentation" element={<Documentation />} />
            </Routes>
        </BrowserRouter>
  )
}
