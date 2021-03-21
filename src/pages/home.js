import React from "react";
import IntroPage from "../components/homepage-content/intro/Intro";
import WarningSign from "../components/homepage-content/warning/Warning";
import PhotoBanner from "../components/photobanner/PhotoBanner";
import Sponsors from "../components/sponsors/Sponsors";

function Home() {
  return (
    <>
      <PhotoBanner />
      <WarningSign />
      <IntroPage />
      <Sponsors />
    </>
  );
}

export default Home;
