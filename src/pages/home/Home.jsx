import Banner from "./Hero/Banner";
import PopularCamps from "./populer-camps/PopularCamps";
import UserFeedback from "./user-feedback/UserFeedback";

const Home = () => {
  return (
    <div className="min-h-svh">
      <Banner />
      <PopularCamps />
      <UserFeedback />
    </div>
  );
};

export default Home;
