import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../../Utils/axiosPublic";
import SectionHeading from "../../../components/SectionHeading";
import CampCard from "../../../components/CampCard";
import CardLoading from "../../../components/loading-components/CardLoading";
import HeadingLoading from "../../../components/loading-components/HeadingLoading";
import SimpleParallax from "simple-parallax-js";
import { Button } from "antd";
import { Link } from "react-router-dom";

const PopularCamps = () => {
  const { data: campsData = [], isLoading } = useQuery({
    queryKey: ["popularCamps"],
    queryFn: async () => {
      const res = await axiosPublic.get("/camps/popular");
      return res.data.data;
    },
  });

  if (isLoading) {
    return (
      <div>
        <HeadingLoading />
        <CardLoading />
      </div>
    );
  }

  return (
    <div className="mt-16 container mx-auto px-4 campCardContainer mb-12 ">
      <div>
        <SectionHeading
          subHeading="Discover the Most Sought-After Camps for Your Health"
          heading="Top Camps You’ll Love"
        />
        <div className="flex justify-center items-center mb-4">
          <Link to={'/camps'}>
            <Button className="bg-gradient-to-r from-primary to-secondary text-white">See all Camps</Button>
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-4 gap-4 md:mt-0 mt-4 ">
        <SimpleParallax orientation="right">
          <img
            src="https://i.ibb.co.com/h8cw3cy/2148352065-1.jpg"
            alt=""
            className="h-full w-full object-cover hidden md:block"
          />
        </SimpleParallax>

        <div className="grid grid-cols-2 gap-4 md:col-span-3 lg:col-span-1">
          {campsData.map((camp, idx) => {
            if (idx === 0 || idx === 1) {
              return <CampCard key={camp._id} camp={camp} />;
            }
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <div className="grid grid-cols-2 gap-8 md:col-span-3 lg:col-span-1">
          {campsData.map((camp, idx) => {
            if (idx === 2 || idx === 3) {
              return <CampCard key={camp._id} camp={camp} />;
            }
          })}
        </div>
        <SimpleParallax orientation="left" scale={1.2}>
          <img
            src="https://i.ibb.co.com/L0KnSbM/84780-1.jpg"
            alt=""
            className="h-full w-full object-cover hidden md:block"
          />
        </SimpleParallax>
      </div>
    </div>
  );
};

export default PopularCamps;
