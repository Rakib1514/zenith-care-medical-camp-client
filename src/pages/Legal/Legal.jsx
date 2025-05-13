import { useLocation } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading";
import { useEffect } from "react";

const LegalPage = () => {
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
    <div id="legal" className="min-h-screen bg-menu_bg font-montserrat text-gray-800">
      {/* Hero / Introduction */}
      <header className="bg-primary px-4 py-16 text-center text-white">
        <SectionHeading
          heading="Legal Information"
          subHeading="Terms of Service, Privacy Policy & Data Protection"
        />
        <p className="mx-auto mt-4 max-w-2xl text-lg">
          Welcome to Zenith Care. Please review our legal policies which govern
          the use of our website and services. We strive for transparency and
          are committed to your security and privacy.
        </p>
      </header>

      {/* Terms of Service Section */}
      <section id="service-terms" className="container mx-auto px-4 py-16">
        <SectionHeading
          heading="Terms of Service"
          subHeading="Your Agreement with Us"
        />
        <div className="mx-auto mt-8 max-w-3xl rounded-lg bg-white p-8 shadow-md">
          <p className="mb-4 text-base">
            By accessing and using our website and services, you agree to be
            bound by the following Terms of Service. We reserve the right to
            update these terms without prior notice. It is your responsibility
            to review them periodically.
          </p>
          <p className="mb-4 text-base font-semibold">Key Provisions:</p>
          <ol className="mb-4 list-inside list-decimal space-y-2 text-base">
            <li>
              <span className="font-semibold">Account Security:</span> You are
              responsible for maintaining the confidentiality of your account
              credentials. Any activity under your account is your
              responsibility.
            </li>
            <li>
              <span className="font-semibold">Prohibited Activities:</span>{" "}
              Misuse of our services, including but not limited to unauthorized
              access, data mining, or interfering with other users&apos; experience,
              is strictly forbidden.
            </li>
            <li>
              <span className="font-semibold">Intellectual Property:</span> All
              content, trademarks, and intellectual properties featured on our
              platform remain the property of Zenith Care or its licensors.
            </li>
            <li>
              <span className="font-semibold">Third-Party Links:</span> Our site
              may contain links to external websites. We are not responsible for
              the content or practices of those sites.
            </li>
            <li>
              <span className="font-semibold">Service Interruptions:</span> Our
              services are provided on an “as is” basis, and we do not guarantee
              uninterrupted, error-free, or secure access at all times.
            </li>
          </ol>
          <p className="text-base">
            By using our services, you acknowledge that you have read,
            understood, and agree to be bound by these Terms of Service. If you
            do not agree with any part of these terms, please refrain from using
            our platform.
          </p>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy-policy" className="container mx-auto px-4 py-16">
        <SectionHeading
          heading="Privacy Policy"
          subHeading="How We Collect and Use Your Information"
        />
        <div className="mx-auto mt-8 max-w-3xl rounded-lg bg-white p-8 shadow-md">
          <p className="mb-4 text-base">
            At Zenith Care, we take your privacy very seriously. This Privacy
            Policy describes how we collect, use, and protect your personal
            information.
          </p>
          <p className="mb-4 text-base font-semibold">
            Information We Collect:
          </p>
          <ul className="mb-4 list-inside list-disc space-y-2 text-base">
            <li>
              <span className="font-semibold">Personal Data:</span> Such as your
              name, email address, and contact details provided during
              registration or service interactions.
            </li>
            <li>
              <span className="font-semibold">Usage Data:</span> Information on
              how you interact with our platform, including IP addresses,
              browser type, and access times.
            </li>
            <li>
              <span className="font-semibold">Cookies and Tracking:</span> We
              use cookies to enhance your experience and gather analytical data.
            </li>
          </ul>
          <p className="mb-4 text-base font-semibold">
            How We Use Your Information:
          </p>
          <ul className="mb-4 list-inside list-disc space-y-2 text-base">
            <li>
              <span className="font-semibold">Service Personalization:</span> To
              tailor your experience and provide relevant content and offers.
            </li>
            <li>
              <span className="font-semibold">Communication:</span> To send you
              important updates, newsletters, and promotional materials, only
              with your consent.
            </li>
            <li>
              <span className="font-semibold">Improvement of Services:</span> To
              analyze usage trends and enhance our platform’s functionality and
              security.
            </li>
          </ul>
          <p className="text-base">
            We are committed to not selling or sharing your personal information
            with third parties without your explicit consent, except where
            required by law.
          </p>
        </div>
      </section>

      {/* Data Protection Section */}
      <section id="data-protection" className="container mx-auto px-4 py-16">
        <SectionHeading
          heading="Data Protection"
          subHeading="Ensuring the Security of Your Data"
        />
        <div className="mx-auto mt-8 max-w-3xl rounded-lg bg-white p-8 shadow-md">
          <p className="mb-4 text-base">
            Protecting your data is a top priority for us. We employ robust
            security measures to safeguard your personal information and ensure
            compliance with current data protection regulations.
          </p>
          <p className="mb-4 text-base font-semibold">
            Our Security Measures Include:
          </p>
          <ul className="mb-4 list-inside list-disc space-y-2 text-base">
            <li>
              <span className="font-semibold">Encryption:</span> All sensitive
              data, including payment information and personal details, is
              transmitted via HTTPS and stored using strong encryption
              protocols.
            </li>
            <li>
              <span className="font-semibold">Access Controls:</span> Strict
              measures ensure that only authorized personnel can access your
              data.
            </li>
            <li>
              <span className="font-semibold">Regular Audits:</span> We conduct
              periodic security reviews and audits to identify and mitigate
              potential vulnerabilities.
            </li>
            <li>
              <span className="font-semibold">Incident Response:</span> In the
              unlikely event of a data breach, our response team is prepared to
              take immediate action to notify affected users and minimize risks.
            </li>
          </ul>
          <p className="mb-4 text-base">
            We continuously update our security policies and practices to adhere
            to the latest standards in data protection. Your trust is our
            priority, and we are committed to maintaining the highest level of
            security for your data.
          </p>
          <p className="text-base">
            If you have any questions or concerns regarding our data protection
            practices, please contact our support team.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
