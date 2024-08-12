import React from 'react'
import { Box, Typography, Link, Container } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Box
        sx={{
          backgroundColor: '#333',
          color: '#fff',
          padding: '20px 0',
          marginTop: 'auto',
          width: '100%',
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="body1" align="center">
            &copy; {new Date().getFullYear()} Marquinhos Veículos. Todos os
            direitos reservados.
          </Typography>
          <Typography variant="body2" align="center" sx={{ marginTop: '10px' }}>
            <Link href="/terms" color="inherit" underline="hover">
              Termos de Uso
            </Link>{' '}
            |{' '}
            <Link href="/privacy" color="inherit" underline="hover">
              Política de Privacidade
            </Link>{' '}
            |{' '}
            <Link href="/contact" color="inherit" underline="hover">
              Contato
            </Link>
          </Typography>
          <Typography variant="body2" align="center" sx={{ marginTop: '10px' }}>
            Criado com ♥ inspirado em{' '}
            <Link
              href="https://www.pixar.com/cars"
              color="inherit"
              underline="hover"
            >
              Carros da Pixar
            </Link>
            .
          </Typography>
        </Container>
      </Box>
    </div>
  )
}

export default Footer
