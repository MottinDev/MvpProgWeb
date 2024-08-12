import React from 'react'
import CarList from '../components/CarList'
import Carousel from '../components/Carousel'

const Cars: React.FC = () => {
  return (
    <>
      <Carousel />
      <div className="home">
        <CarList />
      </div>
    </>
  )
}

export default Cars
