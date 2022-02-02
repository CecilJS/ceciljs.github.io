import ProjectDetails from "../components/ProjectDetails"
import tendercrown from '../images/tendercrownpage.png';
import { Typography} from "@mui/material";


const PROJECTDATA = [
    {
        pictureUrl: tendercrown,
        name: "Tender Crown",
        role: "Full Stack Developer",
        description: "Tender Crown is a full service salon situated in the Reading Area. Their approach to haircare stands apart from all the salons in the Reading area and beyond.",
        type: "Salon Booking Application",
        brand: "Tender Crown",
        deliverables: "Salon Booking Application"

    },
    {
        pictureUrl: tendercrown,
        name: "Tender Crown",
        role: "Full Stack Developer",
        description: "Tender Crown is a full service salon situated in the Reading Area. Their approach to haircare stands apart from all the salons in the Reading area and beyond.",
        type: "Salon Booking Application",
        brand: "Tender Crown",
        deliverables: "Salon Booking Application"

    },
    {
        pictureUrl: tendercrown,
        name: "Tender Crown",
        role: "Full Stack Developer",
        description: "Tender Crown is a full service salon situated in the Reading Area. Their approach to haircare stands apart from all the salons in the Reading area and beyond.",
        type: "Salon Booking Application",
        brand: "Tender Crown",
        deliverables: "Salon Booking Application"

    }
];

function CaseStudy(){
    


    return (
       <>
       <Typography
       sx={{justifyContent: "center", alignItems: "center", textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", color: "#CAA85D", mt: "2rem"}}
       >Case Studies</Typography>
        {
            PROJECTDATA.map(project=> ( 
            <ProjectDetails
                pictureUrl={project.pictureUrl}
                name={project.name}
                role={project.role}
                description={project.description}
                type={project.type}
                brand={project.brand}
                deliverables={project.deliverables}
            />
            ))
          }
       </>
       
    )
}

export default CaseStudy;