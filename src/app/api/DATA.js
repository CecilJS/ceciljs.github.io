import tendercrowngif from '../images/tendercrown.gif';
import tendercrown from '../images/tendercrownpage.png';
import kidzapp from '../images/kidzapp.png';
import thetalkative from '../images/thetalkative.png';
import jaydalinroyal from '../images/jaydalinroyal.png';
import firststinview from '../images/1stinview.png';
import elegance from '../images/traditionalelegance.png';
import { Link } from "react-router-dom";

export const CASESTUDYDATA = [
    {
        pictureUrl: tendercrowngif,
        name: "Tender Crown",
        sector: "Hair Salon",
        
        thechallenge: "Since their inception in 2017, Tender Crown knew that in order to thrive, they needed a strong digital presence. Therefore, they reached out for help. Since they did not already have a digital presence, this project involved developing their entire brands identity, establishing their social media presence, and a complete design and development of a salon booking web application. The challenge was to create a strong digital presence that could help them in their digital transformation.",

        thesolution: "Together with a team of UX and Graphic designers, I led Tender Crown's project and coordinated the creation of a brand identity for their salon. We also established Tender Crown's social media presence which enabled them to reach their target audience and keep them engaged. An easy to use booking system was also developed for and configured for Tender Crown which continues to be used till this day.",
        
        theresults: "The results have been outstanding. Tender Crown has a strong online presence and is able to reach their target audience. They are also able to keep their customers engaged and keep them coming back for more appointments. The salon booking system is also easy to use and easy to maintain. The website is also responsive and can be viewed on any device."
        

    },
    {
        pictureUrl: elegance,
        name: "Traditional Elegance",
        sector: "Fashion Shop",

        thechallenge: "Traditional Elegance is a start-up in the heart of London. They were looking to create a brand that is a reflection of their business and a reflection of their customers. The challenge was to develop an e-commerce store that can help them reach a global audience. This was a challenge that required the development of an application that serve a good user experience and improved customer satisfaction. This was no easy task.",

        thesolution: "I led the team that was worked on bringing the business ideas of Traditional Elegance to life. This involved the development of design mock-ups, iterating over design ideas, and taking ownership of the project from the project's initiation through to deployment.",

        theresults: "Although still growing as a business, the e-commerce store has been successful. The application is now available on the web and is very easy to use. Traditional Elegance has been able to reach a wider audience as result of the e-commerce store which was developed for them."
        

    },
    {
        pictureUrl: thetalkative,
        name: "The Talkative",
        sector: "Software Agency",

        thechallenge: "The Talkative is a UK based software agency. This is a start-up that I co-founded with a very good friend of mine who is a concept Illustrator and UX designer. The challenge was to create a brand that reflected our personality as a brand as well as to showcase our creativity.",
        thesolution: " As the lead developer, I was responsible for the development of the web application. I converted the design mock-ups into a web application that could be used by our clients. The entire application was built using React on the front-end and with node and express as the backend.",

        theresults: "The web application gained a lot of traction and as a result, we were able to reach a wider clientele. As a start-up, we established a strong brand identity and a strong brand image. We received a lot of positive comments about our web application being a great way to showcase our creativity and personality."
      

    },

    {
        pictureUrl: kidzapp,
        name: "Kidz App",
        sector: "Computer Technology Store",
        thechallenge: "Kidz App is a computer technology store that sells a wide range of computer components and accessories for children between the ages of 7 - 15. This web application is in fact a solution to my 2nd year project as part of my web based development module. The challenge was to create a web-based solution which includes the ability to record customer enquiries and online orders that are placed through the e-commerce store. The web-based solution also needed to integrate multimedia techniques, web services and e-marketing techniques.",

        thesolution: "I developed Kidz App, a e-commerce store which includes the ability to record customer enquiries and online orders. The front end of this application was built with React and Redux, and the backend was built with .NET. I built a custom API which contained my product details which I called from the front end using Axios. This is a project that I am really proud of.",

        theresults: "The web-based solution met all the assessment criteria of the project and as a result, I secured a pass on that module."
       

    },
    {
        pictureUrl: jaydalinroyal,
        name: "Jaydalin Royal Limited",
        sector: "Logistics Company",
        thechallenge: "Jaydalin Royal is a logistics company all the way in West Africa, Ghana with a focus on import and export of goods. The challenge was to create a web application that incorporated multi-media and also with the ability to client enquiries. Jaydalin Royal Limited did not have any digital presence and therefore involved a lot of research.",

        thesolution: "I led the project from the initial stages of the application's development lifecycle through to deployment. I converted the design mock-ups into a web application that could be used by both existing and potential clients from all around the world.",

        theresults: "As a result of this project that I led, a strong brand identity was created for Jaydalin Royal Limited. Additionally, the web application has enabled Jaydalin Royal Limited to reach a global audience with the potential of increasing their bottom line. Many comments have been received by the Jaydalin Royal Limited regarding the web application's design. The web application is also user friendly, responsive and has led to great customer satisfaction."
     

    },

    {
        pictureUrl: firststinview,
        name: "1st In View Systems",
        sector: "Security Systems Provider",
        thechallenge: "1st In View Systems is a security systems provider in the UK. This company already had a digital presence but needed a redesign of their website to ensure that the company's website aligns with modern trends and industry standards. The challenge was develop a simple single-paged website that is fast and user friendly with the ability to manage client enquiries. The website also needed to integrate multimedia techniques and e-marketing techniques.",

        thesolution: "This is exactly what I did for 1st In View. I led the project from the initial stages of the website's development lifecycle through to deployment. Alongside other designers, I converted the design mock-ups into the desired website which met the needs of 1st In View.",

        theresults: "The website met the needs 1st In View Systems and as a result, a lasting business relationship was created. The website is also user friendly, responsive and has led to great customer satisfaction."
      

    }
];



