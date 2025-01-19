import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UserProfile = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryKey: ["userData", user?.uid],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.uid}`);
      return res.data;
    },
  });

  if ((loading, isLoading)) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="min-h-svh">
      <div className="max-w-3xl mx-auto">
        <div className="max-h-52 relative">
          <img
            src={
              data?.thumbnail || "https://i.ibb.co.com/mJmSDbq/2148610468-1.jpg"
            }
            alt="Profile Cover Photo"
            className="h-full w-full"
          />
          <div className="h-44  absolute top-14 right-6 flex  justify-center items-center gap-6">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-primary  to-secondary text-white px-6 py-2">
              {user?.displayName}
            </h2>
            <img
              src={user?.photoURL}
              alt="Profile Photo"
              className="h-full object-cover rounded-full border-secondary border-4 shadow-xl w-44"
            />
          </div>
        </div>
        <div className="mt-20">
          
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
