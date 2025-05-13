// TopDonorsMarquee.jsx
import Marquee from "react-fast-marquee";
import SectionHeading from "../../../components/SectionHeading";

const TopDonorsMarquee = () => {
  const donors = [
    { id: 1, imageUrl: "https://i.ibb.co.com/dsTKfjhJ/w-2.png" },
    { id: 2, imageUrl: "https://i.ibb.co.com/rGtsKG4r/w-3.png" },
    { id: 3, imageUrl: "https://i.ibb.co.com/8g93GVR8/w-4.png" },
    { id: 4, imageUrl: "https://i.ibb.co.com/M59MWQgk/w-5.png" },
    { id: 4, imageUrl: "https://i.ibb.co.com/4gMP3cW6/w-1.png" },
    { id: 4, imageUrl: "https://i.ibb.co.com/5XpfNZX3/r-3.png" },
    { id: 4, imageUrl: "https://i.ibb.co.com/BH43ZRNv/r-2.png" },
    { id: 4, imageUrl: "https://i.ibb.co.com/mCrbXbWr/r-1.png" },
  ];

  return (
    <div className="container mx-auto overflow-hidden px-4 py-16 font-montserrat">
      <div className="mx-auto mb-8 max-w-7xl text-center">
        <SectionHeading
          heading="Top Donors"
          subHeading="We appreciate the generosity of our supporters"
        />
      </div>
      <Marquee pauseOnHover speed={50} autoFill gradient>
          {donors.map((donor) => (
            <div key={donor.id} className="h-24 w-24 flex-shrink-0 mr-6">
              <img
                src={donor.imageUrl}
                alt={`Donor ${donor.id}`}
                className="h-full w-full object-contain grayscale filter transition duration-300 hover:grayscale-0"
              />
            </div>
          ))}
      </Marquee>
    </div>
  );
};

export default TopDonorsMarquee;
