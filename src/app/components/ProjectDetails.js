import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";




function ProjectDetails(props){

    return (

        <Grid container spacing={6} sx={{marginTop: 5}} >
            <Grid item xs={1} sm={1} md={1} lg={1}>
                 
            </Grid>
            <Grid item xs={10} sm={10} md={6} lg={6}>
                 <img src={props.pictureUrl} alt={props.name} style={{width: '100%'}}/>
            </Grid>
            <Grid item xs={10} sm={10} md={4} lg={4} sx={{ml:5}}>
                 <Typography variant="h3">{props.name}</Typography>
                 <Divider sx={{mb: 2}}/>
                 <Typography variant="h5" color='secondary'>{props.role}</Typography>
                 <Divider sx={{mb: 2}}/>
                 
                 <TableContainer>
                     <Table>
                         <TableBody>
                             <TableRow>
                                 <TableCell>Name</TableCell>
                                 <TableCell>{props.name}</TableCell>
                             </TableRow>
                             <TableRow>
                                 <TableCell>Description</TableCell>
                                 <TableCell>{props.description}</TableCell>
                             </TableRow>
                             <TableRow>
                                 <TableCell>Type</TableCell>
                                 <TableCell>{props.type}</TableCell>
                             </TableRow>
                             <TableRow>
                                 <TableCell>Brand</TableCell>
                                 <TableCell>{props.brand}</TableCell>
                             </TableRow>
                             <TableRow>
                                 <TableCell>Deliverables</TableCell>
                                 <TableCell>{props.deliverables}</TableCell>
                             </TableRow>
                         </TableBody>
                     </Table>
                 </TableContainer>
                 </Grid>
                 
                 <Grid item xs={1} sm={1} md={1} lg={1}>
                    
                 </Grid>
            
          </Grid>
          
       
         )
     
}

export default ProjectDetails;