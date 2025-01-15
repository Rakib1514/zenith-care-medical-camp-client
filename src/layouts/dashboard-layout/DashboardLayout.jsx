import { Button, Drawer } from "antd";
import { useState } from "react";
import {  Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import DashboardNav from "./DashboardNav";

const DashboardLayout = () => {
  const { isAdmin } = useAdmin();
  console.log(isAdmin);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="px-4 md:px-0">
      <div className=" md:hidden">
        <Button type="primary" onClick={showDrawer}>
          {open ? "X" : "O"}
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
            <DashboardNav />
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
