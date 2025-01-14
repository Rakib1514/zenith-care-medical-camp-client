import SectionHeading from "../../components/SectionHeading";
import useCampsData from "../../hooks/useCampsData";
import CampCard from "../../components/CampCard";

const Camps = () => {
  const { campsData, isLoading } = useCampsData();

  if (isLoading) {
    return <h2>Loading in all camps......</h2>;
  }
  console.log(campsData);
  return (
    <div>
      <div className="container mx-auto px-6">
        <div>
          <SectionHeading
            subHeading="Find the perfect adventure, retreat, or learning experience—tailored just for you."
            heading="Explore Our Camps"
          />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 campCardContainer">
          {
            campsData.map(camp => <CampCard key={camp._id} camp={camp}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default Camps;
