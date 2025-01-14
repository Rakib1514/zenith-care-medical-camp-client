import { useQuery } from "@tanstack/react-query";
import CardPopularCamps from "./CardPopularCamps";
import axiosPublic from "../../../Utils/axiosPublic";
import SectionHeading from "../../../components/SectionHeading";

const PopularCamps = () => {
  const { data: campsData = [], isLoading } = useQuery({
    queryKey: ["popularCamps"],
    queryFn: async () => {
      const res = await axiosPublic.get("/camps/popular");
      return res.data.data;
    },
  });

  if (isLoading) {
    return <h2>Loading in popular camps component ,...</h2>;
  }

  return (
    <div className="mt-12 container mx-auto px-4">
      <div>
        <SectionHeading subHeading="People Love Most" heading="Popular Camps" />
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-4 gap-4 md:mt-0 mt-4">
        <img
          src="https://i.ibb.co.com/h8cw3cy/2148352065-1.jpg"
          alt=""
          className="h-full w-full object-cover hidden md:block"
        />
        <div className="grid grid-cols-2 gap-4 md:col-span-3 lg:col-span-1">
          {campsData.map((camp, idx) => {
            if (idx === 0 || idx === 1) {
              return <CardPopularCamps key={camp._id} camp={camp} />;
            }
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <div className="grid grid-cols-2 gap-8 md:col-span-3 lg:col-span-1">
          {campsData.map((camp, idx) => {
            if (idx === 2 || idx === 3) {
              return <CardPopularCamps key={camp._id} camp={camp} />;
            }
          })}
        </div>
        <img
          src="https://i.ibb.co.com/kKrfkyS/doctor-563429-1920-1.jpg"
          alt=""
          className="h-full w-full object-cover hidden md:block"
        />
      </div>
    </div>
  );
};

export default PopularCamps;
