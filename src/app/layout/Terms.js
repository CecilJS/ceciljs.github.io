import React, {useState, useEffect} from 'react';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { animated, useTransition } from 'react-spring';



function Terms(){
  const [termsPage, setTermsPage] = useState(false);
  const transition = useTransition(termsPage, {

     from: { opacity: 0, transform: 'translate3d(-120px, 0, 0)' },
     enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)', delay: 500 }

  });

  const AnimatedGrid = animated(Grid);

  useEffect(() => {

    setTermsPage(true);

  } , [termsPage]);


    return(
      <>
      {transition((style, item) => termsPage ? (
        <AnimatedGrid style={style} container>
          <Grid item xs={1} sm={1} md={2} lg={2} xl={2}>

          </Grid>
        <Grid item xs={10} sm={10} md={6} lg={6} xl={6} >
            <Typography variant='h2' sx={{ mt: 1}}>
            Terms and Conditions
            </Typography>
            <Typography variant='body1' sx={{ mt: 1}}>
            Please read these terms and conditions ("terms and conditions", "terms") carefully before continuing to use
            this website (“website”) operated by the author of this website.
            </Typography>
            <Typography variant='h4' sx={{ mt: 1}}>
            Conditions of use
            </Typography>
            <Typography variant='body1' sx={{ mt: 1}}>
            By continuing to use this website, you confirm that you have read and reviewed these Terms and that you
            agree to comply with its content. If you do not want to be bound by the terms of this Agreement,
            you are advised to leave the website accordingly. The author of this website only grants use and access of this
            website to those who have accepted its terms.

            </Typography>
            <Typography variant='h4' sx={{ mt: 1}}>
            Privacy Policy
            </Typography>
            <Typography variant='body1' sx={{  mt: 2}} >
              Before you continue using our website, we advise you to read our privacy policy which spells out our approach to user data collection. 
              It will help you better understand the practices that are being implemented by the author of this website.
             </Typography>
             <Typography variant='h4' sx={{ mt: 1}}>
             Intellectual property
            </Typography>
             <Typography variant='body1' sx={{  mt: 2}} >
              You agree that all materials, products, and services provided on this website are the property of
              the author of this website, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all
              copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree
              that you will not reproduce or redistribute the the author of this website’s intellectual property in any way,
              including electronic, digital, or new trademark registrations.
              You grant the author of this website a royalty-free and non-exclusive license to display, use, copy, transmit, and
              broadcast the content you upload and publish. For issues regarding intellectual property claims,
              you should contact the company in order to come to an agreement.
             </Typography> 
             <Typography variant='h4' sx={{ mt: 1}}>
             Applicable law
            </Typography>
             <Typography variant='body1' sx={{  mt: 2}} >
              By visiting this website, you agree that English laws, without regard to principles of
              conflict laws, will govern these terms and conditions, or any dispute of any sort that might come
              between the author of this website and you, or its business partners and associates.
             </Typography>
             <Typography variant='h4' sx={{ mt: 1}}>
             Limitation on liability
            </Typography>
             <Typography variant='body1' sx={{  mt: 3, fontWeight: 'bold'}} >
               The author of this website is not liable for any damages that may occur to you as a result of your misuse of our website.
               The author of this website reserves the right to edit, modify, and change this Agreement at any time. This Agreement is an understanding
                between the author of this website and the users of this website, and this supersedes and replaces all prior agreements regarding
                the use of this website.
             </Typography>
               
            </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2} xl={2}>

                </Grid>
        </AnimatedGrid>) : null)}
        </>

    )
}

export default Terms;