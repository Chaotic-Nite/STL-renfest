import AboutUs from "../pages/about-us";
import BringYourDog from "../pages/bring-your-dog";
import Cast from "../pages/cast";
import Directions from "../pages/directions";
import Employment from "../pages/site-employment";
import Faq from "../pages/faq";
import EntertainmentVendor from "../pages/entertainment-vendor";
import Home from "../pages/home";
import Sitemap from "../pages/sitemap";
import Tickets from "../pages/tickets";
import WarriorsIsland from "../pages/warriors-island";
import Weddings from "../pages/weddings";
import Weekends from "../pages/weekends";
import ContactUs from "../pages/contact-us";
import FindHotel from "../pages/find-hotel";
import KeyPolicies from "../pages/key-policies";
import ContestPromos from "../pages/contest-promos";
import ErrorPage from "../pages/error-page";
import VendorApplications from "../pages/vendor-applications";
import Fundraising from "../pages/fundraising";
import GettingInvolved from "../pages/getting-involved";
import DailyEvents from "../pages/daily-events";

export const routes = [
  {
    name: "AboutUs",
    path: "/about-us",
    Component: AboutUs,
  },

  {
    name: "BringYourDog",
    path: "/bring-your-dog",
    Component: BringYourDog,
  },

  {
    name: "Cast",
    path: "/cast",
    Component: Cast,
  },

  {
    name: "ContactUs",
    path: "/contact-us",
    Component: ContactUs,
  },

  {
    name: "ContestPromos",
    path: "/contests-promotions",
    Component: ContestPromos,
  },

  {
    name: 'DailyEvents',
    path: '/daily-events',
    Component: DailyEvents
  },

  {
    name: "Direction",
    path: "/directions",
    Component: Directions,
  },

  {
    name: "Employment",
    path: "/employment",
    Component: Employment,
  },

  {
    name: "EntertainmentVendor",
    path: "/entertainment-vendor",
    Component: EntertainmentVendor,
  },

  {
    name: "FAQ",
    path: "/faq",
    Component: Faq,
  },

  {
    name: "FindHotel",
    path: "/find-hotels",
    Component: FindHotel,
  },

  {
    name: "Fundraising",
    path: "/community-relations-fundraising",
    Component: Fundraising,
  },

  {
    name: "GettingInvolved",
    path: "/getting-involved",
    Component: GettingInvolved,
  },

  {
    name: "Home",
    path: "/",
    Component: Home,
    exact: true,
  },

  {
    name: "KeyPolicies",
    path: "/key-policies",
    Component: KeyPolicies,
  },

  {
    name: "Sitemap",
    path: "/sitemap",
    Component: Sitemap,
  },

  {
    name: "Tickets",
    path: "/tickets",
    Component: Tickets,
  },

  {
    name: "Warriors",
    path: "/warriors-island",
    Component: WarriorsIsland,
  },

  {
    name: "Weddings",
    path: "/weddings",
    Component: Weddings,
  },

  {
    name: "Weekends",
    path: "/weekends",
    Component: Weekends,
  },

  {
    name: "VendorApplications",
    path: "/vendor-application",
    Component: VendorApplications,
  },

  {
    name: "404",
    path: "*",
    Component: ErrorPage,
  },
];
