import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const usePayHistory = (uid) => {

  const axiosSecure = useAxiosSecure();

  const { data: myPayHistory = [], isLoading } = useQuery({
    queryKey: ["payment-history", uid],
    queryFn: async () => {
      const res = await axiosSecure.get(`/transactions/${uid}`);
      return res.data;
    },
  });

  return {myPayHistory, isLoading} 
  
};

export default usePayHistory;