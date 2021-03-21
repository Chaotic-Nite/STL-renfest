import dateObject from "../../../UPTODATE.js";
import { Link } from "react-router-dom";

function IntroPage() {
  return (
    <>
      <div className="intro-container margin-width">
        <h1>Welcome to Petite Lyon</h1>
        <h3>The Saint Louis Renaissance Festival</h3>
        <p>
          King Franscois and King Henry the VIII grace the quiet area of Petite
          Lyon in Southern France during the Festival of the 1520s.
          <br />
          The village of Petite Lyon is over seen by the 13 Counts of the City,
          Lyon, and have seen fit to draw travelers, entertainers, peddlers and
          craft masters from across the country to entertain those who come.
          <br />
          <br />
          While the nobility visit who knows what intrigue will unfold.
          <br />
          The realm of mortals toils over their Festive plans while the Lord of
          the Forest holds his own court for revelries and a keen delight in
          startling those of mortal kind and inspiring wonder in those with an
          open mind.
          <br />
          <br />
          Jousts, music, fine foods and wares, friends new and old, and cheer
          will appear.
          <br />
        </p>
        <p id="closing-line">Come and find what strikes you merry!</p>
        {/* Credit to Dan Blinn and his bullshittery skills to craft this */}
      </div>

      <div className="dates margin-width">
        <h2>
          Open Weekends for {dateObject.startDay} - {dateObject.endDay},
          {dateObject.year}
        </h2>
        <h3>10am - 6pm Rain or Shine</h3>
        <h3 style={{ fontVariant: "small-caps;" }}>Free Parking</h3>
      </div>

      <div className="other-events margin-width">
        <span>
          <h2>Kegs N Eggs</h2>
        </span>
        <p style={{ fontSize: "30px;" }}>
          Tickets are on sale <u>NOW</u> for the {dateObject.year} Season on
          April 10th {dateObject.year}!<br />
          <Link to="/tickets">Click Here</Link> to view ticket prices and
          options! <br />
          Early bird pricing ends April 3rd.
        </p>
      </div>

      {/* <!-- MAF Tags --> */}
      <div className="maf dates margin-width">
        <h2>Can't Wait to Celebrate!</h2>
        <div>
          Come join us as we celebrate our {dateObject.yearOfFaire} year! Enjoy
          entertainment ranging from pirates to jousting to juggling to turkey
          legs, and more! There’s something for everyone to enjoy. <br />
          <br />
          Produced by Mid-America Festivals, the St. Louis Renaissance Festival
          is entering its {dateObject.yearOfFaire} year. Mid-America Festivals
          is the largest outdoor event planning company in the nation and
          produces Renaissance Festivals in Minnesota, Michigan, Kansas City,
          St. Louis, and Tampa Bay Area.
        </div>
      </div>

      {/* <!-- Social Media Section --> */}
      <div className="social-media margin-width">
        <h1>Follow us on:</h1>
        <div className="social-links">
          <a
            href="https://www.facebook.com/STLRenFest/"
            className="fa fa-facebook"
          ></a>
          <a
            href="https://twitter.com/stlrenfest"
            className="fa fa-twitter"
          ></a>
          <a
            href="https://www.pinterest.com/stlouisrenaissa/"
            className="fa fa-pinterest"
          ></a>
          <a
            href="https://www.instagram.com/stlrenfest/"
            className="fa fa-instagram"
          ></a>
        </div>
      </div>

      {/* <!-- Newsletter Sign-up --> */}
      <div className="email-list margin-width">
        <div className="subscribe-email">
          <h2>Sign up for our email list!</h2>
          <div className="news-msg-holder">
            <div className="news-error">
              Please enter a valid email address
              <br />
            </div>
          </div>
          <form>
            <div>
              <label for="email-input">Email Address* </label>
              <input
                type="email"
                name="email-input"
                id="email"
                maxlength="255"
                required
              />
            </div>
            <div>
              <label>
                Are you also interested in hearing about these events?
              </label>
              <div>
                <input
                  type="checkbox"
                  name="tofTears"
                  id="tofTears"
                  value="469"
                />
                Trail of Terror
              </div>
            </div>
            <input
              type="submit"
              name="subscribe"
              id="subscribe"
              value="Subscribe"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default IntroPage;
