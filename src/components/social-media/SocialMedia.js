import { SocialIcon } from "react-social-icons";

const SocialMedia = () => {
  return (
    <div style={{ marginTop: "2%" }}>
      <SocialIcon
        url="https://www.facebook.com/STLRenFest/"
        network="facebook"
      />
      <SocialIcon
        url="https://twitter.com/stlrenfest"
        network="twitter"
        style={{ margin: "0 2%" }}
      />
      <SocialIcon
        url="https://www.pinterest.com/stlouisrenaissa/"
        network="pinterest"
        style={{ marginRight: "2%" }}
      />
      <SocialIcon
        url="https://www.instagram.com/stlrenfest/"
        network="instagram"
      />
    </div>
  );
};

export default SocialMedia;
