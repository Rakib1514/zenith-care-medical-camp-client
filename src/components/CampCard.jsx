import { Badge } from "antd";
import PropTypes from "prop-types";
import { CiLocationOn, CiMoneyCheck1 } from "react-icons/ci";
import { Link } from "react-router-dom";

const CampCard = ({ camp }) => {
  const {
    image,
    name,
    location,
    participantCount,
    healthcareProfessional,
    fees,
    _id
  } = camp;

  return (
    <div className=" bg-menu_bg  flex flex-col relative rounded-br-[2.6rem] ">
      <div>
        <Badge.Ribbon
          text={`Participated: ${participantCount}`}
          color="#009045"
        >
          <div className="h-1/2 relative">
            <img
              src={image}
              alt=""
              className="lg:h-full w-full h-44 object-cover"
            />
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
      <div className="h-full flex justify-end items-end">
        <div
          className=" bg-opacity-30 h-8 w-8 mb-4 rounded-br-full"
          style={{
            boxShadow: "10px 14px 0px 6px white",
          }}
        ></div>
      </div>
      <div className="flex justify-between h-full">
        <div className="flex items-center ">
          <img
            src="https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
            alt=""
            className="md:w-16 w-12 h-12 md:h-16 object-cover rounded-full p-1 bg-gray-400 bg-opacity-70 rounded-bl-none"
          />

          <h4 className="font-semibold">{healthcareProfessional}</h4>
        </div>
        <div
          className="h-16 w-16 rounded-full bg-slate-700"
          style={{
            boxShadow: "0px 0px 0px 16px white",
          }}
        >
          <Link to={`/camp-details/${_id}`} className="campCardBtn">
            Join
          </Link>
        </div>
      </div>
    </div>
  );
};

CampCard.propTypes = {
  camp: PropTypes.object.isRequired,
};

export default CampCard;
