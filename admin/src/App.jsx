import React from 'react'
import Navbar from './components/navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Add from './pages/Add/Add'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>}/>

        </Routes>
      </div>
    </div>
  )
}

export default App