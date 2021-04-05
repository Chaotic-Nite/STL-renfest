import SocialMedia from "../components/social-media/SocialMedia";

function ContactUs() {
  return (
    <>
      <h1 className="page-header">Contact Us</h1>
      <div className="margin-width two-col">
        <div>
          <p>
            <b>Festival Site Address:</b>
          </p>
          <p>
            Rotary Park <br />
            2577 West Meyer Road <br />
            Wentzville, MO 63385
          </p>

          <p>
            <b>Office Phone Number:</b> (636) 639-5173
          </p>
          <hr />
          <p>
            <b>Off-Site Address (Non-Festival Season):</b>
          </p>
          <p>
            207 S. Linn Ave. <br />
            Wentzville, MO 63385
          </p>
        </div>
        <div className="col2">
          <SocialMedia />
        </div>
      </div>
    </>
  );
}

export default ContactUs;
