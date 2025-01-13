import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        
      </footer>
    </div>
  );
};

export default MainLayout;
