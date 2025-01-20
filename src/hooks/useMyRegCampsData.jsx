import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useMyRegCampsData = (uid) => {
  const axiosSecure = useAxiosSecure();

  const {
    data: myRegCampsData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-registered-camps", uid],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reg-camps/${uid}`);
      return res.data;
    },
  });

  return { myRegCampsData, isLoading, refetch };
};

export default useMyRegCampsData;
