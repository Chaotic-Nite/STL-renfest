import Carousel from 'react-bootstrap/Carousel'
import photoOne from '../../images/banner-images/one.jpg'
import photoTwo from '../../images/banner-images/two.jpg'
import photoThree from '../../images/banner-images/three.jpg'
import photoFour from '../../images/banner-images/four.jpg'
import "../../css/photobanner.css";

function PhotoBanner() {
  const slideImages = [photoOne, photoTwo, photoThree, photoFour];

  return (
    <Carousel className="slide-container">
        {slideImages.map((each, index) => (
          <Carousel.Item key={index} className="each-slide">
            <img
              className="photo"
              src={each}
              alt={each + ' ' + index}
            >
            </img>
            <Carousel.Caption className="photo-text">
              <h1>
                Photo by Joe Henley
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default PhotoBanner;
