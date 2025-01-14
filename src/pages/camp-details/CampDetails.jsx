import { useQuery } from "@tanstack/react-query";
import { ScrollRestoration, useParams } from "react-router-dom";
import axiosPublic from "../../Utils/axiosPublic";
import SectionHeading from "../../components/SectionHeading";
import { Badge } from "antd";

// TODO: dynamic user name After Hello

const CampDetails = () => {
  const { id } = useParams();

  const { data: camp = {} } = useQuery({
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
    description,
    _id,
  } = camp;

  return (
    <div>
      <div className="container mx-auto min-h-svh font-roboto">
        <ScrollRestoration />
        <SectionHeading heading={name} subHeading="Join Here" />
        <div className="grid grid-cols-2 gap-6 bg-menu_bg p-6">
          <Badge.Ribbon
            text={`Participated: ${participantCount}`}
            color="#009045"
          >
            <div>
              <img src={image} alt={name + " " + healthcareProfessional} />
            </div>
          </Badge.Ribbon>

          <div>
            <div className="mb-8">
              <p>Hello, {""}</p>
              <p>
                <span className="font-semibold">{name}</span> is led by{" "}
                <span className="italic font-semibold">
                  {healthcareProfessional}
                </span>
                , offering expert care and essential medical services to ensure
                your health and well-being.
              </p>
            </div>
            <p>
              <span className="font-bold">Location:</span> {location}
            </p>
            <p>
              <span className="font-bold">Fee:</span> ${fees}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampDetails;
