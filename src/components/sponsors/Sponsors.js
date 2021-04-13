import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "../../css/sponsors.css";
import { sponsorObjectArr } from "../../lists/sponsor-list";

import DragonDivder from "../../images/dragon-divider.png";

function Sponsors() {
  return (
    <>
      <div className="sponsors-container">
        <img className="divider" src={DragonDivder} alt="Dragon Divider" />
        <h2>Our Sponsors</h2>
        <Carousel slidesPerPage={3} autoPlay={3000} infinite>
          {sponsorObjectArr.map((sponsor) => {
            return (
              <div key={sponsor.alt} className="slide">
                <a href={sponsor.link} target="_blank" rel="noreferrer">
                  <img src={sponsor.img} alt={sponsor.alt} />
                </a>
              </div>
            );
          })}
        </Carousel>{" "}
      </div>
    </>
  );
}

export default Sponsors;
