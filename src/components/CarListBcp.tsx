import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import CarForm from './CarForm'
import { Link } from 'react-router-dom'
import carros from '../carros.json'

interface Car {
  id: number
  name: string
  model: string
  imageUrl: string
  rentalPricePerDay: number
}

const loadCars = (): Car[] => {
  const storedCars = localStorage.getItem('cars')
  const jsonCars = carros as Car[]
  if (storedCars) {
    const localCars = JSON.parse(storedCars) as Car[]
    return [...jsonCars, ...localCars]
  }
  return jsonCars
}

const saveCarsToLocalStorage = (cars: Car[]) => {
  const localCars = cars.filter((car) => car.id > 1000)
  localStorage.setItem('cars', JSON.stringify(localCars))
}

const CarList: React.FC = () => {
  const [cars, setCars] = useState<Car[]>(loadCars())
  const [editingCar, setEditingCar] = useState<Car | null>(null)

  useEffect(() => {
    saveCarsToLocalStorage(cars)
  }, [cars])

  const addCar = (car: Car) => {
    setCars([...cars, { ...car, id: Date.now() }])
  }

  const updateCar = (updatedCar: Car) => {
    setCars(cars.map((car) => (car.id === updatedCar.id ? updatedCar : car)))
    setEditingCar(null)
  }

  const deleteCar = (id: number) => {
    setCars(cars.filter((car) => car.id !== id))
  }

  return (
    <Box sx={{ p: 3 }}>
      <CarForm onSave={editingCar ? updateCar : addCar} car={editingCar} />
      <Grid container spacing={2}>
        {cars.map((car) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={car.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={car.imageUrl}
                alt={car.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {car.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Model: {car.model}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/cars/${car.id}`}
                  >
                    View
                  </Button>
                  <Button onClick={() => setEditingCar(car)}>Editar</Button>
                  <Button onClick={() => deleteCar(car.id)}>Deletar</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default CarList
