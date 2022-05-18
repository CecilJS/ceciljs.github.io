import React from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { useTransition, animated } from 'react-spring';

/**
 *  component, height, url, alt, title, description, website, learnMore
    create an array of objects with the following properties:
    map through the array of objects and return a card for each object
 * 
 */

function ProjectDisplayCard(props) {
  const {
    showProjects,
    height,
    url,
    alt,
    title,
    description,
    site,
    website,
    component,
    learnMore,
    to,
  } = props;
  const transition = useTransition(showProjects, {
    from: { opacity: 0, transform: 'translate3d(-80px, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)', delay: 500 },
  });

  const AnimatedGrid = animated(Grid);

  return (
    <>
      {transition((style, item) =>
        showProjects ? (
          <AnimatedGrid
            style={style}
            item
            xs={11}
            sm={11}
            md={12}
            lg={3.5}
            xl={3.5}
            sx={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height={height} image={url} alt={alt} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <CardActions>
                <a
                  href={site}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  {' '}
                  <Button size="small" sx={{ color: '#CAA85D', fontWeight: 'bold' }}>
                    {website}
                  </Button>
                </a>
                <Button
                  size="small"
                  sx={{ color: '#CAA85D', fontWeight: 'bold' }}
                  to={to}
                  component={component}
                >
                  {learnMore}
                </Button>
              </CardActions>
            </Card>
          </AnimatedGrid>
        ) : null,
      )}
    </>
  );
}

export default ProjectDisplayCard;
