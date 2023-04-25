import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const LoginPage = () => {

  const{email, password, onInputChange}=useForm({
    email:'vir@google.com',
    password:'123456'
  });

  const onSubmit=(event)=>{
   event.preventDefault();
   console.log(email,password)
   }

   const onGoogleSignIn=()=>{
    console.log("onGoogle sign in")
   }
   

  return (
    <AuthLayout title='Login'>
       <form onSubmit={onSubmit}>
            <Grid container>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField
                label="Correo"
                type="email"
                placeholder='correo@google.com'
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
                />
              </Grid>
              <Grid item sx={{mt:2}}>
                <TextField
                label="Contraseña"
                type="password"
                placeholder='contraseña'
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
                />
              </Grid>
              {/*Material UI trabaja con configuración 'mobile first', es decir, si se especifica un tamaño en xs, ese será el tamaño para cualqueir pantalla a menos que le especfiques un sm, md...etc */}
              <Grid container spacing={2} sx={{mb:2,mt:1}}>
                <Grid item xs={12} sm={6}>
                  <Button variant='contained' fullWidth type="submit">
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant='contained' fullWidth onClick={onGoogleSignIn}>
                    <Google/>
                    <Typography sx={{ml:1}}>Google</Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid container direction='row' justifyContent='end'>
                <Link component={RouterLink} color='inherit' to='/auth/register'>
                  Crear una cuenta
                </Link>
                
              </Grid>
            </Grid>
          </form>

    </AuthLayout>

  )
}

export default LoginPage;
