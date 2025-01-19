import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../../Utils/axiosPublic";
import SectionHeading from "../../../components/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./styles.css";
import { Rate } from "antd";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const UserFeedback = () => {
  const { data: feedback, isLoading } = useQuery({
    queryKey: ["All-feedback"],
    queryFn: async () => {
      const res = await axiosPublic.get("/feedback");
      return res.data;
    },
  });

  console.log(feedback);

  if (isLoading) {
    return <h2>Loading in feedback</h2>;
  }

  return (
    <div className="container mx-auto">
      <SectionHeading
        heading="Voices of Healing"
        subHeading="Compassionate care, shared by our participant"
      />

      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="w-2/3"
        >
          {feedback.map((el, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-full bg-gradient-to-br p-4 from-primary to-secondary text-white">
                <div className="flex items-center gap-2">
                  <div className="avatar ">
                    <div className="w-12 border rounded-full">
                      <img src="https://i.ibb.co.com/th2hZBc/a.png" />
                    </div>
                  </div>
                  <div>
                    <p>{el?.participantName}****</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{el?.campName}</h2>
                  <p>{el?.drName}</p>
                </div>
                <div className="my-4">
                  <Rate allowHalf disabled defaultValue={el?.Rate} />
                  <div className="mt-8">
                    <p className="inline-block">
                      <FaQuoteLeft className="inline-block mr-2 -translate-y-3" />
                      {el?.feedbackComment}{" "}
                      <FaQuoteRight className="inline-block ml-2 translate-y-3" />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UserFeedback;
