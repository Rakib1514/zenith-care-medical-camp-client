import { Badge } from "antd";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { CiLocationOn, CiMoneyCheck1 } from "react-icons/ci";
import { FaRegCalendarTimes } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GoArrowUpLeft } from "react-icons/go";
import { MdEventAvailable } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const CampCard = ({ camp, idx }) => {
  const locate = useLocation();

  const {
    image,
    name,
    location,
    participantCount,
    healthcareProfessional: drName,
    timeFrom,
    timeTo,
    fees,
    description,
    _id,
  } = camp;

  const startDate = dayjs(timeFrom).format("DD-MMM-YY");
  const endDate = dayjs(timeTo).format("DD-MMM-YY");

  const newDes = description.split(" ").slice(0, 8).join(" ");

  return (
    <div
      className=" bg-menu_bg  flex flex-col relative rounded-br-[2.6rem] hover:scale-[1.007] transition-transform duration-300 ease-in-out border border-gray-300 shadow-md"
      // data-aos={`${idx % 2 === 0 ? "fade-up-right" : "fade-up-left"}`}
    >
      <div>
        <Badge.Ribbon
          text={`Participated: ${participantCount}`}
          color="#1B477B"
        >
          <div className="h-1/2 relative">
            <img
              src={image}
              alt=""
              className="lg:h-full w-full h-44 object-cover"
            />
          </div>
        </Badge.Ribbon>

        <div className="lg:px-6 px-2 pt-2 space-y-1 ">
          <h2 className="md:text-xl font-bold text-secondary">{name}</h2>
          <p className="flex gap-1 items-center">
            <FaUserDoctor className="text-xl" /> {drName}
          </p>
          <p className="flex gap-1 items-center">
            <CiMoneyCheck1 className="text-xl" /> ${fees}
          </p>
          <p className="flex gap-1">
            <CiLocationOn className="text-xl" />
            {location}
          </p>
          <p className="flex gap-1 items-center ">
            <MdEventAvailable className="text-xl" />
            From {startDate}
          </p>
          <p className="flex gap-1 items-center">
            <FaRegCalendarTimes className="text-xl" />
            To {endDate}
          </p>
          {locate.pathname !== "/" && (
            <p className="pt-5">
              {newDes}...{" "}
              <Link
                to={`/camp-details/${_id}`}
                className="text-sm text-blue-600 underline"
              >
                Read More
              </Link>{" "}
            </p>
          )}
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
        <div className="flex items-center "></div>
        <div
          className="h-16 w-16 rounded-full"
          style={{
            boxShadow: "0px 0px 0px 16px white",
          }}
        >
          <Link to={`/camp-details/${_id}`} className="campCardBtn">
            <GoArrowUpLeft className="text-3xl" />
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
