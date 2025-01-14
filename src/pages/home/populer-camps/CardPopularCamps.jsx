import { Badge } from "antd";
import PropTypes from "prop-types";
import { CiLocationOn, CiMoneyCheck1 } from "react-icons/ci";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const CardPopularCamps = ({ camp }) => {
  const {
    image,
    name,
    location,
    participantCount,
    healthcareProfessional,
    fees,
  } = camp;

  return (
    <div className=" bg-menu_bg border hover:border-gray-400 relative">
      <Badge.Ribbon text={`Participated: ${participantCount}`} color="#009045">
        <div className="h-1/2 relative">
          <img
            src={image}
            alt=""
            className="lg:h-full w-full h-44 object-cover"
          />
          <div className="absolute bottom-0 left-0 pr-3 pt-2 flex items-center gap-1 bg-menu_bg rounded-tr-full">
            <img
              src="https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
              alt=""
              className="w-16 h-16 object-cover rounded-full p-1 bg-primary bg-opacity-55 "
            />
            <h3 className="font-bold">{healthcareProfessional}</h3>
          </div>
        </div>
      </Badge.Ribbon>
      <div className="lg:px-6 px-2 pt-2 space-y-1">
        <h2 className="md:text-xl font-bold">{name}</h2>
        <p className="flex gap-1">
          <CiMoneyCheck1 className="text-xl" /> ${fees}
        </p>
        <p className="flex gap-1 items-center">
          <CiLocationOn className="text-xl" />
          {location}
        </p>
      </div>
    </div>
  );
};

CardPopularCamps.propTypes = {
  camp: PropTypes.object.isRequired,
};

export default CardPopularCamps;
