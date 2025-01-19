import Banner from "./Hero/Banner";
import PhotoGallery from "./photo-gallery/PhotoGallery";
import PopularCamps from "./populer-camps/PopularCamps";
import UserFeedback from "./user-feedback/UserFeedback";

const Home = () => {
  return (
    <div className="min-h-svh">
      <Banner />
      <PopularCamps />
      <UserFeedback />
      <PhotoGallery />
      <div className="min-h-screen" />
    </div>
  );
};

export default Home;
