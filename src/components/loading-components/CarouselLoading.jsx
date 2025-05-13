import { Skeleton } from "antd";

const CarouselLoading = () => {
  return (
    <div className="h-[50svh] md:h-[60svh] lg:h-[50svh] flex justify-between items-center container mx-auto">
      <Skeleton.Image active style={{height:"250px", width:"250px"}}/>
      <Skeleton.Input active size={250}/>
      <Skeleton.Image active style={{height:"250px", width:"250px"}}/>
    </div>
  );
};

export default CarouselLoading;
