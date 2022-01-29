import { Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import { useTransition, animated } from 'react-spring';

/**
 * component, height, url, alt, title, description, website, learnMore
    create an array of objects with the following properties:
    map through the array of objects and return a card for each object
 * 
 */

function ProjectDisplayCard(props){
    const transition = useTransition(props.showProjects, {

        from: { opacity: 0, transform: 'translate3d(0, -80px, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)', delay: 500 }

    });

    return(
    <Grid item xs={12} sm={12} md={6} lg={6} xl={4} >
    {transition((style, item) => props.showProjects ? (
        <animated.div style={style}>
        <Card sx={{ maxWidth: 345, ml: 10 }}>
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
            <Button size="small">{props.website}</Button>
            <Button size="small">{props.learnMore}</Button>
        </CardActions>
        </Card>
        </animated.div>
        ) : null)}
    </Grid>
    )
}

export default ProjectDisplayCard;