import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Layout from './Components/Layout/Layout'

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path='/login' caseSensitive element={<Login />}></Route>
          <Route path="/" element={<Home />} caseSensitive />
          <Route path="/:nit" element={<Home />} caseSensitive />
        </Routes>
      </Router>
    </Layout>
  )
}

export default App
