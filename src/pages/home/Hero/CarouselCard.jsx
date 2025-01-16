// for antd carousel
import PropTypes from "prop-types";

const CarouselCard = ({ imgL, imgR, heading, subHeading }) => {
  return (
    <div>
      <div className="h-[50svh] md:h-[60svh] lg:h-[50svh] flex flex-row relative font-roboto">
        {/* first block */}
        <div className="md:w-4/12 w-full">
          <img
            src={imgL}
            alt=""
            className="w-full h-full object-cover object-top lg:object-center"
          />
        </div>

        {/* 2nd block */}
        <div className="md:w-4/12 w-full absolute md:relative bottom-0 bg-gradient-to-br from-secondary to-g2 bg-opacity-0 md:bg-opacity-100 flex justify-center items-end md:items-center">
          <div className=" text-center py-6 px-4 text-white">
            <h1 className="text-2xl lg:text-3xl font-bold font-montserrat">{heading}</h1>
            <p className="lg:text-xl text-lg"> {subHeading}</p>
          </div>
        </div>

        {/* 3rd block */}
        <div className="w-4/12 hidden md:flex ">
          <img
            src={imgR}
            alt=""
            className="w-full h-full object-cover object-top lg:object-center"
          />
        </div>
      </div>
    </div>
  );
};

CarouselCard.propTypes = {
  imgL: PropTypes.string.isRequired,
  imgR: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default CarouselCard;
