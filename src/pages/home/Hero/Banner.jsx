import { Carousel } from "antd";
import { useQuery } from "@tanstack/react-query";
import CarouselCard from "./CarouselCard";
import axiosPublic from "../../../Utils/axiosPublic";
import CarouselLoading from "../../../components/loading-components/CarouselLoading";

const Banner = () => {


  const { data: carouselCardData = [], isLoading } = useQuery({
    queryKey: ["carouselData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/home/banner/carousel");
      return res.data;
    },
  });
  
  if(isLoading){
    return <CarouselLoading/>;
  }
  
  return (
    <div>
      <Carousel
        
        dotPosition="bottom"
        autoplay
        infinite
        draggable
        autoplaySpeed={3500}
      >
        {carouselCardData.map((e, idx) => (
          <CarouselCard
            key={idx}
            imgL={e.imgL}
            imgR={e.imgR}
            heading={e.heading}
            subHeading={e.subHeading}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;

