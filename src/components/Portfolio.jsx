import React from "react";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Equipment from "./Equipment";
import Pricing from "./Pricing";
import LiveStreamDemo from "./LiveStreamDemo";
import RecentWorks from "./RecentWorks";
import UpcomingEvents from "./UpcomingEvents";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

const Portfolio = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Equipment />
      <Pricing />
      <LiveStreamDemo />
      <RecentWorks />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Portfolio;
