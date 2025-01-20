import { Button, Drawer } from "antd";
import { useState } from "react";
import {  Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import DashboardNav from "./DashboardNav";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaRegWindowClose } from "react-icons/fa";

const DashboardLayout = () => {
  const { isLoading: isLoadingAdmin } = useAdmin();
  

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  if(isLoadingAdmin){
    return <h2>loading for is Admin</h2>
  }

  return (
    <div className="px-4 md:px-0 overflow-x-hidden">
      <div className=" md:hidden mt-6 fixed z-30">
        <Button type="primary" onClick={showDrawer} className="bg-primary">
          {open ? <FaRegWindowClose className="text-2xl"/>: <AiOutlineMenuUnfold className="text-2xl"/>}
        </Button>
      </div>
      <Drawer
        title="Dashboard"
        onClose={onClose}
        open={open}
        placement={"left"}
        style={{
          backgroundColor: "#0076BA",
          color: "white",
        }}
      >
        <div className="text-white font-semibold">
          <ul className="uppercase menu ">
            <DashboardNav setOpen={setOpen} open={open}/>
          </ul>
        </div>
      </Drawer>

      <div className="md:flex ">
        <div className="hidden md:block bg-primary w-64 min-h-svh text-white font-semibold">
          <ul className=" uppercase menu ">
            <DashboardNav />
          </ul>
        </div>
        <div className="flex-1 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
