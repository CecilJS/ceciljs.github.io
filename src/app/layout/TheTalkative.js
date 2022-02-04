import ProjectDetails from "../components/ProjectDetails"
import { Typography} from "@mui/material";
import {CASESTUDYDATA} from "../api/DATA"




function TheTalkative(){
    


    return (
       <>
       <Typography
       sx={{justifyContent: "center", alignItems: "center", textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", color: "#CAA85D", mt: "2rem"}}
       >Case Studies</Typography>
        {
            CASESTUDYDATA.map((project,index) => ( 
                project.name === "The Talkative" ?
            (<ProjectDetails
                key={index}
                pictureUrl={project.pictureUrl}
                name={project.name}
                role={project.role}
                description={project.description}
                type={project.type}
                brand={project.brand}
                deliverables={project.deliverables}
               
            />) : null
            )
            
            )
          }
       </>
       
    )
}

export default TheTalkative;