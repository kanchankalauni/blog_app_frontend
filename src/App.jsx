import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogs from './components/blogs'
import Signup from './pages/signup'
import Signin from './pages/signin'
import CreateBlogs from './components/createBlogs'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Blogs />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/signin' element={<Signin />}></Route>
            <Route path='/create-blog' element={<CreateBlogs />}></Route>
            <Route path='*' element={<h1>Not Found</h1>}></Route>
        </Routes>
    )
}

export default App
