import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  Container,
  Typography,
  Box,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import carros from '../carros.json'

interface Car {
  id: number
  name: string
  model: string
  imageUrl: string
  description?: string
}

function getCarById(id: number): Car | undefined {
  return carros.find((car) => car.id === id)
}

const validationSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .email('Formato de e-mail inválido')
    .required('E-mail é obrigatório'),
  phone: yup.string().required('Número de telefone é obrigatório'),
  rentalPeriod: yup
    .number()
    .positive('Período de aluguel deve ser um número positivo')
    .required('Período de aluguel é obrigatório'),
  startDate: yup
    .date()
    .required('Data de início é obrigatória')
    .min(new Date(), 'Data de início não pode ser no passado'),
  driverLicense: yup
    .string()
    .required('Número da carteira de motorista é obrigatório'),
})

export default function RentPage() {
  const { id } = useParams<{ id: string }>()
  const [openDialog, setOpenDialog] = React.useState(false)

  const carId = id ? parseInt(id) : 0
  const car = getCarById(carId)

  const handleSubmit = (values: {
    name: string
    email: string
    phone: string
    rentalPeriod: string
    startDate: string
    driverLicense: string
  }) => {
    setOpenDialog(true)
  }

  return (
    <Container>
      {car ? (
        <Box
          sx={{
            marginTop: { xs: 10, sm: 3 },
            marginBottom: 3,
            padding: 2,
            backgroundColor: '#f5f5f5',
            border: '1px solid #81c784',
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: '#333' }}>
            {car.name}
          </Typography>
          <img
            src={car.imageUrl}
            alt={car.name}
            style={{ width: '100%', maxWidth: '300px', borderRadius: '8px' }}
          />
          <Typography variant="h6" gutterBottom sx={{ color: '#555' }}>
            Modelo: {car.model}
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#666' }}>
            {car.description || 'Nenhuma descrição disponível.'}
          </Typography>

          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              rentalPeriod: '',
              startDate: '',
              driverLicense: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Grid container spacing={2} sx={{ marginTop: 4 }}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Nome"
                      name="name"
                      helperText={<ErrorMessage name="name" />}
                      error={Boolean(<ErrorMessage name="name" />)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      label="E-mail"
                      name="email"
                      helperText={<ErrorMessage name="email" />}
                      error={Boolean(<ErrorMessage name="email" />)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Número de Telefone"
                      name="phone"
                      helperText={<ErrorMessage name="phone" />}
                      error={Boolean(<ErrorMessage name="phone" />)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Número da Carteira de Motorista"
                      name="driverLicense"
                      helperText={<ErrorMessage name="driverLicense" />}
                      error={Boolean(<ErrorMessage name="driverLicense" />)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Período de Aluguel (dias)"
                      name="rentalPeriod"
                      type="number"
                      helperText={<ErrorMessage name="rentalPeriod" />}
                      error={Boolean(<ErrorMessage name="rentalPeriod" />)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Data de Início"
                      name="startDate"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      helperText={<ErrorMessage name="startDate" />}
                      error={Boolean(<ErrorMessage name="startDate" />)}
                    />
                  </Grid>
                </Grid>
                <Box sx={{ marginTop: 2 }}>
                  <Button
                    variant="contained"
                    color="success"
                    type="submit"
                    disabled={isSubmitting}
                    sx={{ marginRight: 1 }}
                  >
                    Confirmar
                  </Button>
                  <Button variant="outlined" color="success" type="reset">
                    Resetar
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      ) : (
        <Typography variant="h6" color="textSecondary">
          Carro não encontrado.
        </Typography>
      )}

      {/* Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: '#e8f5e9',
            border: '1px solid #81c784',
            borderRadius: '8px',
            padding: '16px',
          },
        }}
      >
        <DialogTitle sx={{ color: '#388e3c' }}>Aluguel Confirmado!</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Seu carro foi alugado com sucesso!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenDialog(false)}
            sx={{
              backgroundColor: '#388e3c',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#2c6d41',
              },
            }}
          >
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
