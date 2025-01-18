import SectionHeading from "../../components/SectionHeading";
import useCampsData from "../../hooks/useCampsData";
import CampCard from "../../components/CampCard";
import HeadingLoading from "../../components/loading-components/HeadingLoading";
import CardLoading from "../../components/loading-components/CardLoading";

const Camps = () => {
  const { campsData, isLoading } = useCampsData();

  if (isLoading) {
    return (
      <>
        <div className="pt-6"><HeadingLoading /> </div>
        <CardLoading />
        <CardLoading />
      </>
    );
  }
  console.log(campsData);
  return (
    <div>
      <div className="container mx-auto px-6 mb-24">
        <div>
          <SectionHeading
            subHeading="Find the Perfect Camp for Your Health and Wellness"
            heading="Explore Our Camps"
          />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 campCardContainer">
          {campsData.map((camp) => (
            <CampCard key={camp._id} camp={camp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Camps;
