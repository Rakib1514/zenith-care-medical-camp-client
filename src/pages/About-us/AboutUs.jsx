import { useEffect, useState } from "react";
import SectionHeading from "../../components/SectionHeading";
import { useLocation } from "react-router-dom";

const AboutPage = () => {
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState("");

  const handleContact = () => {
    if (email.trim() !== "") {
      setNotification(
        "Thank you for reaching out! We will get back to you shortly.",
      );
      setEmail(""); // Optionally clear the input field after submission
    } else {
      setNotification("Please enter a valid email address.");
    }
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.id) {
      const target = document.getElementById(location.state.id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div id="about-us" className="min-h-screen bg-menu_bg font-montserrat text-gray-800">
      {/* Hero / Introduction */}
      <header className="bg-primary px-4 py-20 text-center text-white">
        <SectionHeading heading="About Us" subHeading="Our Journey & Vision" />
        <p className="mx-auto mt-4 max-w-2xl text-lg">
          Welcome to Zenith Care – a comprehensive Medical Camp Management
          System designed to empower organizers and participants. Our mission is
          to streamline healthcare access with cutting-edge technology,
          providing secure and efficient solutions.
        </p>
      </header>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-16">
        <SectionHeading heading="Our Story" subHeading="How It All Started" />
        <div className="mt-8 flex flex-col items-center md:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co.com/ZzYG6g0p/Happy-Mental-Health.jpg"
              alt="Our Story"
              className="rounded-sm shadow-lg"
            />
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2 md:pl-8">
            <p className="text-lg leading-relaxed">
              Founded with a passion for healthcare innovation, Zenith Care was
              created to simplify the complexities of medical camp management.
              Built on modern web technologies such as React, Node.js, and
              MongoDB, we ensure a secure and user-friendly experience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="our-mission" className="bg-secondary py-16 text-white">
        <div className="container mx-auto px-4">
          <SectionHeading heading="Our Mission" subHeading="What Drives Us" />
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-lg">
              Our mission is to bridge the gap between healthcare providers and
              communities by offering a streamlined, secure, and innovative
              platform for managing medical camps. We’re committed to
              excellence, user safety, and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="our-team" className="container mx-auto px-4 py-16">
        <SectionHeading heading="Our Team" subHeading="Meet the Experts" />
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Team Member Card */}
          <div className="rounded-sm bg-white p-6 shadow-lg">
            <img
              src="https://i.ibb.co.com/GhMd5dD/shipman-northcutt-sg-ZX15-Da8-YE-unsplash-1.jpg"
              alt="Rakibul Islam"
              className="mx-auto h-32 w-32 rounded-full object-cover"
            />
            <h3 className="mt-4 text-center text-xl font-bold">Albert Z</h3>
            <p className="text-center">Founder & CEO</p>
          </div>
          <div className="rounded-sm bg-white p-6 shadow-lg">
            <img
              src="https://i.ibb.co.com/JjPTkdWc/abbat-uzk-Nxb-Pr-N9-E-unsplash-1.jpg"
              alt="Team Member"
              className="mx-auto h-32 w-32 rounded-full object-cover"
            />
            <h3 className="mt-4 text-center text-xl font-bold">Elara Doe</h3>
            <p className="text-center">CTO</p>
          </div>
          <div className="rounded-sm bg-white p-6 shadow-lg">
            <img
              src="https://i.ibb.co.com/Csz0JB9b/christopher-campbell-r-DEOVt-E7v-Os-unsplash-1.jpg"
              alt="Team Member"
              className="mx-auto h-32 w-32 rounded-full object-cover"
            />
            <h3 className="mt-4 text-center text-xl font-bold">Yumi Smith</h3>
            <p className="text-center">Lead Developer</p>
          </div>
        </div>
      </section>

      {/* Contact / Call to Action Section */}
      <section id="contact-us" className="bg-g1 px-4 py-16 text-white">
        <SectionHeading
          heading="Get In Touch"
          subHeading="We’re Here to Help"
        />
        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-lg">
            Have questions or need more details about Zenith Care? Reach out to
            us today, and let’s start the conversation about revolutionizing
            healthcare access together.
          </p>
          <div className="mt-8 flex flex-col items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mb-4 w-full rounded border border-gray-300 p-3 text-black md:w-1/2"
            />
            <button
              type="button"
              onClick={handleContact}
              className="rounded bg-g2 px-8 py-3 font-bold text-white transition duration-300 hover:bg-primary"
            >
              Contact Us
            </button>
            {notification && (
              <div className="mt-4 rounded bg-green-100 p-3 text-green-800">
                {notification}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
