import ProjectDetails from "../components/ProjectDetails"
import CaseStudyTitle from "../components/CaseStudyTitle";
import {CASESTUDYDATA} from "../api/DATA"




function TheTalkative(){
    


    return (
       <>
        <CaseStudyTitle/>
        {
            CASESTUDYDATA.map((project,index) => ( 
                project.name === "The Talkative" ?
            (<ProjectDetails
                key={index}
                pictureUrl={project.pictureUrl}
                name={project.name}
                sector={project.sector}
                thechallenge={project.thechallenge}
                thesolution={project.thesolution}
                theresults={project.theresults}
                satisfaction={project.satisfaction}
               
            />) : null
            )
            
            )
          }
       </>
       
    )
}

export default TheTalkative;