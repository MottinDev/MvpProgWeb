import React from 'react'
import {
  Button,
  TextField,
  Grid,
  Container,
  Typography,
  Box,
} from '@mui/material'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .email('Formato de e-mail inválido')
    .required('E-mail é obrigatório'),
  phone: yup.string().required('Número de telefone é obrigatório'),
  address: yup.string().required('Endereço é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório'),
})

export default function CustomerRegisterPage() {
  const handleSubmit = (values: any) => {
    console.log('Form values:', values)
  }

  return (
    <Container className="container">
      <Typography variant="h4" component="h1" gutterBottom>
        Cadastro de Cliente
      </Typography>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          address: '',
          cpf: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid container spacing={2}>
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
                  label="Endereço"
                  name="address"
                  helperText={<ErrorMessage name="address" />}
                  error={Boolean(<ErrorMessage name="address" />)}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  label="CPF"
                  name="cpf"
                  helperText={<ErrorMessage name="cpf" />}
                  error={Boolean(<ErrorMessage name="cpf" />)}
                />
              </Grid>
            </Grid>
            <Box sx={{ textAlign: 'center', marginTop: 2 }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Cadastrar
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                type="reset"
                sx={{ marginLeft: 2 }}
              >
                Resetar
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  )
}
