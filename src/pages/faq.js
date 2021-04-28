import React from "react";
import dateObject from "../lists/UPTODATE";
import { Link } from "react-router-dom";
import "../css/faq.css";
import SocialMedia from "../components/social-media/SocialMedia";

function Faq() {
  return (
    <>
      <h1 className="page-header">FAQ</h1>
      <div className="margin-width">
        <div className="two-col">
          <div className="faq">
            <details>
              <summary className="faq-q">
                <b>Q</b>: What does the admission price include?
              </summary>
              <p className="faq-a">
                <b>A</b>: Free parking, all entertainment shows, including the
                Tournament Jousting and Theme Weekend Events. You may choose to
                purchase arts and crafts items, food or beverage, or enjoy some
                games (costs vary). You may also choose to attend one of our
                Daily Royal Events at an additional cost.
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: Is Parking Free?
              </summary>
              <p className="faq-a">
                <b>A</b>: Yes! Parking is free. However, if you park in a spot
                of the park that is labeled “No Parking”, you will be towed.
                Please follow the parking attendants and directions for allowed
                parking.
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: What are the Dates and Hours of the Festival?
              </summary>
              <p className="faq-a">
                <b>A</b>: We are open Saturdays and Sundays,{" "}
                {dateObject.startDay} - {dateObject.endDay}
                Festival hours are rain or shine from 10am – 6pm.
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: Is the Renaissance Festival open during the week?
              </summary>
              <p className="faq-a">
                <b>A</b>: The Festival is only open Saturday and Sundays through
                the announced timeframe.
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: Are you open during inclement weather?
              </summary>
              <p className="faq-a">
                <b>A</b>: We are open rain or shine. We do not offer refunds in
                the event of inclement weather.
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: What time are the Jousts?
              </summary>
              <p className="faq-a">
                <b>A</b>: The Joust is held 3 times daily at 11:30am, 2:00pm and
                4:00pm.
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: Can I bring my dog?
              </summary>
              <p className="faq-a">
                <b>A</b>: Yes, the Festival is Dog Friendly! See our dog rules
                and registration page for more info!
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: Can I bring prop or peace-tied weapons?
              </summary>
              <p className="faq-a">
                <b>A</b>: Yes, any sort of foam, plastic, cardboard, toy or prop
                weapon is allowed. Real Swords, Knives, Dirks and Daggers are
                allowed, <u>BUT</u> they must be completely sheathed and
                peace-tied.
                <br />
                <br />
                Longbows are allowed as long as they are not strung.
                <u>BUT</u> arrows with tips are not allowed unless you are
                competing in the longbow competition that day. <br />
                <br />
                The Festival bans guns on our premise. Real Axes, Claymores,
                Maces, Antique Firearms, Pikes and Halberds are <u>NOT</u>{" "}
                allowed on the Festival site. No drawing of any weapon at any
                time. Must be 18 years or older to carry a weapon. <br />
                <br />
                If you have additional questions, please contact the Festival
                Office for more information at 636-639-5173.
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: What are you gluten free options? What about
                vegetarian options? What do I do if I’m allergic to many of the
                food products you serve?
              </summary>
              <p className="faq-a">
                <b>A</b>: All booths will have Gluten Sensitive Buns available
                for any sandwich. We will also have Gluten Sensitive Kettle
                Corn.
                <br />
                <br />
                The St. Louis Renaissance offers products that contain peanuts,
                tree nuts, soy, milk, eggs and wheat and there may be cross
                contact with your food because of shared cooking equipment.
                While we take steps to minimize the risk of cross contamination,
                we cannot guarantee that any of our products are safe to consume
                for people with peanut, tree nut, soy, milk, egg or wheat
                allergies.
                <br />
                <br />
                Instead of risking adverse reactions, we encourage our customers
                who are concerned with food allergies to bring a packed lunch to
                safely enjoy.
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: Is there an ATM Machine?
              </summary>
              <p className="faq-a">
                <b>A</b>: Yes, there are three ATM machines on-site, including
                one outside the front gate. See the festival map to find one.
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: Is the Festival wheelchair accessible?
              </summary>
              <p className="faq-a">
                <b>A</b>: The Festival is held in a natural, outdoor setting.
                Wheelchairs and motorized wheelchairs are allowed. We have
                disabled accessible parking, and disabled accessible portable
                toilets. Be certain to notify parking attendants of your need
                for accessible parking.
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: Do you offer Discount Tickets?
              </summary>
              <p className="faq-a">
                <b>A</b>: Discount tickets and coupons can be found at various
                locations. Check out our ticket outlets page for a list of
                participating outlets.
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: Where can I breastfeed at the Festival?
              </summary>
              <p className="faq-a">
                <b>A</b>: We do have a section for breastfeeding mothers. Please
                refer to our Festival Map for the location.
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: Are there special discounts for Military Service
                Members?
              </summary>
              <p className="faq-a">
                <b>A</b>: During our first weekend, all Military Service Members
                can receive a Buy One Get One free offer on adult admission.
                Please have your Active or Retired Military ID present to
                receive this promotion.
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: Are there special discounts for first responders?
              </summary>
              <p className="faq-a">
                <b>A</b>: Police officers, firefighters, paramedics and EMT’s
                will receive a FREE adult admission ticket TBA. Please have a
                valid job ID present.
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: Are two-day Festival Admission passes available?
              </summary>
              <p className="faq-a">
                <b>A</b>: Yes, the pass must be used during the same weekend.
                <a href="tickets.html">Follow this link to purchase.</a>
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: If I wear a costume, can I get in free?
              </summary>
              <p className="faq-a">
                <b>A</b>: No, but we have a variety of costume contests that
                occur each weekend.
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: If I leave the Festival, can I get back in?
              </summary>
              <p className="faq-a">
                <b>A</b>: As long as you have your hand stamped you are allowed
                back into the festival for the day.
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: Are outside food and beverages allowed?
              </summary>
              <p className="faq-a">
                <b>A</b>: No. Many beverages including water are sold within the
                grounds. There is also a wide variety of food.
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: What if I need medical attention?
              </summary>
              <p className="faq-a">
                <b>A</b>: The Renaissance Festival provides a fully equipped and
                professionally staffed First Aid Station, which is clearly
                visible on the grounds.
              </p>
            </details>
            <details>
              <summary className="faq-q">
                <b>Q</b>: Where is the lost and found?
              </summary>
              <p className="faq-a">
                <b>A</b>: Anything that is turned in at the Festival can be
                found at the Information Booth that weekend, otherwise call the
                office Monday – Friday 9am-5pm, to collect your lost items.{" "}
                <br />
                <br />
                For more information please contact the Festival Office at
                636-639-5173 or email at: &nbsp;
                <a href="mailto:info@renaissancefest.com">
                  akuchar@renaissancefest.com.
                </a>
              </p>
            </details>
          </div>
          <div className="col2">
            <ul>
              <li>
                <Link className="col2-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="col2-link" to="/tickets">
                  Get Tickets
                </Link>
              </li>
              <li>
                <Link className="col2-link" to="/contests-promotions">
                  Contest &#38; Promotions
                </Link>
              </li>
              <li>
                <Link className="col2-link" to="/bring-your-dog">
                  Bring Your Dog
                </Link>
              </li>
              <li>
                <Link className="col2-link" to="/find-hotels">
                  Find a hotel
                </Link>
              </li>
              <li>
                <Link className="col2-link" to="/directions">
                  Directions
                </Link>
              </li>
            </ul>
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
