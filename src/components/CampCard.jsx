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
    <Link to={`/camp-details/${_id}`}>
      <div className="relative flex flex-col border border-gray-300 bg-menu_bg shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.007] h-full">
        <div>
          <Badge.Ribbon
            text={`Participated: ${participantCount}`}
            color="#1B477B"
          >
            <div className="relative h-1/2">
              <img
                src={image}
                alt=""
                className="h-44 w-full object-cover lg:h-full"
              />
            </div>
          </Badge.Ribbon>

          <div className="space-y-1 px-2 pt-2 lg:px-6" >
            <h2 className="font-bold text-secondary md:text-xl">{name}</h2>
            <p className="flex items-center gap-1">
              <FaUserDoctor className="text-xl" /> {drName}
            </p>
            <p className="flex items-center gap-1">
              <CiMoneyCheck1 className="text-xl" /> ${fees}
            </p>
            <p className="flex gap-1">
              <CiLocationOn className="text-xl" />
              {location}
            </p>
            <p className="flex items-center gap-1">
              <MdEventAvailable className="text-xl" />
              From {startDate}
            </p>
            <p className="flex items-center gap-1">
              <FaRegCalendarTimes className="text-xl" />
              To {endDate}
            </p>
            {locate.pathname !== "/" && (
              <p className="pt-5 justify-self-end">
                {newDes}...{" "}
                <Link
                  to={`/camp-details/${_id}`}
                  className="text-sm text-blue-600 underline"
                >
                  Read More
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

CampCard.propTypes = {
  camp: PropTypes.object.isRequired,
};

export default CampCard;
