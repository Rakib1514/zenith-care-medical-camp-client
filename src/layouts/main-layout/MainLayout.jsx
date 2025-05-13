import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "aos/dist/aos.css";
import Footer from "../../components/Footer";
import { message } from "antd";

const MainLayout = () => {
  const [messageApi, contextHolder] = message.useMessage();
  
  return (
    <div>
       {contextHolder}
      <header>
        <nav className="fixed z-10 w-full">
          <Navbar />
        </nav>
      </header>
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
