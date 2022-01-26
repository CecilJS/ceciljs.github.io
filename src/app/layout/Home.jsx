import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import ceciljs from '../images/Ceciljs.png';
import Button from '@mui/material/Button';

export default function Home (){

    return (

    <Grid container>
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ mt: 15}}>
      <Typography variant='h1' sx={{ ml: 20}}>
         Hello World!
      </Typography>
      <Typography variant='h4'sx={{ ml: 20, mt: 5, fontWeight: 'bold'}}>
         Welcome to my page!
      </Typography>
      <Typography variant='h5' sx={{ ml:20, mt: 5}} >
         My name is Cecil, and I am a software engineer.
      </Typography>
      <Typography variant='h5' sx={{ ml:20, mt: 5, fontWeight: 'bold'}} >
         Want to know more about me?
      </Typography>
      <Button variant="contained" sx={{ ml:20, mt: 5, fontWeight: 'bold', bgcolor: "#003333"}}>Read More</Button>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ mt: 5}}>
      <img 
        src={ceciljs}
        alt="cecil"
        marginLeft="50px"
       
      />
      </Grid>
      
    </Grid>
  
    )
}