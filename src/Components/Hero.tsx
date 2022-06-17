import { Button, Grid, Typography } from '@mui/material'

const Hero = () => {
  return (
    <Grid container sx={{minHeight:'100vh',display:'flex',alignItems:'center', padding:'50px', background:'gray'}}>
        <Grid item xs={12} md={6}>
            <Typography variant='h3'>
                Welcome To The World of 
            </Typography>
            <Typography variant='h1'>
                StorePlus
            </Typography>
            <Button variant='contained' sx={{color:'white',background:"black",marginTop:"20px"}} size='large'>Browse Store</Button>
        </Grid>
    </Grid>
  )
}

export default Hero