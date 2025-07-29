import { Routes, Route } from "react-router-dom"
import Home from './Components/Home'
import Lists from './Components/Lists.jsx'
import Hotel from './Components/Hotel.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import { useContext } from "react"
import { AuthContext } from "./Context/Auth.jsx"
import { ToastContainer } from "react-toastify"

function App() {
  let protectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
  }
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/hotels' element={<Lists />} />
        <Route path='/register' element={<Register />} />
        <Route path='/hotels/:id' element={<Hotel />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
