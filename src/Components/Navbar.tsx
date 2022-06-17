import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'

const Navbar = () => {
  return (
    // By default the position of the appbar is fixed, we make it static which is the default behaviour of an html entity, if you don't make it sticky, Everything you write in the beginning will be hidden behind it
   <AppBar position='fixed' sx={{backgroundColor:'black',paddingLeft:'30px',paddingRight:'30px'}}> 
    {/* Toolbar component is used to have menus for datagrid, here it's for adding margin and padding */}
    <Toolbar>
        {/* A button with an icon */}
        <Typography component='div' sx={{flexGrow:1,fontWeight:'bold'}} variant='h4'>StorePlus</Typography>
        <Stack direction={'row'} spacing={2}>
            <Button sx={{fontWeight:'semi-bold', fontSize:'large'}} color='inherit'>Home</Button>
            <Button sx={{fontWeight:'semi-bold', fontSize:'large'}} color='inherit'>Products</Button>
            <Button sx={{fontWeight:'semi-bold', fontSize:'large'}} color='inherit'>Cart</Button>
            <Button sx={{fontWeight:'semi-bold', fontSize:'large'}} color='inherit'>About Us</Button>
        </Stack>
    </Toolbar>
   </AppBar>
  )
}

export default Navbar