// ServicesPage.jsx

import { useLocation } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading";
import { useEffect } from "react";

const ServicesPage = () => {
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
    <div
      id="services"
      className="min-h-screen bg-menu_bg font-montserrat text-gray-800"
    >
      {/* Page Header */}
      <header className="bg-primary px-4 py-16 text-center text-white">
        <SectionHeading
          heading="Our Services"
          subHeading="Enhancing Your Health Journey"
        />
        <p className="mx-auto mt-4 max-w-2xl text-lg">
          At Zenith Care, we are dedicated to supporting your overall well-being
          through a range of comprehensive services. Explore our specialized
          offerings designed to keep you healthy and empowered.
        </p>
      </header>

      {/* Health Check-Ups Section */}
      <section id="health-check-ups" className="container mx-auto px-4 py-16">
        <SectionHeading
          heading="Health Check-Ups"
          subHeading="Regular monitoring for a healthier you"
        />
        <div className="mt-8 flex flex-col items-center md:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co.com/cKn4sC1R/111-1.png"
              alt="Health Check-Ups"
              className="rounded-sm shadow-md"
            />
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2 md:pl-8">
            <p className="mb-4 text-base">
              Our comprehensive health check-up services include routine
              screenings, diagnostic tests, and personalized consultations
              designed to monitor your overall health. Regular check-ups help in
              early detection of potential issues and provide a roadmap for a
              healthier lifestyle.
            </p>
            <ul className="list-inside list-disc space-y-2 text-base">
              <li>Routine physical examinations</li>
              <li>Diagnostic blood tests and imaging</li>
              <li>Personalized health reports and recommendations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vaccination Drives Section */}
      <section
        id="vaccination-drives"
        className="container mx-auto bg-white px-4 py-16"
      >
        <SectionHeading
          heading="Vaccination Drives"
          subHeading="Keeping communities safe"
        />
        <div className="mt-8 flex flex-col items-center md:flex-row">
          <div className="md:order-2 md:w-1/2">
            <img
              src="https://i.ibb.co.com/vvxjHRzW/11212-1.png"
              alt="Vaccination Drives"
              className="rounded-sm shadow-md"
            />
          </div>
          <div className="mt-6 md:order-1 md:mt-0 md:w-1/2 md:pr-8">
            <p className="mb-4 text-base">
              We organize regular vaccination drives to provide accessible
              immunization services. Our initiatives aim to protect communities
              from preventable diseases and promote public health.
            </p>
            <ol className="list-inside list-decimal space-y-2 text-base">
              <li>Seasonal flu and COVID-19 vaccinations</li>
              <li>Childhood immunization programs</li>
              <li>Community health outreach and awareness campaigns</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Mental Health Support Section */}
      <section
        id="mental-health-support"
        className="container mx-auto px-4 py-16"
      >
        <SectionHeading
          heading="Mental Health Support"
          subHeading="Nurturing your mental well-being"
        />
        <div className="mt-8 flex flex-col items-center md:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co.com/s76j1n6/2323-1.png"
              alt="Mental Health Support"
              className="rounded-sm shadow-md"
            />
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2 md:pl-8">
            <p className="mb-4 text-base">
              Our mental health support services provide a confidential and
              supportive environment to help you manage stress, anxiety, and
              other mental health challenges. We offer a range of programs to
              enhance your emotional resilience.
            </p>
            <ul className="list-inside list-disc space-y-2 text-base">
              <li>One-on-one counseling sessions</li>
              <li>Group therapy and support groups</li>
              <li>Stress management workshops</li>
              <li>Mindfulness and meditation classes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Nutritional Counseling Section */}
      <section
        id="nutritional-counseling"
        className="container mx-auto bg-white px-4 py-16"
      >
        <SectionHeading
          heading="Nutritional Counseling"
          subHeading="Guiding you towards a balanced diet"
        />
        <div className="mt-8 flex flex-col items-center md:flex-row">
          <div className="md:order-2 md:w-1/2">
            <img
              src="https://i.ibb.co.com/XktTyx5Y/Getty-Images-1474611838-3000x2000-1.png"
              alt="Nutritional Counseling"
              className="rounded-sm shadow-md"
            />
          </div>
          <div className="mt-6 md:order-1 md:mt-0 md:w-1/2 md:pr-8">
            <p className="mb-4 text-base">
              Our nutritional counseling services offer personalized guidance to
              help you achieve a balanced diet and optimal health. Whether you
              need to manage a health condition or improve your overall
              well-being, our experts provide tailored advice to meet your
              needs.
            </p>
            <ul className="list-inside list-disc space-y-2 text-base">
              <li>Customized meal planning</li>
              <li>Dietary assessments and consultations</li>
              <li>Guidance on managing food allergies and intolerances</li>
              <li>Education on healthy eating habits</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
