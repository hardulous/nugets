import React from "react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"
import img5 from "../images/5.jpg"
import img6 from "../images/6.jpg"
import img7 from "../images/7.jpg"
import img8 from "../images/8.jpg"


const Gallery = () => {

  const [open, setopen] = useState(false);

  return (

    <>

      <button
        onClick={() => {
          setopen(!open);
        }}
      >
        Open Gallery
      </button>

      <Lightbox

        styles={
            
            { container: { backgroundColor: "black" }, 
            
        }}

        open={open}
        close={() => setopen(false)}
        slides={[
          {
            src: img1,
            title: "Slide title", description: "Slide description" 
          },
          
          {
            src: img2,
            title: "Slide title", description: "Slide description" 
          },
          {
            src: img3,
            title: "Slide title", description: "Slide description" 
          },
        ]}
        
        plugins={[Captions,Fullscreen,Slideshow,Thumbnails]}

        thumbnails = {
            {
                borderRadius:10
            }
        }

      />

    </>
  );
};

export default Gallery;
