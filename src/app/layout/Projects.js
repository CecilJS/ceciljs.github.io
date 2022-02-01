import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { Typography} from "@mui/material";
import ceciljs from '../images/ceciljs-avatar.png';
import tendercrown from '../images/tender-crown.png';
import elegance from '../images/traditionalelegance.png';
import ProjectDisplayCard from '../components/ProjectDisplayCard';
import Typewriter from 'typewriter-effect';


//component, height, url, alt, title, description, website, learnMore
// 1. create state that will be toggled on and off to show the projects
// 2. create a function that will toggle the state
// 3. Call the function inside useEffect

const DATA = [
    {
        component: "img",
        height: "240",
        url: tendercrown,
        alt: "tendercrown",
        title: "Tender Crown",
        description: "Tender Crown is a full service salon situated in the Reading Area. Their approach to haircare stands apart from all the salons in the Reading area and beyond.",
        website: "Website",
        learnMore: "Learn More"
    },
    {
        component: "img",
        height: "240",
        url: ceciljs,
        alt: "Kidz App",
        title: "Kidz App",
        description: "Kidz App is a ficticious organisation that produces computing products for children between the ages of 7 - 15. This web application gives its internal users the ability to record customer enquiries. ",
        website: "Website",
        learnMore: "Learn More"
    },
    {
        component: "img",
        height: "240",
        url: elegance,
        alt: "Traditional Elegance",
        title: "Traditional Elegance",
        description: "Traditional Elegance is a British brand specialising in Handmade tailoring and accessories for men. The brand provides the assurance of quality, merit and modernism.",
        website: "Website",
        learnMore: "Learn More"
    }
    
    
    ]

function Projects(){
    const [showProjects, setShowProjects] = useState(false);
 

    useEffect(() => {

        setShowProjects(true);
    
    } , [showProjects]);

        return(
            <>
            <Typography variant='h2' align="center"  sx={{mb: 3}} >
                My projects
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                <Typewriter
                    options={{
                        strings: ['Thank you for deciding to checkout my projects.','Here are a few of the projects I have worked on.', 'To see more of my projects, checkout my github page.'],
                        autoStart: true,
                        loop: true,
                    }}
                    /> 
                    
                </div>
            <Grid container spacing={10} sx={{ mt: 2 }}> 
            <Grid item xs={0.5} sm={0.5} md={1} lg={1} xl={2}>

            </Grid> 

            {DATA.map((item, index) =>  (
                <ProjectDisplayCard
                component={item.component}
                height={item.height}
                url={item.url}
                alt={item.alt}
                title={item.title}
                description={item.description}
                website={item.website}
                learnMore={item.learnMore}
                key={index}
                showProjects={showProjects}
                />

            ))}  

            <Grid item xs={0.5} sm={0.5} md={1} lg={1} xl={2}>

            </Grid> 
            </Grid>
            </>

    )
}

export default Projects;