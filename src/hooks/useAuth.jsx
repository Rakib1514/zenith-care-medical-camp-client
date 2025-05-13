import { useContext } from "react";
import AuthContext from "../providers/auth-provider/AuthContext";

const useAuth = () => {
  const auth = useContext(AuthContext);

  return auth;
};

export default useAuth;
