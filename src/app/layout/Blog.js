// import React, {useState, useEffect} from 'react';
// import { Typography } from "@mui/material";
// import Grid from '@mui/material/Grid';
// import MyButton from '../components/Button';
// import { Link } from "react-router-dom";
// import { animated, useTransition } from 'react-spring';
// import MyAvatar from '../components/MyAvatar';
// import axios from 'axios';
// import useRetrieveData from "../hooks/useRetrieveData";
//
//
//
//
// function Blog(){
//     const [aboutPage, setAboutPage] = useState(false);
//     const [articles, setArticles] = useState([]);
//     const transition = useTransition(aboutPage, {
//
//         from: { opacity: 0, transform: 'translate3d(-120px, 0, 0)' },
//         enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)', delay: 500 }
//
//     });
//
//     const AnimatedGrid = animated(Grid);
//
//     const token = process.env.REACT_APP_STRAPI_ARTICLES_TOKEN;
//
//     console.log('process.env.', token)
//
//     useEffect(() => {
//        axios('http://localhost:1337/api/articles', {
//            headers: {
//                Authorization: `Bearer ${token}`
//            }
//        })
//             .then(response => {
//                 console.log(response.data); // Log the response data
//                 setArticles(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);
//
//
//
//
//     return(
//         <>
//             {transition((style, item) => aboutPage ? ( <AnimatedGrid style={style} container sx={{flexWrap: 'wrap'}}>
//                 <Grid item xs={1} sm={1} md={2} lg={2} xl={2}>
//
//                 </Grid>
//                 <Grid item xs={10} sm={10} md={6} lg={6} xl={6} >
//                     <Typography variant='h2' sx={{letterSpacing: 1, lineHeight: 1.5, color:'#CAA85D'}}>
//                         {/*<div>*/}
//                         {/*    <h1>Articles</h1>*/}
//                         {/*    <ul>*/}
//                         {/*        {articles.map(article => (*/}
//                         {/*            <li key={article.id}>{'console.log(article.title)'}</li>*/}
//                         {/*        ))}*/}
//                         {/*    </ul>*/}
//                         {/*</div>*/}
//                         <h1>Blog</h1>
//                     </Typography>
//
//                 </Grid>
//                 <Grid item xs={10} sm={10} md={2} lg={2} xl={2} sx={{ ml: 3, mt: 5}}>
//                     <MyAvatar/>
//                 </Grid>
//             </AnimatedGrid>) : null)}
//         </>
//
//     )
// }
//
// export default Blog;