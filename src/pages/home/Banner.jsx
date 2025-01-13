// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "antd";

const contentStyle = {
  margin: 0,
  height: "60svh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Banner = () => {
  // const carouselImg = [
  //   "https://i.ibb.co.com/cN5DR9P/zenith-banner-1.jpg",
  //   "https://i.ibb.co.com/cN5DR9P/zenith-banner-1.jpg",
  //   "https://i.ibb.co.com/cN5DR9P/zenith-banner-1.jpg",
  // ]

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div>
      {/* <Carousel autoPlay className="select-none ">
        {carouselImg.map((img, idx) => (
          <div key={idx} className="max-h-[60svh]">
            <img src={img} />
          </div>
        ))}
      </Carousel> */}

      <Carousel afterChange={onChange} dotPosition="bottom" autoplay infinite draggable autoplaySpeed={3500}>
        <div>
          <div className="h-[30svh] md:h-[90svh] lg:h-[60svh] flex flex-row">
            <img
              src="https://i.ibb.co.com/cN5DR9P/zenith-banner-1.jpg"
              alt=""
              className="w-full object-cover object-top lg:object-center"
            />
            <div className="w-full bg-opacity-30 h-full absolute md:relative bg-black">
            </div>
          </div>
        </div>
        <div>
          <div className="h-[30svh] md:h-[90svh] lg:h-[60svh] flex flex-row">
            <img
              src="https://i.ibb.co.com/s18MBwT/Zenith-banner-2.jpg"
              alt=""
              className="w-full object-cover object-top lg:object-center"
            />
            <div className="w-full bg-opacity-30 h-full absolute md:relative bg-black">
            </div>
          </div>
        </div>
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
