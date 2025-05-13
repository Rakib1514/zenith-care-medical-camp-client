import HeadingLoading from "./HeadingLoading";


const PaymentLoading = () => {
  return (
    <div className="min-h-screen">
      <HeadingLoading/>
      <div className=" w-4/6 h-[20vw] skeleton mx-auto mt-12"></div>
    </div>
  );
};

export default PaymentLoading;