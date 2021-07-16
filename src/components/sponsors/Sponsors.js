import react, {useState, useEffect} from 'react'
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "../../css/sponsors.css";
import { sponsorObjectArr } from "../../lists/sponsor-list";

import DragonDivder from "../../images/dragon-divider.png";

import FancyBorder from '../../images/fancy-purple-divider.png'

function Sponsors() {
  const [mode, setMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" :"light"
  );

  const [image, setImage] = useState(mode === 'light'? DragonDivder : FancyBorder)

  useEffect(() => {
    const modeMe = (e) => {
      setMode(e.matches ? "dark" : "light");
    }  
    setImage(mode === 'light'? DragonDivder : FancyBorder)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', modeMe);
    return window.matchMedia('(prefers-color-scheme: dark)').removeListener(modeMe);
  }, []);

  return (
    <>
      <div className="sponsors-container">
        <img className="divider" src={image} alt="Dragon Divider" />
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
