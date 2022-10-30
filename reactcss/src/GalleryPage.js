import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./Styles/Gallery.css"
import img1 from "./images/1.webp"
import img2 from "./images/2.webp"
import img3 from "./images/3.webp"
import img4 from "./images/4.webp"
import img5 from "./images/5.webp"
import img6 from "./images/6.webp"
import img7 from "./images/7.webp"
import img8 from "./images/8.webp"
import img9 from "./images/9.webp"

import { useState } from 'react';

const GalleryPage = () => {

  const [Index, setIndex] = useState(-1);  

  const imageSlide = [
    {
      src: img1,
      title: "Entrance", description: "Check in and Check out steps to our club" 
    },
    
    {
      src: img2,
      title: "Inside View", description: "View of king's restaurant and bar" 
    },
    {
      src: img3,
      title: "Drinks and beverages", description: "Bar and drink place of our club" 
    },
    {
        src: img4,
        title: "DJ", description: "Dancing area" 
    },
    {
        src: img5,
        title: "DJ", description: "Dancing area 2" 
    },
    {
        src: img6,
        title: "Sitting area", description: "A seprate area for our customer to sit and have banter talks" 
    },
    {
        src: img7,
        title: "Sitting area", description: "A seprate area for our customer to sit and have banter talks 2" 
    },
    {
      src: img8,
      title: "Sitting area", description: "A seprate area for our customer to sit and have banter talks 2" 
    },
   {
        src: img9,
        title: "Sitting area", description: "A seprate area for our customer to sit and have banter talks 2" 
    },
  ]

  const photos = [
    {
        src: img1,
        width: 400,
        height: 300
    },
    {
        src: img2,
        width: 100,
        height: 100
    },
    {
        src: img3,
        width: 400,
        height: 300
    },
    {
        src: img4,
        width: 800,
        height: 600
    },
    {
        src: img5,
        width: 100,
        height: 100
    },
    {
        src: img6,
        width: 400,
        height: 300
    },
    {
        src: img7,
        width: 600,
        height: 400
    },
     {
        src: img8,
        width: 400,
        height: 300
    },
     {
        src: img9,
        width: 400,
        height: 300
    }
  ]
  
  return (

    <>
    
    <PhotoAlbum
        layout="columns"
        photos={photos}
        columns={(containerWidth) => {
            if (containerWidth < 400) return 2;
            if (containerWidth < 800) return 3;
            return 4;
        }}
        onClick={(event, photo, index) => setIndex(index)}
        componentsProps={{ imageProps: { loading: "lazy" } }}
      />

      <Lightbox
        open={Index >= 0}
        index={Index}
        close={() => setIndex(-1)}
        slides={imageSlide}
        plugins={[Captions,Fullscreen,Slideshow,Thumbnails]}

        thumbnails = {
            {
                borderRadius:10
            }
        }
      />
    
    </>

  )

}

export default GalleryPage