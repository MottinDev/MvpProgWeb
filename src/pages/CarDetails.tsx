import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import carData from '../carros.json'

interface Car {
  id: number
  name: string
  model: string
  imageUrl: string
}

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [car, setCar] = useState<Car | null>(null)

  useEffect(() => {
    const fetchData = () => {
      const foundCar = carData.find((car) => car.id === parseInt(id, 10))
      setCar(foundCar || null)
    }

    fetchData()
  }, [id])

  if (!car) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>{car.name}</h1>
      <img
        src={car.imageUrl}
        alt={car.name}
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
      />
      <p>
        <strong>Model:</strong> {car.model}
      </p>
      <a
        href="/cars"
        style={{ display: 'inline-block', marginTop: '20px', color: '#007bff' }}
      >
        Back to Car List
      </a>
    </div>
  )
}

export default CarDetails
