import { Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import { useTransition, animated } from 'react-spring';


/**
 *  component, height, url, alt, title, description, website, learnMore
    create an array of objects with the following properties:
    map through the array of objects and return a card for each object
 * 
 */

function ProjectDisplayCard(props){
    const transition = useTransition(props.showProjects, {

        from: { opacity: 0, transform: 'translate3d(-80px, 0, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)', delay: 500 }

    });

    const AnimatedGrid = animated(Grid);
    

    return(
        <>
    {transition((style, item) => props.showProjects ? (
        <AnimatedGrid style={style} item xs={11} sm={11} md={12} lg={3.5} xl={3.5} sx={{display: 'flex', justifyContent: 'space-around'}}>
            <Card  sx={{ maxWidth: 345 }} >
            <CardMedia
                component={props.component}
                height={props.height}
                image={props.url}
                alt={props.alt}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{color: "#003333", fontWeight: "bold"}} >{props.website}</Button>
                <Button size="small" sx={{color: "#003333", fontWeight: "bold"}} >{props.learnMore}</Button>
            </CardActions>
            </Card>
        </AnimatedGrid>
        ): null)}
        </>
      
  
    );
}

export default ProjectDisplayCard;