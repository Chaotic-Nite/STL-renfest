import React from "react";
import IntroPage from "../components/homepage-content/intro/Intro";
import Warning_Sign from "../components/homepage-content/warning/Warning";
import PhotoBanner from "../components/photobanner/PhotoBanner";

function Home() {
  return (
    <>
      <PhotoBanner />
      <Warning_Sign />
      <IntroPage />
    </>
  );
}

export default Home;
