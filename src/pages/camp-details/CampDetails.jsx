import { useQuery } from "@tanstack/react-query";
import { Link, ScrollRestoration, useNavigate, useParams } from "react-router-dom";
import axiosPublic from "../../Utils/axiosPublic";
import SectionHeading from "../../components/SectionHeading";
import { Badge } from "antd";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import dayjs from "dayjs";
import { MdOutlineDescription } from "react-icons/md";
import { useState } from "react";
import RegisterCampModal from "./RegisterCampModal";
import useAuth from "../../hooks/useAuth";
import { IoMdArrowRoundBack } from "react-icons/io";

const CampDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();

  const { id } = useParams();
  const {
    data: camp = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["campDetails", id],
    queryFn: async () => {
      const res = await axiosPublic(`/camps/${id}`);
      return res.data;
    },
  });

  const {
    image,
    name,
    location,
    participantCount,
    healthcareProfessional,
    fees,
    timeFrom,
    timeTo,
    description,
  } = camp;

  const formattedStartDate = dayjs(timeFrom).format("DD-MMM-YYYY");
  const formattedEndDate = dayjs(timeTo).format("DD-MMM-YYYY");

  const handleJoin = () => {
    if (!user) {
      navigate("/join-us/sign-in");
      return;
    }

    setIsModalOpen(true);
  };

  if (isLoading) {
    return <h2>Loading in details page....</h2>;
  }

  return (
    <div>
      <div className="container mx-auto min-h-svh font-roboto">
        <ScrollRestoration />
        <SectionHeading heading={name} subHeading="Join Here" />
        <Link to={'/camps'}>
          <button className="btn btn-ghost">
            <IoMdArrowRoundBack />
            All Available Camps
          </button>
        </Link>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 bg-menu_bg p-6">
          <Badge.Ribbon
            text={`Participated: ${participantCount}`}
            color="#009045"
          >
            <div className="h-full w-full">
              <img
                src={image}
                alt={name + " " + healthcareProfessional}
                className="h-full w-full object-cover"
              />
            </div>
          </Badge.Ribbon>

          <div>
            <div className="mb-8">
              <p>Hello, {user?.displayName || ""}</p>
              <p>
                <span className="font-semibold">{name}</span> is led by{" "}
                <span className="italic font-semibold">
                  {healthcareProfessional}
                </span>
                , offering expert care and essential medical services to ensure
                your health and well-being.
              </p>
              <button onClick={handleJoin} className="btn btn-outline">
                Join Camp
              </button>
            </div>
            <div className="space-y-2">
              <p className="flex items-center gap-1">
                <span className="font-bold">
                  <FaLocationDot className="text-xl" />
                </span>{" "}
                <span>{location}</span>
              </p>
              <p className="flex items-center gap-1">
                <span className="font-bold">
                  <FaRegCalendarAlt className="text-xl" />
                </span>
                <span>{formattedStartDate}</span>
                <span>to</span>
                <span>{formattedEndDate}</span>
              </p>
              <p>
                <span className="font-bold">Fee:</span> ${fees}
              </p>
              <div className="break-words">
                <p>
                  <MdOutlineDescription className="text-xl" />
                </p>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RegisterCampModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        camp={camp}
        refetch={refetch}
      />
    </div>
  );
};

export default CampDetails;
