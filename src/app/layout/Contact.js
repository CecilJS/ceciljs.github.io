import React from 'react';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import ceciljs from '../images/ceciljs-avatar.png';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom";

function Contact(){

    return(
        <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
            <Typography variant='h2' sx={{ ml: 5, mr: 5, mt: 1}}>
            Contact me
            </Typography>
            <Typography variant='h6' align="justify" sx={{ml: 5, mr: 5, mt: 2}} >
             Hey there! Would you like to get in touch?
             I would really love to hear from you. 
             To help me stay organised and productive while 
             ensuring I communicate effectively, 
             I have put together a brief outline of the 
             different mediums you could use when reaching out to me.
             </Typography>
             <Typography variant='h6' sx={{ ml: 5, mr: 5, mt: 2}} >
                If you are a recruiter, employer, or a friend, the best way to reach me is via LinkedIn.
                Please feel free to reach out to me via LinkedIn using the button below. 
             </Typography> 

             <LinkedInIcon sx={{  ml: 5, mr: 5, mt: 1}}/>

             <Typography variant='h6' sx={{ ml: 5, mr: 5, mt: 2}} >
                Alternatively, if you would like to want to say hello, 
                by all means feel free to reach out to me on twitter. 
                I promise I will get back to you as soon as I can. 
                Kindly use the button below.
             </Typography>
             <TwitterIcon sx={{  ml: 5, mr: 5, mt: 1}}/>
             <Typography variant='h5' sx={{  m: 5, fontWeight: 'bold'}} >
                    Would you like to see some of my projects?
             </Typography>
                <Button variant="contained" to="/projects" component={Link} sx={{  ml: 5, mr: 5, mt: 1, fontWeight: 'bold', bgcolor: "#003333"}}>Projects</Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ mt: 30}}>
                <Avatar 
                    src={ceciljs}
                    alt="cecil"
                    sx={{ width: 400, height: 400, ml: 60 }}
                
                />
          </Grid>
          
        </Grid>
      

    )
}

export default Contact;