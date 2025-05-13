const NavbarLoading = () => {
  return (
    <div className="flex items-center justify-between h-16 container mx-auto">
      <div className="skeleton w-28 h-9" />
      <div className="md:flex gap-6 hidden ">
        <div className="skeleton w-16 h-6" />
        <div className="skeleton w-16 h-6" />
        <div className="skeleton w-16 h-6" />
      </div>
      <div className="w-12 h-12 skeleton rounded-full" />
    </div>
  );
};

export default NavbarLoading;
