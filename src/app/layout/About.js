import React, {useState, useEffect} from 'react';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import MyButton from '../components/Button';
import { Link } from "react-router-dom";
import { animated, useTransition } from 'react-spring';
import MyAvatar from '../components/MyAvatar';


  

function About(){
    const [aboutPage, setAboutPage] = useState(false);
    const transition = useTransition(aboutPage, {
 
       from: { opacity: 0, transform: 'translate3d(-120px, 0, 0)' },
       enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)', delay: 500 }
 
   });
 
   const AnimatedGrid = animated(Grid);
 
   useEffect(() => {
 
    setAboutPage(true);
 
 } , [aboutPage]);
 
 
    
    return(
       <>
        {transition((style, item) => aboutPage ? ( <AnimatedGrid style={style} container sx={{flexWrap: 'wrap'}}>
            <Grid item xs={1} sm={1} md={2} lg={2} xl={2}>

            </Grid>
            <Grid item xs={10} sm={10} md={6} lg={6} xl={6} >
                <Typography variant='h2' color='#CAA85D'>
                About me
                </Typography>
                
                <Typography variant='h6'  sx={{ mt: 3}} >
                Hey there! My name is Cecil, and I am a software engineer
                with a keen interest in the intricate details of software 
                and computer systems. I have a very curious mind by nature, 
                and this curiosity is what fuels my drive and passion for learning.
                I am proficient in JavaScript and Python, and I am currently learning to love
                C# and Go. I am also a team player, and I am always looking to learn new things.
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
                <Typography variant='h5' sx={{ mt: 3, color:'#CAA85D', fontWeight: 'bold'}} >
                        Would you like to see some of my projects?
                </Typography>
                <MyButton variant="contained" to="/projects"  component={Link} name="Projects"/>
            </Grid>          
            <Grid item xs={10} sm={10} md={2} lg={2} xl={2} sx={{ ml: 5, mt: 5}}>
            <MyAvatar/>
            </Grid>
        </AnimatedGrid>) : null)}
        </>

    )
}

export default About;