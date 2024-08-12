import React, { useState } from 'react'
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
import InputMask from 'react-input-mask'
import carros from '../carros.json'
import Car from '../types/car'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

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
  startDate: yup
    .date()
    .required('Data de início é obrigatória')
    .min(new Date(), 'Data de início não pode ser no passado'),
  endDate: yup
    .date()
    .required('Data de término é obrigatória')
    .min(new Date(), 'Data de término não pode ser no passado'),
  driverLicense: yup
    .string()
    .matches(
      /^\d{11}$/,
      'Número da carteira de motorista deve conter exatamente 11 dígitos'
    )
    .required('Número da carteira de motorista é obrigatório'),
})

export default function RentPage() {
  const { id } = useParams<{ id: string }>()
  const [openDialog, setOpenDialog] = React.useState(false)

  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  const carId = id ? parseInt(id) : 0
  const car = getCarById(carId)

  const calculateTotalDays = (startDate: Date, endDate: Date): number => {
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1
  }

  const handleSubmit = (values: {
    name: string
    email: string
    phone: string
    startDate: Date
    endDate: Date
    driverLicense: string
  }) => {
    setOpenDialog(true)
  }

  return (
    <Container>
      {car ? (
        <Box
          sx={{
            marginTop: { xs: 10, sm: 11 },
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
          <Typography variant="h6" sx={{ color: '#333', marginTop: 2 }}>
            Preço do aluguel por dia: R${car.rentalPricePerDay.toFixed(2)}
          </Typography>

          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              startDate: startDate ? format(startDate, 'yyyy-MM-dd') : '',
              endDate: endDate ? format(endDate, 'yyyy-MM-dd') : '',
              driverLicense: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue, values, touched, errors }) => (
              <Form>
                <Grid container spacing={2} sx={{ marginTop: 4 }}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      label="Nome"
                      name="name"
                      helperText={<ErrorMessage name="name" />}
                      error={touched.name && Boolean(errors.name)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      label="E-mail"
                      name="email"
                      helperText={<ErrorMessage name="email" />}
                      error={touched.email && Boolean(errors.email)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="phone"
                      render={({ field }: any) => (
                        <InputMask
                          {...field}
                          mask="(99) 99999-9999"
                          maskChar={null}
                        >
                          {(inputProps: any) => (
                            <TextField
                              {...inputProps}
                              fullWidth
                              label="Número de Telefone (Ex: (11) 98765-4321)"
                              helperText={<ErrorMessage name="phone" />}
                              error={touched.phone && Boolean(errors.phone)}
                            />
                          )}
                        </InputMask>
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="driverLicense"
                      render={({ field }: any) => (
                        <InputMask
                          {...field}
                          mask="99999999999"
                          maskChar={null}
                        >
                          {(inputProps: any) => (
                            <TextField
                              {...inputProps}
                              fullWidth
                              label="Número da Carteira de Motorista (11 dígitos)"
                              helperText={<ErrorMessage name="driverLicense" />}
                              error={
                                touched.driverLicense &&
                                Boolean(errors.driverLicense)
                              }
                            />
                          )}
                        </InputMask>
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {/* Data de Início */}
                    <Box sx={{ position: 'relative', width: '100%' }}>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                          setStartDate(date)
                          setFieldValue(
                            'startDate',
                            date ? format(date, 'yyyy-MM-dd') : ''
                          )
                        }}
                        dateFormat="dd/MM/yyyy"
                        locale={ptBR}
                        customInput={
                          <TextField
                            fullWidth
                            label="Data de Início"
                            InputLabelProps={{ shrink: true }}
                            error={
                              touched.startDate && Boolean(errors.startDate)
                            }
                            helperText={<ErrorMessage name="startDate" />}
                          />
                        }
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    {/* Data de Término */}
                    <Box sx={{ position: 'relative', width: '100%' }}>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => {
                          setEndDate(date)
                          setFieldValue(
                            'endDate',
                            date ? format(date, 'yyyy-MM-dd') : ''
                          )
                        }}
                        dateFormat="dd/MM/yyyy"
                        locale={ptBR}
                        customInput={
                          <TextField
                            fullWidth
                            label="Data de Término"
                            InputLabelProps={{ shrink: true }}
                            error={touched.endDate && Boolean(errors.endDate)}
                            helperText={<ErrorMessage name="endDate" />}
                          />
                        }
                      />
                    </Box>
                  </Grid>
                </Grid>

                {startDate && endDate && (
                  <Typography variant="h6" sx={{ color: '#333', marginTop: 2 }}>
                    Total do aluguel: R$
                    {(
                      car.rentalPricePerDay *
                      calculateTotalDays(startDate, endDate)
                    ).toFixed(2)}
                  </Typography>
                )}

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
