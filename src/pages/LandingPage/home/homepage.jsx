import Navbar from "./navbar";
import Herosection from "./herosection";
import Features from "./features";
import MeetTheFounder from "./MeetTheFounder";
import FeaturedDeals from "./PopularCourses";
// import PaymentPlans from "./PaymentPlans";
// import PaymentPlan from "./paymentplan";
// import Testimonials from "./Testimonials";
import Testimonial from "./Testimonial";
// import WealthyMan from "./Wealthyman";
// import Frequentlyask from "./Frequentlyask";
import Navbarr from "./navbarr";
export default function Home() {
  return (
    <>
      <Navbarr />
      <Herosection />
      <Features />
      <FeaturedDeals />
      <MeetTheFounder />
      {/*<PaymentPlan /> */}
      {/* <PaymentPlans /> */}
      <Testimonial />
      {/*<Testimonials />/}
      {/*<WealthyMan />*/}
      {/*<Frequentlyask />*/}
    </>
  );
}
