import { SocialIcon } from "react-social-icons";

const SocialMedia = () => {
  return (
    <div style={{ marginTop: "2%" }}>
      <SocialIcon
        url="https://www.facebook.com/STLRenFest/"
        network="facebook"
        style={{ width: "5vh", height: "5vh" }}
      />
      <SocialIcon
        url="https://twitter.com/stlrenfest"
        network="twitter"
        style={{ margin: "0 2%", width: "5vh", height: "5vh" }}
      />
      <SocialIcon
        url="https://www.pinterest.com/stlouisrenaissa/"
        network="pinterest"
        style={{ marginRight: "2%", width: "5vh", height: "5vh" }}
      />
      <SocialIcon
        url="https://www.instagram.com/stlrenfest/"
        network="instagram"
        style={{ width: "5vh", height: "5vh" }}
      />
    </div>
  );
};

export default SocialMedia;
