import { Skeleton } from "antd";

const CardLoading = () => {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
        <div className="w-full min-h-52  flex flex-col items-center">
          <Skeleton.Image active style={{height: "150px", width: "250px",}}/>
          <Skeleton active size="10" style={{width: "250px" , margin: "20px"}} />
        </div>
        
        <div className="w-full min-h-52  flex flex-col items-center">
          <Skeleton.Image active style={{height: "150px", width: "250px",}}/>
          <Skeleton active size="10" style={{width: "250px" , margin: "20px"}} />
        </div>
        
        <div className="w-full min-h-52  flex flex-col items-center">
          <Skeleton.Image active style={{height: "150px", width: "250px",}}/>
          <Skeleton active size="10" style={{width: "250px" , margin: "20px"}} />
        </div>
        <div className="w-full min-h-52  flex flex-col items-center lg:hidden">
          <Skeleton.Image active style={{height: "150px", width: "250px",}}/>
          <Skeleton active size="10" style={{width: "250px" , margin: "20px"}} />
        </div>
        
      </div>
    </div>
  );
};

export default CardLoading;
