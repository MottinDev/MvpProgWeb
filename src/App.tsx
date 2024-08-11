import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CarList from './components/CarList'
import CarDetails from './pages/CarDetails'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import RentPage from './pages/RentPage'
import CustomerRegister from './pages/CustomerRegister'

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/rent/:id" element={<RentPage />} />
        <Route path="/customer-register" element={<CustomerRegister />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
