import { loadStripe } from "@stripe/stripe-js";
import SectionHeading from "../../components/SectionHeading";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PK);

const Payment = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  
  const { data: camp } = useQuery({
    queryKey: ["paymentData", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reg-camp/${id}`);
      return res.data;
    },
  });

  return (
    <div>
      <SectionHeading heading="Payment here" subHeading="Taka dao taratari" />
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={camp?.campFee}/>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
