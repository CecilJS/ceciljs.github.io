import React, {useState, useEffect} from 'react';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import MyButton from '../components/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
import { animated, useTransition } from 'react-spring';
import MyAvatar from '../components/MyAvatar';

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
      {transition((style, item) => contactPage ? (  <AnimatedGrid style={style} container sx={{mb: 15}}>
            <Grid item xs={1} sm={1} md={2} lg={2} xl={2}>
                
            </Grid>
            <Grid item xs={10} sm={10} md={8} lg={6} xl={6} >
                <Typography variant='h2' sx={{letterSpacing: 1, lineHeight: 1.5, color:'#CAA85D',  mt: 1}}>
                Contact me
                </Typography>
                <Typography variant='body1' sx={{letterSpacing: 1, lineHeight: 1.5, mt: 3}} >
                Hey there! Would you like to get in touch?
                I would really love to hear from you. 
                To help me stay organised and productive while 
                ensuring I communicate effectively, 
                I have put together a brief outline of the 
                different mediums you could use when reaching out to me.
                </Typography>
                <Typography variant='body1' sx={{letterSpacing: 1, lineHeight: 1.5, mt: 3}} >
                    If you are a recruiter, employer, or a friend, the best way to reach me is via LinkedIn.
                    Please feel free to reach out to me via LinkedIn using the button below. 
                </Typography> 

                <LinkedInIcon sx={{ color:'#CAA85D', mt: 3}}/>

                <Typography variant='h5' sx={{  mt: 5, color:'#CAA85D', fontWeight: 'bold'}} >
                        Would you like to see some of my projects?
                </Typography>
                <MyButton variant="contained" to="/projects"  component={Link} name="Projects"/>
            </Grid>
                <Grid item xs={10} sm={10} md={2} lg={2} xl={2} sx={{ ml: 3, mt: 5}} >
                    <MyAvatar/>
                </Grid>
          
        </AnimatedGrid>) : null)}
      
    </>
    )
}

export default Contact;