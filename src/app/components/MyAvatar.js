import React, {useState, useEffect} from 'react';
import { animated, useTransition } from 'react-spring';
import ceciljs from '../images/itscecil.png';
import ceciljssm from '../images/cecilsm.png';

function MyAvatar(){
    const [showImage, setShowImage] = useState(false);
    const [innerWidth, setInnerWidth] = useState({ width: window.innerWidth});
    const transition = useTransition(showImage, {
 
       from: { opacity: 0, transform: 'translate3d(-120px, 0, 0)' },
       enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)', delay: 500 }
 
   });
 

 
    useEffect(() => {
 
       setShowImage(true);
   
   } , [showImage]);

    // Listening to the window size and changing the state of the navbar
    useEffect(() => {
        function handleResize() {
          setInnerWidth({
            width: window.innerWidth
              })   
           } 
        window.addEventListener('resize', handleResize);
        return _ => {window.removeEventListener('resize', handleResize)};
      })

    return(
        <>
        {transition((style, item) => showImage ? (
            <animated.img 
              src={innerWidth.width < 800 ? ceciljssm : ceciljs}
              alt="cecil"
              style={style}
            /> ) : null)}
       </>
    )
}

export default MyAvatar;