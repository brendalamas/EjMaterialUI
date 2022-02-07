import './App.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Typography from '@mui/material/Typography';
import { CardActions, CardContent } from '@mui/material';


const App = ()=>{
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  return (
    <Box
    sx={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      height:600
    }}
    >
      <CardContent>
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <LockOpenIcon sx={{color: "#ffff", bgcolor:"#9C27B0", borderRadius:50, padding:1}}></LockOpenIcon>
          <Typography sx={{mt:1, mb:3}}variant="h5">Sign up</Typography>
        </Box>
        

        <Box sx={{width:400}}>
          <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <TextField sx={{mr:2}} id="outlined-search" label="First Name *" type="search" />
            <TextField sx={{ml:2}} id="outlined-search" label="Last Name *" type="search" />
          </Box>
          <TextField sx={{mt:2}} fullWidth  id="outlined-search" label="Email Address *" type="search" />
          <TextField
            sx={{mt:2}}
            fullWidth 
            id="outlined-password-input"
            label="Password *"
            type="password"
            autoComplete="current-password"
          />
        </Box>
      </CardContent>

      <CardActions sx={{display:"flex", flexDirection:"column"}}>
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", width:400, mb:2}}>
          <Checkbox {...label} defaultChecked />
          <Typography variant="body1" color="text.primary"> I want to receive inspiration, marketing promotions and updates via email. </Typography>
        </Box>

        <Button variant="contained" sx={{width:400}} >SIGN UP</Button>

        <Link href="#" sx={{mt:2.5, ml:22}} variant="subtitle2">Already have an account? Sign in</Link>

        <Typography sx={{mt:4}} variant="subtitle2" color="text.secondary"> Copyright © 
        <Link href="https://mui.com/" color="inherit">Your Website </Link>  2022.
        </Typography>
      </CardActions>
      
    </Box>
    
  )
}

export default App;