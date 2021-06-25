import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "../../css/navigation.css";

function BurgerNav() {
  return (
    <Menu right style={{ height: "100vh" }}>
      <Link className="small-tab" to="/directions">
        Directions
      </Link>
      <Link className="small-tab" to="/find-hotels">
        Finding a Hotel
      </Link>
      <Link className="menu-item" to="/tickets">
        Tickets
      </Link>
      <Link className="small-tab" to="/bring-your-dog">
        Bring Your Dog
      </Link>
      <Link className="small-tab" to="/events-contests-promotions">
        Daily Events, Contests & Promotions
      </Link>
      <Link className="small-tab" to="/weddings">
        Weddings
      </Link>
      <Link id="weekends" className="small-tab" to="/weekends">
        Themed Weekends
      </Link>
      <Link id="entertain" to="/entertainment-vendor">
        Entertainers &#38; Vendors
      </Link>
      <Link className="small-tab drop" to="/cast">
        Cast
      </Link>
      <Link className="nav__submenu-item" to="/warriors-island">
        Warriors Island
      </Link>
      <Link className="nav__submenu-item" to="/getting-involved">
        Getting Involved
      </Link>
      <Link className="small-tab" to="/about-us">
        About us
      </Link>
      <Link className="small-tab" to="/contact-us">
        Contact us
      </Link>
      <Link className="small-tab" to="/key-policies">
        Key Policies
      </Link>
      <Link className="small-tab" to="/faq">
        FAQ
      </Link>
    </Menu>
  );
}

export default BurgerNav;
