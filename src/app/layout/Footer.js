import React  from 'react'
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";



function Footer () {

        const footerLinks = [
                { title: "Terms", path: "/terms" },
                { title: "Privacy Policy", path: "/privacy" }

              ];
 
        return (
            
                <Grid container>
                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>

                        </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ mt: 15}}>
                  <a href="https://github.com/CecilJS" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon sx={{ ml: 5, color: '#CAA85D'}} />
                  </a>
                  <a href="https://www.linkedin.com/in/itscecil/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon sx={{ ml: 5, color: '#CAA85D'}}/>
                  </a>
                
                 <a href="https://twitter.com/cecil_js" target="_blank" rel="noopener noreferrer"> 
                  <TwitterIcon sx={{ ml: 5, color: '#CAA85D'}}/>
                 </a>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ mt: 13}}>
                  
                  <List  sx={{ display: "flex"}}>
                        {footerLinks.map((link, i) => (
                                <ListItem key={i} 
                                to={link.path}
                                component={Link}
                                sx={{ display: "flex", textDecoration: "none", color: 'inherit'}}
                                >
                                {link.title}
                                </ListItem>
                                ))}
                  </List>
                  </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>

                        </Grid>
                </Grid>
        )
    }



export default Footer;