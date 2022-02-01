import React, {useState, useEffect} from 'react';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import ceciljs from '../images/Ceciljs.png';
import ceciljssm from '../images/ceciljs-sm.png';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useSpring, animated, useTransition } from 'react-spring';
import Typewriter from 'typewriter-effect';

export default function Home (){
   const [showImage, setShowImage] = useState(false);
   const [innerWidth, setInnerWidth] = useState({ width: window.innerWidth});
   const transition = useTransition(showImage, {

      from: { opacity: 0, transform: 'translate3d(-120px, 0, 0)' },
      enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)', delay: 500 }

  });


   const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 500 })

   useEffect(() => {

      setShowImage(true);
  
  } , [showImage]);


   // Listening to the window size and changing the state of the navbar
   useEffect(() => {
      function handleResize() {
        setInnerWidth({
          width: window.innerWidth
            })   
         } 
      window.addEventListener('resize', handleResize);
      return _ => {window.removeEventListener('resize', handleResize)};
    })

    return (
    <animated.main style={props}>
    <Grid container>
    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>

   </Grid>
    <Grid item xs={10} sm={10} md={5} lg={5} xl={5} sx={{ mt: 15}}>
      <Typography variant='h1'sx={{ mt: 5, fontWeight: 'bold'}}>
         Hello there!
      </Typography>
      <Typography variant='h5' sx={{ mt: 5}} >
      <Typewriter
      options={{
         strings: [ 'Welcome to my page.', ' My name is Cecil.', 'And I am a software engineer.' , 'I am also a team player.'],
         autoStart: true,
         loop: true,
      }}
      />   
      </Typography>
      <Typography variant='h5' sx={{mt: 5, fontWeight: 'bold'}} >
         Want to know more about me?
      </Typography>
      <Button variant="contained" to="/about"  component={Link} sx={{mt: 5, fontWeight: 'bold', bgcolor: "#003333", }}>Read More</Button>
      </Grid>
      <Grid item xs={10} sm={10} md={5} lg={5} xl={5} sx={{ml: 5, mt: 5}}>
      {transition((style, item) => showImage ? (
      <animated.img 
        src={innerWidth.width < 800 ? ceciljssm : ceciljs}
        alt="cecil"
        style={style}
       
      /> ) : null)}
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>

      </Grid>
                 
    </Grid>
    </animated.main>
    )
}