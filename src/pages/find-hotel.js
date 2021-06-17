import Navigation from "../components/navigation/Navigation.js";
import QuickLinksSetOne from "../components/quicklinks/QuickLinksSetOne";

function FindHotel() {
  return (
    <>
     <Navigation />
      <h1 className="page-header">Find Hotels</h1>
      <div className="margin-width">
        <div className="two-col">
          <div className="col1">
            <iframe
              title="hotels"
              id="hotel"
              src="https://www.tripadvisor.com/Hotels-g45032-Wentzville_Missouri-Hotels.html"
              frameBorder="0"
              allowFullScreen="allowfullscreen"
            ></iframe>
            <p id="hotelText">
              If the site hasn't loaded,{" "}
              <a href="https://www.tripadvisor.com/Hotels-g45032-Wentzville_Missouri-Hotels.html">
                Click Here
              </a>
            </p>
          </div>
          <div className="col2">
            <QuickLinksSetOne id={6} />
          </div>
        </div>
      </div>
    </>
  );
}

export default FindHotel;
