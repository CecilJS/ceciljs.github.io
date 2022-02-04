import React, {useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Typography} from "@mui/material";
import ProjectDisplayCard from '../components/ProjectDisplayCard';
import Typewriter from 'typewriter-effect';
import {PROJECTS} from "../api/DATA"



/**
1. Pass a function as prop on casestudy button in the ProjectDisplayCard component
2. Write a function inside the Projects component which will fire the function passed as prop when the button is clicked
3. Inside the fuction, first console.log e.target.name

 */

//component, height, url, alt, title, description, website, learnMore
// 1. create state that will be toggled on and off to show the projects
// 2. create a function that will toggle the state
// 3. Call the function inside useEffect


function Projects(props){
    const [showProjects, setShowProjects] = useState(false);
   
    useEffect(() => {

        setShowProjects(true);
        
    
    } , [showProjects]);


    
        return(
            <>
            <Typography variant='h2' align="center"  sx={{color:'#CAA85D', mb: 3}} >
                My projects
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                <Typewriter
                    options={{
                        strings: ['Thanks for checking out my projects.','Here are a few of the projects I have worked on.', 'Checkout my github page for more.'],
                        autoStart: true,
                        loop: true,
                    }}
                    /> 
                    
                </div>
            <Grid container spacing={10} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2}}> 
         

            {PROJECTS.map((item, index) =>  (
                <ProjectDisplayCard
                key={index}
                component={item.component}
                to={item.to}
                height={item.height}
                url={item.url}
                alt={item.alt}
                title={item.title}
                description={item.description}
                website={item.website}
                site={item.site}
                learnMore={item.learnMore}
                showProjects={showProjects}
                />

              ))}  

            </Grid>
            </>

    )
}

export default Projects;