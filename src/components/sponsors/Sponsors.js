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
