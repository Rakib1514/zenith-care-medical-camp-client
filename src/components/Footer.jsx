import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer bg-base-200 p-10 text-base-content">
        <aside>
          <img
            src="https://i.ibb.co.com/020DWTL/istockphoto-1321617070-1024x1024-1.png"
            alt=""
            className="h-14 w-14 object-cover"
          />
          <p>
            <span className="text-xl font-semibold">Zenith Care</span>
            <br />
            Delivering trusted medic services since 2002
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link
            to={"/services"}
            state={{ id: "health-check-ups" }}
            className="link-hover link"
          >
            Health Check-ups
          </Link>
          <Link
            to={"/services"}
            state={{ id: "vaccination-drives" }}
            className="link-hover link"
          >
            Vaccination Drives
          </Link>
          <Link
            to={"/services"}
            state={{ id: "mental-health-support" }}
            className="link-hover link"
          >
            Mental Health Support
          </Link>
          <Link
            to={"/services"}
            state={{ id: "nutritional-counseling" }}
            className="link-hover link"
          >
            Nutritional Counseling
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link
            to={"/about-us"}
            state={{ id: "about-us" }}
            className="link-hover link"
          >
            About Zenith
          </Link>
          <Link
            to={"/about-us"}
            state={{ id: "our-mission" }}
            className="link-hover link"
          >
            Our Mission
          </Link>
          <Link
            to={"/about-us"}
            state={{ id: "our-team" }}
            className="link-hover link"
          >
            Our Team
          </Link>
          <Link
            to={"/about-us"}
            state={{ id: "contact-us" }}
            className="link-hover link"
          >
            Contact Us
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link
            to={"/legal"}
            state={{ id: "legal" }}
            className="link-hover link"
          >
            Legal Info
          </Link>
          <Link
            to={"/legal"}
            state={{ id: "service-terms" }}
            className="link-hover link"
          >
            Terms of Service
          </Link>
          <Link
            to={"/legal"}
            state={{ id: "privacy-policy" }}
            className="link-hover link"
          >
            Privacy Policy
          </Link>
          <Link
            to={"/legal"}
            state={{ id: "data-protection" }}
            className="link-hover link"
          >
            Data Protection
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
