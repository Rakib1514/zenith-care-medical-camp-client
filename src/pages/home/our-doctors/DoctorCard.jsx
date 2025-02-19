import "./style.css";
import PropTypes from "prop-types";
import { FaMobileScreen, FaPlus } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const { image, name, specialty, shortDescription, phone, email,_id } = doctor;

  return (
    <div className="rounded-sm">
      <Link to={`/doctor/${_id}`}>
        <div className="doctor-img-container">
          <img
            src={image}
            alt={name}
            className="h-48 w-full rounded-sm rounded-b-none object-cover"
          />
          {/* Plus Icon */}
          <FaPlus className="plus-icon" />
        </div>
      </Link>
      <div className="border border-gray-300 p-4">
        <p className="text-2xl font-semibold text-primary">{name}</p>
        <p className="text-gray-600">{specialty}</p>
      </div>
      <p className="border border-t-0 border-gray-300 p-4 text-gray-600">
        {shortDescription}
      </p>
      <div className="rounded-sm rounded-t-none border border-t-0 border-gray-300 p-4 text-gray-600">
        <div className="flex items-center gap-2">
          <FaMobileScreen /> <span>{phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineEmail /> <span>{email}</span>
        </div>
      </div>
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.object.isRequired,
};

export default DoctorCard;
