import { Badge } from "antd";
import PropTypes from "prop-types";
import { CiLocationOn, CiMoneyCheck1 } from "react-icons/ci";

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
    <div className=" bg-menu_bg  flex flex-col relative rounded-br-[2.6rem]">
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
            <div className="md:w-48 w-[160px] absolute bottom-0 left-0 pr-3 pt-2 flex items-center gap-1 bg-menu_bg rounded-tr-full">
              <img
                src="https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
                alt=""
                className="md:w-16 w-12 h-12 md:h-16 object-cover rounded-full p-1 bg-primary bg-opacity-55 "
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
      <div className="h-full flex justify-end items-end">
        <div className=" bg-opacity-30 h-8 w-8 mb-4 rounded-br-full" style={{
          boxShadow: "10px 14px 0px 6px white"
        }}></div>
      </div>
      <div className="flex justify-end h-full items-end">
        <div className="h-16 w-16 rounded-full bg-slate-700" style={{
          boxShadow: "0px 0px 0px 16px white"
        }}>
          <button className="w-full h-full flex justify-center items-center bg-gray-300 rounded-full hover:scale-110 border border-gray-500 font-bold text-black hover:bg-primary hover:text-white">
              Join
          </button>
        </div>
      </div>
    </div>
  );
};

CardPopularCamps.propTypes = {
  camp: PropTypes.object.isRequired,
};

export default CardPopularCamps;
