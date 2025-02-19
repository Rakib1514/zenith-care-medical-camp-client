import { Helmet } from "react-helmet-async";
import Banner from "./Hero/Banner";
import PhotoGallery from "./photo-gallery/PhotoGallery";
import PopularCamps from "./populer-camps/PopularCamps";
import UserFeedback from "./user-feedback/UserFeedback";
import OurDoctors from "./our-doctors/OurDoctors";

const Home = () => {
  return (
    <div className="min-h-svh">
      <Helmet title={`Zenith | Home`}/>
      <Banner />
      <PopularCamps />
      <UserFeedback />
      <OurDoctors/>
      <PhotoGallery />
    </div>
  );
};

export default Home;
