import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: isAdmin = false, isLoading } = useQuery({
    queryKey: ["isAdmin", user?.uid],
    queryFn: async () => {
      const res = await axiosSecure(`/users/admin/${user.uid}`);
      return res.data.admin
    },
  });

  return { isAdmin, isLoading };
};

export default useAdmin;
