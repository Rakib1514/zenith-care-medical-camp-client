import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
// import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useEffect } from "react";

const MainLayout = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // Animation duration (in milliseconds)
  //     once: true,     
  //   });
  // }, []);
  return (
    <div className="overflow-hidden">
      <header>
        <nav className="fixed z-10 w-full">
          <Navbar/>
        </nav>
      </header>
      <main className="pt-16">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
