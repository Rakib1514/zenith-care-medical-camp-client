import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const MainLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <header >
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
