import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../../Utils/axiosPublic";
import CardLoading from "../../../components/loading-components/CardLoading";
import SectionHeading from "../../../components/SectionHeading";
import DoctorCard from "./DoctorCard";


const OurDoctors = () => {

  const {data: doctors, isLoading} = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await axiosPublic.get("/doctors");
      return res.data;
    },
  });


  if(isLoading) return <CardLoading/>
  return (
    <div id="doctor-cards-container" className="mt-16 container mx-auto px-4 campCardContainer mb-12">
      <SectionHeading heading="Meet Our Expert Doctors" subHeading="Dedicated professionals committed to your health and well-being."/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {doctors.map((doctor) => <DoctorCard key={doctor._id} doctor={doctor} />)}
      </div>
    </div>
  );
};

export default OurDoctors;
