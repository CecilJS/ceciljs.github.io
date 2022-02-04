import { Typography} from "@mui/material";

function CaseStudyTitle(){
    return(
        <>
        <Typography variant="h2"
            sx={{justifyContent: "center", 
            alignItems: "center", 
            textAlign: "center", 
            fontSize: "2.5rem", 
            fontWeight: "bold", 
            color: "#CAA85D", 
            mt: "2rem"}}
            >
                Case Study
        </Typography>
        <Typography variant="body1"
            sx={{justifyContent: "center", 
            alignItems: "center", 
            textAlign: "center",
            fontWeight: "bold",  
            color: "#CAA85D", 
            mt: "1rem"}}
            >
            Below is a case study of a project I worked on
        </Typography>
       </>
    )
}

export default CaseStudyTitle;