import React, {useState, useEffect} from 'react';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { animated, useTransition } from 'react-spring';


  

function Privacy(){
    const [privacyPage, setPrivacyPage] = useState(false);
    const transition = useTransition(privacyPage, {
  
       from: { opacity: 0, transform: 'translate3d(-120px, 0, 0)' },
       enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)', delay: 500 }
  
    });
  
    const AnimatedGrid = animated(Grid);
  
    useEffect(() => {
  
        setPrivacyPage(true);
  
    } , [privacyPage]);
  

    return(
        <>
        {transition((style, item) => privacyPage ? (
        <AnimatedGrid style={style} container>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>

        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} >
            <Typography variant='h2' sx={{ml: 10, mr: 10, mt: 1}}>
            Privacy Policy
            </Typography>
            <Typography variant='body1' sx={{ ml: 10, mr: 10, mt: 2}} >
                Last updated: September 29, 2020
                This Privacy Policy describes Our policies and procedures on the collection, 
                use and disclosure of Your information when You use the Service and tells 
                You about Your privacy rights and how the law protects You.
                We use Your Personal data to provide and improve the Service. 
                By using the Service, You agree to the collection and use of 
                information in accordance with this Privacy Policy. 
             </Typography>
             <Typography variant='h3' sx={{ ml: 10, mr: 10, mt: 2}} >
             Interpretation and Definitions
             </Typography> 
             <Typography variant='h4' sx={{ml: 10, mr: 10, mt: 1}}>
                Interpretation
            </Typography>
         
             <Typography variant='body1' sx={{ ml: 10, mr: 10, mt: 2}} >
             The words of which the initial letter is capitalized have meanings defined under the following conditions. 
             The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
             </Typography>
             <Typography variant='h4' sx={{ml: 10, mr: 10, mt: 1}}>
                Definitions
            </Typography>
            <Typography variant='body1' sx={{ml: 10, mr: 10, mt: 1}}>
                For the purposes of this Privacy Policy:
                Account means a unique account created for You to access our Service or parts of our Service.
                Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to The Talkative.
                Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
                Country refers to: United Kingdom
                Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.
            </Typography>
            <Typography variant='body1' sx={{ml: 10, mr: 10, mt: 1}}>
                Personal Data is any information that relates to an identified or identifiable individual.
                Service refers to the Website.
                Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
            </Typography>
            <Typography variant='body1' sx={{ml: 10, mr: 10, mt: 1}}>
                Third-party Social Media Service refers to any website or any social network website through which a User can log in or create an account to use the Service.
                Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                Website refers to The Talkative, accessible from The Talkative
                You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
            </Typography>
            <Typography variant='h4' sx={{ml: 10, mr: 10, mt: 1}}>
                Collecting and Using Your Personal Data
            </Typography>
            <Typography variant='h5' sx={{ml: 10, mr: 10, mt: 1}}>
                Types of Data Collected
            </Typography>
             <Typography variant='body1' sx={{ ml: 10, mr: 10, mt: 3, fontWeight: 'bold'}} >
                Personal Data
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:

                Email address
                First name and last name
                Usage Data
             </Typography>
             <Typography variant='h5' sx={{ml: 10, mr: 10, mt: 1}}>
                Retention of Your Personal Data
            </Typography>
            <Typography variant='body1' sx={{ml: 10, mr: 10, mt: 1}}>
                We will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. 
                We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, 
                if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.

                The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, 
                except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated 
                to retain this data for longer time periods.
            </Typography>
            <Typography variant='h5' sx={{ml: 10, mr: 10, mt: 1}}>
                Disclosure of Your Personal Data
            </Typography>
            <Typography variant='body1' sx={{ml: 10, mr: 10, mt: 1}}>
                If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. 
                We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
            </Typography>
            <Typography variant='h5' sx={{ml: 10, mr: 10, mt: 1}}>
                Law enforcement
            </Typography>
            <Typography variant='body1' sx={{ml: 10, mr: 10, mt: 1}}>
                Under certain circumstances, We may be required to disclose 
                Your Personal Data if required to do so by law or in response 
                to valid requests by public authorities (e.g. a court or a government agency).
            </Typography>
            <Typography variant='h5' sx={{ml: 10, mr: 10, mt: 1}}>
                Other legal requirements
            </Typography>
            <Typography variant='body1' sx={{ml: 10, mr: 10, mt: 1}}>
                We may disclose Your Personal Data in the good faith belief that such action is necessary to:

                Comply with a legal obligation
                Protect and defend the rights or property of the Company
                Prevent or investigate possible wrongdoing in connection with the Service
                Protect the personal safety of Users of the Service or the public
                Protect against legal liability
            </Typography>
            <Typography variant='h5' sx={{ml: 10, mr: 10, mt: 1}}>
                Links to Other Websites
            </Typography>
            <Typography variant='body1' sx={{ml: 10, mr: 10, mt: 1}}>
                Our Service may contain links to other websites that are not operated by Us. 
                If You click on a third party link, You will be directed to that third party's site. 
                We strongly advise You to review the Privacy Policy of every site You visit.

                We have no control over and assume no responsibility for the content, 
                privacy policies or practices of any third party sites or services.
            </Typography>
            <Typography variant='h5' sx={{ml: 10, mr: 10, mt: 1}}>
                Changes to this Privacy Policy
            </Typography>
            <Typography variant='body1' sx={{ml: 10, mr: 10, mt: 1}}>
                We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.

                We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.

                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </Typography>
            <Typography variant='h5' sx={{ml: 10, mr: 10, mt: 1}}>
                Contact Us
            </Typography>
            <Typography variant='body1' sx={{ml: 10, mr: 10, mt: 1}}>
                If you have any questions about this Privacy Policy, You can contact us:

                By email: dpo@thealkative.io
            </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>

                </Grid>
          
        </AnimatedGrid>) : null)}
        </>

    )
}

export default Privacy;