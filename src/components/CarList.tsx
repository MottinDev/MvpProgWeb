import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia'
import {
  Button,
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
} from '@mui/material'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import carros from '../carros.json'
import Car from '../types/car'

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
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    saveCarsToLocalStorage(cars)
  }, [cars])

  const handleOpen = (car: Car) => {
    setSelectedCar(car)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedCar(null)
  }

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={2}>
        {cars.map((car) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={car.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
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
                    to={`/rent/${car.id}`}
                  >
                    Alugar
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginLeft: 8 }}
                    // component={Link}
                    // to={`/car-details/${car.id}`}
                    onClick={() => handleOpen(car)}
                  >
                    Visualizar
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {selectedCar && (
            <Card sx={{ maxWidth: 600, margin: '0 auto', borderRadius: 2 }}>
              <CardMedia
                component="img"
                image={selectedCar.imageUrl}
                alt={selectedCar.model}
              />
              <CardContent sx={{ padding: 2 }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                  {selectedCar.model}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                  {selectedCar.description}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', color: 'success.main' }}
                >
                  R$ {selectedCar.rentalPricePerDay},00
                </Typography>
              </CardContent>
            </Card>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default CarList
