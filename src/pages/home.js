import React, { useState } from "react";
import Warning_Sign from "../components/homepage-content/warning/Warning";
import PhotoBanner from "../components/photobanner/PhotoBanner";

function Home() {
  const [state, setState] = useState(null);

  return (
    <>
      <PhotoBanner />
      <Warning_Sign />
    </>
  );
}

export default Home;
