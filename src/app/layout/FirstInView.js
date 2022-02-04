import ProjectDetails from "../components/ProjectDetails"
import CaseStudyTitle from "../components/CaseStudyTitle";
import {CASESTUDYDATA} from "../api/DATA"




function FirstInView(){
    


    return (
       <>
        <CaseStudyTitle/>
        {
            CASESTUDYDATA.map((project,index) => ( 
                project.name === "1st In View Systems" ?
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

export default FirstInView;