export const PROJECTS= [
    {
        key: "Traditional Elegance",
        component: Link,
        height: "240",
        url: elegance,
        alt: "Traditional Elegance",
        title: "Traditional Elegance",
        description: "Traditional Elegance is a British brand specialising in Handmade tailoring and accessories for men. The brand provides the assurance of quality, merit and modernism.",
        website: "Website",
        learnMore: "Case Study",
        site: "https://traditionalelegance.co.uk/",
        to: "/casestudy/traditionalelegance"

    },
    {
        key: "Kidz App",
        component: Link,
        height: "240",
        url: kidzapp,
        alt: "Kidz App",
        title: "Kidz App",
        description: "Kidz App is a ficticious organisation that produces computing products for children between the ages of 7 - 15. This web application gives its internal users the ability to record customer enquiries. ",
        website: "Website",
        learnMore: "Case Study",
        site: "https://github.com/CecilJS/Kidzapp",
        to: "/casestudy/kidzapp"
        
    },
    {
        key: "Tender Crown",
        component: Link,
        height: "240",
        url: tendercrown,
        alt: "tendercrown",
        title: "Tender Crown",
        description: "Tender Crown is a full service salon situated in the Reading Area. Their approach to haircare stands apart from all the salons in the Reading area and beyond.",
        website: "Website",
        learnMore: "Case Study",
        site: "https://tendercrown.co.uk/",
        to: "/casestudy/tendercrown"
        
    },
    {
        key: "The Talkative",
        component: Link,
        height: "240",
        url: thetalkative,
        alt: "The Talkative",
        title: "The Talkative",
        description: "The Talkative was established in 2017 as a virtual hub where Software developers, UX designers and Graphic designers collaborate on projects. This is a startup that I co-founded.",
        website: "Website",
        learnMore: "Case Study",
        site: "https://thetalkative.uk/",
        to: "/casestudy/thetalkative"
 
    },
    {
        key: "Jaydalin Royal",
        component: Link,
        height: "240",
        url: jaydalinroyal,
        alt: "Jaydalin Royal Limited",
        title: "Jaydalin Royal Limited",
        description: "Jaydalin Royal Limited is a Logistics company that provides expert services in the import and export industry in Ghana. They hired me to develop a website for their business, which I delivered on time.",
        website: "Website",
        learnMore: "Case Study",
        site: "https://jaydalinroyal.com/",
        to: "/casestudy/jaydalinroyal"
     
    },
    {
        key: "1st In View",
        component: Link,
        height: "240",
        url: firststinview,
        alt: "1st In View Systems",
        title: "1st In View Systems",
        description: "1st In View Systems was established in 1997, specialises in Intruder Alarms, Access control, CCTV and Door Entry Systems. They hired me to develop a website for their business, which I delivered on time. ",
        website: "Website",
        learnMore: "Case Study",
        site: "https://1stinview.co.uk/",
        to: "/casestudy/firstinview"
    
        
    }
    
    
    ]