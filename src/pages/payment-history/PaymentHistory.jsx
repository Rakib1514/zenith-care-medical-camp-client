import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { uid } = useParams();

  const axiosSecure = useAxiosSecure();

  const { data = [] } = useQuery({
    queryKey: ["payment-history", uid],
    queryFn: async () => {
      const res = await axiosSecure.get(`/transactions/${uid}`);
      return res.data;
    },
  });

  return <div>payment History: {data.length}</div>;
};

export default PaymentHistory;
