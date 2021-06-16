import { Slide } from "react-slideshow-image";
import photoOne from '../../images/banner-images/one.jpg'
import photoTwo from '../../images/banner-images/two.jpg'
import photoThree from '../../images/banner-images/three.jpg'
import photoFour from '../../images/banner-images/four.jpg'
import "../../css/photobanner.css";

function PhotoBanner() {
  const slideImages = [photoOne, photoTwo, photoThree, photoFour];

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
