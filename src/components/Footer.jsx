import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer bg-base-200 text-base-content p-10">
        <aside>
          <img
            src="https://i.ibb.co.com/020DWTL/istockphoto-1321617070-1024x1024-1.png"
            alt=""
            className="w-14 h-14 object-cover"
          />
          <p>
            <span className="font-semibold text-xl">Zenith Care</span>
            <br />
            Delivering trusted medic services since 2002
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Health Check-ups</a>
          <a className="link link-hover">Vaccination Drives</a>
          <a className="link link-hover">Mental Health Support</a>
          <a className="link link-hover">Nutritional Counseling</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to={'/about-us'} state={{id: "about-us"}} className="link link-hover">About Zenith</Link>
          <Link to={'/about-us'} state={{id: "our-mission"}} className="link link-hover">Our Mission</Link>
          <Link to={'/about-us'} state={{id: "our-team"}} className="link link-hover">Our Team</Link>
          <Link to={'/about-us'} state={{id: "contact-us"}} className="link link-hover">Contact Us</Link>
          
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link to={'/legal'} state={{id: 'legal'}} className="link link-hover">Legal Info</Link>
          <Link to={'/legal'} state={{id: 'service-terms'}} className="link link-hover">Terms of Service</Link>
          <Link to={'/legal'} state={{id: 'privacy-policy'}} className="link link-hover">Privacy Policy</Link>
          <Link to={'/legal'} state={{id: 'data-protection'}} className="link link-hover">Data Protection</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
