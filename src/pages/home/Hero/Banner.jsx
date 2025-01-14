import { Carousel } from "antd";
import { useQuery } from "@tanstack/react-query";
import CarouselCard from "./CarouselCard";
import axiosPublic from "../../../Utils/axiosPublic";

const Banner = () => {
  // const onChange = (currentSlide) => {
    // console.log(currentSlide);
  // };

  const { data: carouselCardData = [] } = useQuery({
    queryKey: ["carouselData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/home/banner/carousel");
      return res.data;
    },
  });

  return (
    <div>
      <Carousel
        // afterChange={onChange}
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

{
  /* <div className="h-[60svh]">
<img
  src="https://i.ibb.co.com/s18MBwT/Zenith-banner-2.jpg.jpg"
  alt=""
  className="w-full"
/>
</div> */
}
