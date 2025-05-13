import { Helmet } from "react-helmet-async";
import Banner from "./Hero/Banner";
import PhotoGallery from "./photo-gallery/PhotoGallery";
import PopularCamps from "./populer-camps/PopularCamps";
import UserFeedback from "./user-feedback/UserFeedback";
import OurDoctors from "./our-doctors/OurDoctors";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AppointmentFAQSection from "./appointment-faq/AppointmentFAQ";
import NewsLetter from "./News-Letter/NewsLetter";
import TopDonorsMarquee from "./Top-donors/TopDonorsMarquee";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scroll) {
      const target = document.getElementById("doctor-cards-container");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-svh">
      <Helmet title={`Zenith | Home`} />
      <Banner />
      <PopularCamps />
      <UserFeedback />
      <OurDoctors />
      <AppointmentFAQSection />
      <TopDonorsMarquee/>
      <PhotoGallery />
      <NewsLetter/>
    </div>
  );
};

export default Home;
