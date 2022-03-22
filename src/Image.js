import React from "react";
import SimpleReactLightbox , {  SRLWrapper } from "simple-react-lightbox";

const Image = ({ data }) => {
  const options = {
    settings: {
      overlayColor: 'rgb(3, 0, 161);',  
      boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'
    },
    buttons: {
      backgroundColor: "#000",
      iconColor: "#000",
    },
    caption: {
      showCaption: false,
    },
  };
  return (
    <SimpleReactLightbox>
    <SRLWrapper options={options}>
    <div className="container"> 
      {data.map((img) => {
        return (
          <div key={img.id}>
          <img src={img.urls.regular} alt={img.description}  />
         </div>
        );
      })}
    </div>
    </SRLWrapper>
    </SimpleReactLightbox>
  );
};

export default Image;
