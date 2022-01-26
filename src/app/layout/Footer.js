import React  from 'react'
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";




function Footer () {

        const footerLinks = [
                { title: "Terms", path: "/catalog" },
                { title: "Privacy Policy", path: "/about" }

              ];
 
        return (
            
                <Grid container>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ mt: 15}}>
                  <GitHubIcon sx={{ ml: 20}}/>
                  <LinkedInIcon sx={{ ml: 20}}/>
                  <TwitterIcon sx={{ ml: 20}}/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ mt: 15}}>
                  
                  <List  sx={{ display: "flex" }}>
                        {footerLinks.map(link => (
                                <ListItem>{link.title}</ListItem>
                        ))}
                  </List>
                  </Grid>
                </Grid>
        )
    }



export default Footer;