import React from 'react';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring';


  

function About(){
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 500 });
    
    return(
        <animated.main style={props}>
        <Grid container>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>

            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                <Typography variant='h2'>
                About me
                </Typography>
                <Typography variant='h6'  sx={{ mt: 3}} >
                Hey there! My name is Cecil, and I am a software engineer
                with a keen interest in the intricate details of software 
                and computer systems. I have a very curious mind by nature, 
                and this curiosity is what fuels my drive and passion for learning.
                </Typography>
                <Typography variant='h6' sx={{ mt: 3}}>
                Right from the start of my journey in the software industry, I 
                created a professional development plan for myself and have stuck to it till this day. 
                Although my path has not neccessarily been the most direct, I have learned a lot along
                the way. I have learned to be patient, to be flexible, to be resilient
                and these qualities really helps when debugging and troubleshooting.
                </Typography> 
                
                <Typography variant='h6' sx={{ mt: 3}}>
                In everything I do, I like to take a scientific approach to it as 
                I believe that is an effective way to learn anything. When I am not
                writing code, I am usually reading, playing basketball, or doing some
                charitable activity.
                </Typography>
                <Typography variant='h5' sx={{ mt: 3, fontWeight: 'bold'}} >
                        Would you like to see some of my projects?
                </Typography>
                    <Button variant="contained" to="/projects" component={Link} sx={{  mt: 5, fontWeight: 'bold', bgcolor: "#003333"}}>Projects</Button>
            </Grid>          
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>

            </Grid>
        </Grid>
      </animated.main>

    )
}

export default About;