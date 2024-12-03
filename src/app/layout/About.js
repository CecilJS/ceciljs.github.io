// import React, {useState, useEffect} from 'react';
// import { Typography } from "@mui/material";
// import Grid from '@mui/material/Grid';
import MyButton from '../components/Button';
import { Link } from "react-router-dom";
import { animated, useTransition } from 'react-spring';
import MyAvatar from '../components/MyAvatar';

import React from 'react';
import { Container, Grid, Typography, Box, Chip, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
  

// function About(){
//     const [aboutPage, setAboutPage] = useState(false);
//     const transition = useTransition(aboutPage, {
//
//        from: { opacity: 0, transform: 'translate3d(-120px, 0, 0)' },
//        enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)', delay: 500 }
//
//    });
//
//    const AnimatedGrid = animated(Grid);
//
//    useEffect(() => {
//
//     setAboutPage(true);
//
//  } , [aboutPage]);
//
//
//
//     return(
//        <>
//         {transition((style, item) => aboutPage ? ( <AnimatedGrid style={style} container sx={{flexWrap: 'wrap'}}>
//             <Grid item xs={1} sm={1} md={2} lg={2} xl={2}>
//
//             </Grid>
//             <Grid item xs={10} sm={10} md={6} lg={6} xl={6} >
//                 <Typography variant='h2' sx={{letterSpacing: 1, lineHeight: 1.5, color:'#CAA85D'}}>
//                 About me
//                 </Typography>
//
//                 <Typography variant='body1'  sx={{letterSpacing: 1, lineHeight: 1.5, mt: 3}} >
//                 Hey there! My name is Cecil, and I am a software engineer
//                 with a keen interest in the intricate details of software
//                 and computer systems. I have a very curious mind by nature,
//                 and this curiosity is what fuels my drive and passion for learning.
//                 I am proficient in JavaScript and Python, and I am currently learning to love
//                 C# and Go. I am also a team player, and I am always looking to learn new things.
//                 </Typography>
//                 <Typography variant='body1' sx={{letterSpacing: 1, lineHeight: 1.5, mt: 5}}>
//                 Right from the start of my journey in the software industry, I
//                 created a professional development plan for myself and have stuck to it till this day.
//                 Although my path has not neccessarily been the most direct, I have learned a lot along
//                 the way. I have learned to be patient, to be flexible, to be resilient
//                 and these qualities really help when I am debugging or refactoring my code.
//                 </Typography>
//
//                 <Typography variant='body1' sx={{letterSpacing: 1, lineHeight: 1.5, mt: 3}}>
//                 In everything I do, I like to take a scientific approach to it as
//                 I believe that is an effective way to learn anything. When I am not
//                 writing code, I am usually reading, playing basketball, or doing some
//                 charitable activity.
//                 </Typography>
//                 <Typography variant='h5' sx={{ mt: 3, color:'#CAA85D', fontWeight: 'bold'}} >
//                         Would you like to see some of my projects?
//                 </Typography>
//                 <MyButton variant="contained" to="/projects"  component={Link} name="Projects"/>
//             </Grid>
//             <Grid item xs={10} sm={10} md={2} lg={2} xl={2} sx={{ ml: 3, mt: 5}}>
            <MyAvatar/>
//             </Grid>
//         </AnimatedGrid>) : null)}
//         </>
//
//     )
// }
//
// export default About;



// Custom Styles
const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: 'center',
        marginBottom: theme.spacing(4),
    },
    skillCategory: {
        marginBottom: theme.spacing(2),
    },
    skillChip: {
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    sectionTitle: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(2),
    },
    footer: {
        textAlign: 'center',
        marginTop: theme.spacing(5),
        padding: theme.spacing(3),
        backgroundColor: theme.palette.background.default,
    },
}));

