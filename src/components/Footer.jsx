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
          <Link to={'/about-us'} className="link link-hover">About Zenith</Link>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Us</a>
          
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Data Protection</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
