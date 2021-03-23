import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "../../css/sponsors.css";

import DragonDivder from "../../images/dragon-divider.png";

import BeardlyMan from "../../images/sponsors/beardly-man.png";
import BudLight from "../../images/sponsors/bud-light.jpg";
import FantasyShop from "../../images/sponsors/fantasy-shop.png";
import Guinness from "../../images/sponsors/guinness.png";
import Menards from "../../images/sponsors/menards.jpg";
import MidTown from "../../images/sponsors/midtown-home-improvements.jpg";
import MRVBC from "../../images/sponsors/mrvbc.png";
import Pepsi from "../../images/sponsors/pepsi.png";
import Slackers from "../../images/sponsors/slackers.png";
import AxeThrow from "../../images/sponsors/stl-axe-throwing.png";
import Subway from "../../images/sponsors/subway.jpg";

function Sponsors() {
  const sponsorObjectArr = [
    {
      link: "https://www.thebeardlyman.com/",
      img: BeardlyMan,
      alt: "Beardly Man",
    },
    {
      link: "https://www.subway.com/en-us",
      img: Subway,
      alt: "Subway",
    },
    {
      link: "https://www.midtownhomeimprovements.com/",
      img: MidTown,
      alt: "Midtown Home Improvements",
    },
    {
      link: "https://www.budlight.com/",
      img: BudLight,
      alt: "Bud Light",
    },
    {
      link: "https://www.pepsi.com/",
      img: Pepsi,
      alt: "Pepsi",
    },
    {
      link: "http://www.fantasyshoponline.com/",
      img: FantasyShop,
      alt: "Fantasy Shop",
    },
    {
      link: "https://www.bloodcenter.org/",
      img: MRVBC,
      alt: "Regional Blood Center",
    },
    {
      link: "https://www.menards.com/main/home.html",
      img: Menards,
      alt: "Menards",
    },
    {
      link: "https://www.guinness.com/en-us/",
      img: Guinness,
      alt: "Guinness",
    },
    {
      link: "http://teambuildingstl.com/",
      img: AxeThrow,
      alt: "STL Axe Throwing",
    },
    {
      link: "https://slackers.com/",
      img: Slackers,
      alt: "Slackers",
    },
  ];

  return (
    <>
      <div className="sponsors-container">
        <img className="divider" src={DragonDivder} alt="Dragon Divider" />
        <h2>Our Sponsors</h2>
        <Carousel slidesPerPage={3} autoPlay={3000} infinite>
          <div className="slide">
            <a href={sponsorObjectArr[0].link} target="_blank">
              <img
                src={sponsorObjectArr[0].img}
                alt={sponsorObjectArr[0].alt}
              />
            </a>
          </div>
          <div className="slide">
            <a href={sponsorObjectArr[1].link} target="_blank">
              <img
                src={sponsorObjectArr[1].img}
                alt={sponsorObjectArr[1].alt}
              />
            </a>
          </div>
          <div className="slide">
            <a href={sponsorObjectArr[2].link} target="_blank">
              <img
                src={sponsorObjectArr[2].img}
                alt={sponsorObjectArr[2].alt}
              />
            </a>
          </div>
          <div className="slide">
            <a href={sponsorObjectArr[3].link} target="_blank">
              <img
                src={sponsorObjectArr[3].img}
                alt={sponsorObjectArr[3].alt}
              />
            </a>
          </div>
          <div className="slide">
            <a href={sponsorObjectArr[4].link} target="_blank">
              <img
                src={sponsorObjectArr[4].img}
                alt={sponsorObjectArr[4].alt}
              />
            </a>
          </div>
          <div className="slide">
            <a href={sponsorObjectArr[5].link} target="_blank">
              <img
                src={sponsorObjectArr[5].img}
                alt={sponsorObjectArr[5].alt}
              />
            </a>
          </div>
          <div className="slide">
            <a href={sponsorObjectArr[6].link} target="_blank">
              <img
                src={sponsorObjectArr[6].img}
                alt={sponsorObjectArr[6].alt}
              />
            </a>
          </div>
          <div className="slide">
            <a href={sponsorObjectArr[7].link} target="_blank">
              <img
                src={sponsorObjectArr[7].img}
                alt={sponsorObjectArr[7].alt}
              />
            </a>
          </div>
          <div className="slide">
            <a href={sponsorObjectArr[8].link} target="_blank">
              <img
                src={sponsorObjectArr[8].img}
                alt={sponsorObjectArr[8].alt}
              />
            </a>
          </div>
          <div className="slide">
            <a href={sponsorObjectArr[9].link} target="_blank">
              <img
                src={sponsorObjectArr[9].img}
                alt={sponsorObjectArr[9].alt}
              />
            </a>
          </div>
          <div className="slide">
            <a href={sponsorObjectArr[10].link} target="_blank">
              <img
                src={sponsorObjectArr[10].img}
                alt={sponsorObjectArr[10].alt}
              />
            </a>
          </div>
        </Carousel>{" "}
      </div>
    </>
  );
}

export default Sponsors;
