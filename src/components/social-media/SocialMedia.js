import { SocialIcon } from "react-social-icons";
import SmallWarningSign from "../homepage-content/warning/SmallWarning";


const SocialMedia = () => {
  return (
    <>
    <div style={{ marginTop: "2%" }}>
      <SocialIcon
        url="https://www.facebook.com/STLRenFest/"
        network="facebook"
        className='socialLink'
        />
      <SocialIcon
        url="https://twitter.com/stlrenfest"
        network="twitter"
        className='socialLink'
        style={{ margin: "0 2%"}}
        />
      <SocialIcon
        url="https://www.pinterest.com/stlouisrenaissa/"
        network="pinterest"
        className='socialLink'
        style={{ marginRight: "2%"}}
        />
      <SocialIcon
        url="https://www.instagram.com/stlrenfest/"
        network="instagram"
        className='socialLink'
        />
    </div>
    <SmallWarningSign />
    </>
  );
};

export default SocialMedia;
