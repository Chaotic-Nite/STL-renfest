import { Slide } from "react-slideshow-image";

import "../../css/photobanner.css";

function PhotoBanner() {
  const slideImages = [
    "images/banner-images/one.jpg",
    "images/banner-images/two.jpg",
    "images/banner-images/three.jpg",
    "images/banner-images/four.jpg",
  ];
  console.log(slideImages);
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((each, index) => (
          <div key={index} className="each-slide">
            <div
              className="photo"
              id={`photo${index}`}
              style={{ backgroundImage: `url(${each})` }}
            >
              <h1 className="photo-text">Photo by Joe Henley</h1>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default PhotoBanner;
