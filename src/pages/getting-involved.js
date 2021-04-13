import SocialMedia from "../components/social-media/SocialMedia";

import { Link } from "react-router-dom";

function GettingInvolved() {
  return (
    <>
      <h1 className="page-header">Getting Involved</h1>
      <div className="margin-width">
        <div>
          <h2>Becoming Part of Experience</h2>
          <div>
            Have amazing craftsmenship? <br /> Maybe a unique and trilling show?
            <br /> Wish to help out the St Louis Renaissance Festival? <br />
            Wish to sponsor this dream? <br /> Want to become someone of the
            past or a creature for the depths of lore?
          </div>
        </div>
        <SocialMedia />
      </div>
    </>
  );
}

export default GettingInvolved;
