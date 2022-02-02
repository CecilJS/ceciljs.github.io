import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { Typography} from "@mui/material";
import kidzapp from '../images/kidzapp.png';
import thetalkative from '../images/thetalkative.png';
import jaydalinroyal from '../images/jaydalinroyal.png';
import firststinview from '../images/1stinview.png';
import tendercrown from '../images/tendercrownpage.png';
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
        url: elegance,
        alt: "Traditional Elegance",
        title: "Traditional Elegance",
        description: "Traditional Elegance is a British brand specialising in Handmade tailoring and accessories for men. The brand provides the assurance of quality, merit and modernism.",
        website: "Website",
        learnMore: "Case Study"

    },
    {
        component: "img",
        height: "240",
        url: kidzapp,
        alt: "Kidz App",
        title: "Kidz App",
        description: "Kidz App is a ficticious organisation that produces computing products for children between the ages of 7 - 15. This web application gives its internal users the ability to record customer enquiries. ",
        website: "Website",
        learnMore: "Case Study"
        
    },
    {
        component: "img",
        height: "240",
        url: tendercrown,
        alt: "tendercrown",
        title: "Tender Crown",
        description: "Tender Crown is a full service salon situated in the Reading Area. Their approach to haircare stands apart from all the salons in the Reading area and beyond.",
        website: "Website",
        learnMore: "Case Study"
        
    },
    {
        component: "img",
        height: "240",
        url: thetalkative,
        alt: "The Talkative",
        title: "The Talkative",
        description: "The Talkative was established in 2017 as a virtual hub where Software developers, UX designers and Graphic designers collaborate on projects. This is a startup that I co-founded.",
        website: "Website",
        learnMore: "Case Study"
 
    },
    {
        component: "img",
        height: "240",
        url: jaydalinroyal,
        alt: "Jaydalin Royal",
        title: "Jaydalin Royal",
        description: "Jaydalin Royal Limited is a Logistics company that provides expert services in the import and export industry in Ghana. They hired me to develop a website for their business, which I delivered on time.",
        website: "Website",
        learnMore: "Case Study"
     
    },
    {
        component: "img",
        height: "240",
        url: firststinview,
        alt: "1st In View",
        title: "1st In View",
        description: "1st In View Systems was established in 1997, specialises in Intruder Alarms, Access control, CCTV and Door Entry Systems. They hired me to develop a website for their business, which I delivered on time. ",
        website: "Website",
        learnMore: "Case Study"
    
        
    }
    
    
    ]

function Projects(){
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
                        strings: ['Thank you for deciding to checkout my projects.','Here are a few of the projects I have worked on.', 'To see more of my projects, checkout my github page.'],
                        autoStart: true,
                        loop: true,
                    }}
                    /> 
                    
                </div>
            <Grid container spacing={10} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2}}> 
         

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


            </Grid>
            </>

    )
}

export default Projects;