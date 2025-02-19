import { loadStripe } from "@stripe/stripe-js";
import SectionHeading from "../../components/SectionHeading";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import PaymentLoading from "../../components/loading-components/PaymentLoading";


const stripePromise = loadStripe(import.meta.env.VITE_PK);

const Payment = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  
  const { data: camp, isLoading } = useQuery({
    queryKey: ["paymentData", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reg-camp/${id}`);
      return res.data;
    },
  });

  if(isLoading){
    return <PaymentLoading/>
  }

  return (
    <div>
      <Helmet title={`Payment | ${camp.campName}`}/>
      <SectionHeading heading="Secure Your Spot with Ease" subHeading="Complete Your Payment Seamlessly Using Your Card" />

      <div className="max-w-xl mx-auto mb-6 ">
        <h3 className="font-semibold">{camp.campName}</h3>
        <p>{camp.campLeadBy}</p>
        <p>Fee: <span className="font-bold">${camp.campFee}</span></p>
      </div>
      
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm camp={camp} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
