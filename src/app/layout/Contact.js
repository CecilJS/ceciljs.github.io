import React, {useState, useEffect} from 'react';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
import { animated, useTransition } from 'react-spring';

function Contact(){

   const [contactPage, setContactPage] = useState(false);
   const transition = useTransition(contactPage, {

      from: { opacity: 0, transform: 'translate3d(-120px, 0, 0)' },
      enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)', delay: 500 }

  });

  const AnimatedGrid = animated(Grid);

  useEffect(() => {

    setContactPage(true);

} , [contactPage]);


    return(
        <>
      {transition((style, item) => contactPage ? (  <AnimatedGrid style={style} container>
            <Grid item xs={1} sm={1} md={2} lg={2} xl={2}>
                
            </Grid>
            <Grid item xs={10} sm={10} md={8} lg={6} xl={6} >
                <Typography variant='h2' sx={{  mt: 1}}>
                Contact me
                </Typography>
                <Typography variant='h6' align="justify" sx={{ mt: 2}} >
                Hey there! Would you like to get in touch?
                I would really love to hear from you. 
                To help me stay organised and productive while 
                ensuring I communicate effectively, 
                I have put together a brief outline of the 
                different mediums you could use when reaching out to me.
                </Typography>
                <Typography variant='h6' sx={{ mt: 2}} >
                    If you are a recruiter, employer, or a friend, the best way to reach me is via LinkedIn.
                    Please feel free to reach out to me via LinkedIn using the button below. 
                </Typography> 

                <LinkedInIcon sx={{ mt: 3}}/>

                <Typography variant='h5' sx={{  mt: 5, fontWeight: 'bold'}} >
                        Would you like to see some of my projects?
                </Typography>
                <Button variant="contained" to="/projects" component={Link} sx={{ mt: 5, mb: 15,  fontWeight: 'bold', bgcolor: "#003333"}}>Projects</Button>
            </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2} xl={2}>
                
                </Grid>
          
        </AnimatedGrid>) : null)}
      
    </>
    )
}

export default Contact;