const About = () => {
    const classes = useStyles();

    return (
        <Container>
            {/* Header Section */}
            <Box className={classes.header}>
                <MyAvatar/>
                <Typography variant="h3">Cecil Jones</Typography>
                <Typography variant="h5" color="textSecondary"  sx={{ mt: 2, fontWeight: 'light', color: '#CAA85D',  fontSize: '1.3rem'}}>
                    Data Scientist | Software Engineer | Problem Solver
                </Typography>
            </Box>
            <Box sx={{ padding: 2 }}>
                <Grid container spacing={2}>
                    {/* Left Column */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" sx={{ textAlign: 'centre', mb: 5,  letterSpacing: '0.1em',
                            lineHeight: '1.5', color: '#CAA85D', fontWeight: 'bold'}} >Overview</Typography>
                        <Typography sx={{ letterSpacing: '0.05em',
                            lineHeight: '1.5'}}>
                            I am a passionate Software Engineer and Data Scientist with a strong foundation in Computer Science,
                            driven by a deep curiosity and an unwavering commitment to solving complex problems. With expertise in JavaScript, Java and Python,
                            I specialize in building efficient, scalable solutions and analyzing data to extract actionable insights.
                            I thrive in collaborative environments, where I can contribute my skills while continuously learning and evolving.
                            My goal is to leverage my technical expertise to create innovative solutions that positively impact the field of software engineering and data science.
                        </Typography>
                    </Grid>

                    {/* Right Column */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" sx={{ textAlign: 'centre', mb: 5,  letterSpacing: '0.1em',
                            lineHeight: '1.5', color: '#CAA85D', fontWeight: 'bold' }}>Interests</Typography>
                        <Typography sx={{ letterSpacing: '0.05em',
                            lineHeight: '1.5',}}>
                            Outside of my professional work, I have a deep interest in exploring emerging technologies,
                            especially in fields like artificial intelligence and quantum computing.
                            I’m an avid reader, with a particular passion for books on problem-solving, mathematics,
                            and the latest advancements in data science and software engineering.
                            In my downtime, I love experimenting with personal coding projects, building small applications that solve everyday problems.
                            I also enjoy volunteering to teach people practical skills and photography, which offer me a creative
                            escape and an opportunity to capture the world around me through a different lens.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box className={classes.header}>
                <Typography variant="h5" color="textSecondary" sx={{ textAlign: 'left', mt: 10, color: '#CAA85D', fontWeight: 'bold' }}>
                   Technical Skillset
                </Typography>
            </Box>

            {/* Skills Section */}
            <Grid container spacing={4}>
                {/* Data Analysis Skills */}
                <Grid item xs={12} md={6}>
                    <Box className={classes.skillCategory}>
                        <Typography variant="h6" className={classes.sectionTitle}>
                            Data Analysis
                        </Typography>
                        <Box>
                            <Chip label="Python" className={classes.skillChip} />
                            <Chip label="Pandas" className={classes.skillChip} />
                            <Chip label="NumPy" className={classes.skillChip} />
                            <Chip label="Matplotlib" className={classes.skillChip} />
                        </Box>
                    </Box>
                </Grid>

                {/* Machine Learning Skills */}
                <Grid item xs={12} md={6}>
                    <Box className={classes.skillCategory}>
                        <Typography variant="h6" className={classes.sectionTitle}>
                            Machine Learning
                        </Typography>
                        <Box>
                            <Chip label="TensorFlow" className={classes.skillChip} />
                            <Chip label="Keras" className={classes.skillChip} />
                            <Chip label="Scikit-Learn" className={classes.skillChip} />
                            <Chip label="XGBoost" className={classes.skillChip} />
                        </Box>
                    </Box>
                </Grid>

                {/* Data Visualization Skills */}
                <Grid item xs={12} md={6}>
                    <Box className={classes.skillCategory}>
                        <Typography variant="h6" className={classes.sectionTitle}>
                            Data Visualization
                        </Typography>
                        <Box>
                            <Chip label="Tableau" className={classes.skillChip} />
                            <Chip label="Power BI" className={classes.skillChip} />
                            <Chip label="Seaborn" className={classes.skillChip} />
                        </Box>
                    </Box>
                </Grid>

                {/* Programming Languages */}
                <Grid item xs={12} md={6}>
                    <Box className={classes.skillCategory}>
                        <Typography variant="h6" className={classes.sectionTitle}>
                            Programming Languages
                        </Typography>
                        <Box>
                            <Chip label="Python" className={classes.skillChip} />
                            <Chip label="Java" className={classes.skillChip} />
                            <Chip label="JavaScript" className={classes.skillChip} />
                            <Chip label="SQL" className={classes.skillChip} />
                            <Chip label="Groovy" className={classes.skillChip} />
                            <Chip label="Bash" className={classes.skillChip} />
                        </Box>
                    </Box>
                </Grid>

                {/* Cloud Computing */}
                <Grid item xs={12} md={6}>
                    <Box className={classes.skillCategory}>
                        <Typography variant="h6" className={classes.sectionTitle}>
                           Cloud Computing
                        </Typography>
                        <Box>
                            <Chip label="GCP" className={classes.skillChip} />
                            <Chip label="AWS" className={classes.skillChip} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Divider sx={{ marginTop: 4 }} />


        </Container>
    );
};

export default About;
