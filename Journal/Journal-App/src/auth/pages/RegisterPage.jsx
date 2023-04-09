import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout';

const RegisterPage = () => {
  return (
    <AuthLayout title='Login'>
       <form>
            <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
                <TextField
                label="Nombre completo"
                type="text"
                placeholder='Virginia Villalobos'
                fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField
                label="Correo"
                type="email"
                placeholder='correo@google.com'
                fullWidth
                />
              </Grid>
              <Grid item sx={{mt:2}}>
                <TextField
                label="Contraseña"
                type="password"
                placeholder='contraseña'
                fullWidth
                />
              </Grid>
              {/*Material UI trabaja con configuración 'mobile first', es decir, si se especifica un tamaño en xs, ese será el tamaño para cualqueir pantalla a menos que le especfiques un sm, md...etc */}
              <Grid container spacing={2} sx={{mb:2,mt:1}}>
                <Grid item xs={12} sm={6}>
                  <Button variant='contained' fullWidth>
                    Crear cuenta
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                </Grid>
              </Grid>
              <Grid container direction='row' justifyContent='end'>
                <Typography>¿Ya tienes una cuenta?</Typography>
                <Link component={RouterLink} color='inherit' to='/auth/login'>
                  ingresar
                </Link>
                
              </Grid>
            </Grid>
          </form>

    </AuthLayout>

  )
}

export default RegisterPage;
