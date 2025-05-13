import { useQuery } from "@tanstack/react-query";
import { FaMobileScreen } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { Link, ScrollRestoration, useLocation, useParams } from "react-router-dom";
import DetailsLoading from "../../../components/loading-components/DetailsLoading";
import SectionHeading from "../../../components/SectionHeading";
import axiosPublic from "../../../Utils/axiosPublic";


const DoctorDetails = () => {
  const { id } = useParams();



  const location = useLocation();
  const scroll = location.state?.scroll;
  console.log(scroll);

  const { data: doctor, isLoading } = useQuery({
    queryKey: ["doctor", { id: id }],
    queryFn: async () => {
      const res = await axiosPublic.get(`/doctor/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <DetailsLoading />;
  }
  const {
    image,
    name,
    specialty,
    descriptions,
    phone,
    email,
    address,
    degree,
    category,
  } = doctor;

  return (
    <>
    <ScrollRestoration />
      <div className="container mx-auto min-h-screen px-4 mb-12">
        <SectionHeading heading={specialty} subHeading={name} />
        <Link to="/" state={{scroll: scroll}}>
        <button  className="btn btn-ghost">
            <IoMdArrowRoundBack />
            Back to doctors
          </button>
        </Link>
          
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-9">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
            
          </div>
          <div className="col-span-3 border border-gray-300 p-4 text-gray-600">
            <p className="mb-4 text-2xl text-black">Profile details</p>
            <div className="flex justify-between border-b border-gray-300 py-3">
              <span>Address:</span>
              <span>{address}</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 py-3">
              <span>Phone:</span>
              <span>{phone}</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 py-3">
              <span>Email:</span>
              <span>{email}</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 py-3">
              <span>Specialty:</span>
              <span>{specialty}</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 py-3">
              <span>Degree:</span>
              <span>{degree}</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 py-3">
              <span>Category:</span>
              <span>{category}</span>
            </div>
          </div>
          <div className="col-span-9 mb-6">
            <p className="leading-loose text-gray-600">{descriptions}</p>
          </div>
          <div className="col-span-3 border border-gray-300 p-4 text-gray-600">
          <p className="mb-4 text-2xl text-black">Contact details</p>
            <div className="flex items-center gap-4 border-b border-gray-300 py-3">
              <span><FaMobileScreen /></span>
              <span>{phone}</span>
            </div>
            <div className="flex items-center gap-4 border-b border-gray-300 py-3">
              <span><MdOutlineEmail /></span>
              <span>{email}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;
