import React from 'react';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import ceciljs from '../images/ceciljs-avatar.png';
import tendercrown from '../images/tender-crown.png';
import elegance from '../images/traditionalelegance.png';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



function Projects(){

    return(
        <>
        <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
            <Typography variant='h2' align="center"  sx={{mb: 2}} >
            My projects
            </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
            <Typography variant='h6' align="center" sx={{mb: 5}} >
            Thanks for deciding to visit my page! <br></br>
            To check out the code for most of my projects, please check out my github repository.<br></br>
            While you are here, feel free to check out my some of the projects I am proud of. <br></br>
            Please drop me a line if you have any questions or comments. 
            </Typography>
            </Grid>
        </Grid>
        <Grid container
        direction={'row'} 
        spacing={24}
        >
            <Grid item xs={12} sm={12} md={6} lg={6} xl={4} >
            
                <Card sx={{ maxWidth: 345, ml: 10 }}>
                <CardMedia
                    component="img"
                    height="240"
                    image={tendercrown}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Tender Crown
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                    Tender Crown is a full service salon situated in the Reading Area. 
                    Their approach to haircare stands apart from all the salons in the Reading area and beyond.
                    I led a team of graphic designers and web developers to build this web application from the ground up.
                    This web application incorporates a full CRUD system for stylists, clients, and appointments.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Website</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} xl={4} >
                <Card sx={{ maxWidth: 345, ml: 10 }}>
                <CardMedia
                    component="img"
                    height="240"
                    image={ceciljs}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Kidz App
                    </Typography>
                    <Typography variant="body1" color="text.secondary"> 
                    Kidz App is a ficticious organisation that produces computing 
                    products for children between the ages of 7 - 15. This web 
                    application gives its internal users the ability to record customer enquiries. 
                    External users are able to place online orders that are placed through 
                    the website and includes a backend, i.e., an API built with .NET to interact with the web app. 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Website</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={4} >
                <Card sx={{ maxWidth: 345,  ml: 10 }}>
                <CardMedia
                    component="img"
                    height="240"
                    image={elegance}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Traditional Elegance
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                    Traditional Elegance is a British brand specialising in Handmade tailoring and accessories for men. 
                    The brand provides the assurance of quality, merit and modernism. 
                    Traditional elegance is providing exquisite fashion with an African touch.
                    Together with a graphic designer, we developed the e-commerce store of 
                    Traditional elegance from scratch.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Website</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
            </Grid>
                
          
        </Grid>
        </>

    )
}

export default Projects;