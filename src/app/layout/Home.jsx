import React from 'react';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import ceciljs from '../images/Ceciljs.png';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring';
import Typewriter from 'typewriter-effect';

export default function Home (){
   const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 500 })
    return (
    <animated.main style={props}>
    <Grid container>
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ mt: 15}}>
      <Typography variant='h1'sx={{ ml: 20, mt: 5, fontWeight: 'bold'}}>
         Hello there!
      </Typography>
      <Typography variant='h5' sx={{ ml:20, mt: 5}} >
      <Typewriter
      options={{
         strings: [ 'Welcome to my page.', ' My name is Cecil.', 'And I am a software engineer.' , 'I am also a team player.'],
         autoStart: true,
         loop: true,
      }}
      />   
      </Typography>
      <Typography variant='h5' sx={{ ml:20, mt: 5, fontWeight: 'bold'}} >
         Want to know more about me?
      </Typography>
      <Button variant="contained" to="/about"  component={Link} sx={{ ml:20, mt: 5, fontWeight: 'bold', bgcolor: "#003333", }}>Read More</Button>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ mt: 5}}>
      <img 
        src={ceciljs}
        alt="cecil"
       
      />
      </Grid>
      
                 
    </Grid>
    </animated.main>
    )
}