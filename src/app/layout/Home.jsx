import React from 'react';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import MyButton from '../components/Button';
import MyAvatar from '../components/MyAvatar';
import { Link } from "react-router-dom";
import { useSpring, animated} from 'react-spring';
import Typewriter from 'typewriter-effect';
export default function Home (){

    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 500 })

    return (
        <animated.main style={props}>
            <Grid container sx={{ mb: 5}}>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                </Grid>
                <Grid item xs={10} sm={10} md={5} lg={5} xl={5} sx={{ mt: 5}}>
                    <Typography variant='h1' sx={{ mt: 2, fontWeight: 'light', color: '#CAA85D',  fontSize: '3rem'}}>
                        Searching for Elegance in Every Algorithm.
                    </Typography>
                    <Typography variant='h5' sx={{ mt: 5}} >
                        <Typewriter
                            options={{
                                strings: [ 'Hi there!', ' My name is Cecil.', 'I am a Data Scientist.', 'I love to explore algorithms and build cool things.'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Typography>
                    <Typography variant='h5' sx={{mt: 5, fontWeight: 'bold', color: '#CAA85D'}} >
                        Want to know more about me?
                    </Typography>
                    <MyButton variant="contained" to="/about"  component={Link} name="Read More"/>
                </Grid>
                <Grid item xs={10} sm={10} md={5} lg={5} xl={5} sx={{ml: 3, mt: 8}}>
                    <MyAvatar/>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>

                </Grid>

            </Grid>
        </animated.main>
    )
}