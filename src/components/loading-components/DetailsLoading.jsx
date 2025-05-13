import { Skeleton } from "antd";

const DetailsLoading = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-12 ">
      <div className="flex justify-center ">
        <Skeleton.Image active style={{ width: "300px", height: "400px" }} />
      </div>
      <div>
        <Skeleton active />
        <Skeleton active style={{ marginTop: "8px" }} />
      </div>
    </div>
  );
};

export default DetailsLoading;
