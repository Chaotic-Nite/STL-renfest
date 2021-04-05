import SocialMedia from "../components/social-media/SocialMedia";

function FindHotel() {
  return (
    <>
      <h1 className="page-header">Find Hotels</h1>
      <div className="margin-width two-col">
        <div>
          <iframe
            title="hotels"
            id="hotel"
            src="https://www.tripadvisor.com/Hotels-g45032-Wentzville_Missouri-Hotels.html"
            frameborder="0"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
        <div className="col2">
          <SocialMedia />
        </div>
      </div>
    </>
  );
}

export default FindHotel;
