import React, { useState } from 'react'
import Dashboard from './Components.jsx/Dashboard'
import TopBar from './Components.jsx/TopBar'
import AddUser from './Components.jsx/AddUser'
import EditUser from './Components.jsx/EditUser'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [users, setUser] = useState([])
  return <>
    <BrowserRouter>
      <TopBar />
      <Routes >

        <Route path="/" element={<Dashboard setUser={setUser} users={users} />} />
        <Route path="/add-user" element={<AddUser setUser={setUser} users={users}/>} />
        <Route path="/edit-user/:id" element={<EditUser setUser={setUser} users={users}/>} />

      </Routes>
    </BrowserRouter>


  </>
}

export default App