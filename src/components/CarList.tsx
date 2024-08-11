import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import carros from '../carros.json'

interface Car {
  id: number
  name: string
  model: string
  imageUrl: string
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

  useEffect(() => {
    saveCarsToLocalStorage(cars)
  }, [cars])

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={2}>
        {cars.map((car) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={car.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={car.imageUrl} // Corrigido para usar a URL da imagem
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
                    to={`/rent/${car.id}`}
                  >
                    Alugar
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginLeft: 8 }}
                    component={Link}
                    to={`/car-details/${car.id}`}
                  >
                    Visualizar
                  </Button>
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
