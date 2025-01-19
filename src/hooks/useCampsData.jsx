import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../Utils/axiosPublic";

const useCampsData = () => {
  const {
    data: campsData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["camps"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/camps`);
      return res.data;
    },
  });
  return { campsData, isLoading, refetch };
};

export default useCampsData;
