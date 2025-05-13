// SubscribeSection.jsx
import  { useState } from "react";
import { message } from "antd";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    message.success("We got your request. We will contact you soon.");
    setEmail("");
  };

  return (
    <div className="bg-gradient-to-br from-secondary to-g2 py-16 font-montserrat">
      <div className="container mx-auto px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="max-w-2xl mx-auto mb-8 text-base">
          Stay updated with the latest news, health tips, and exclusive offers from Zenith Care. Sign up below and let us keep you informed!
        </p>
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              className="w-full p-3 rounded-md text-gray-800 focus:outline-none mb-4 sm:mb-0 sm:mr-2"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-g1 text-white font-bold py-3 px-6 rounded-md transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
