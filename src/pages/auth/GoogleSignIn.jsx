import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { messageError } from "../../Utils/messageAlert";
import axiosPublic from "../../Utils/axiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "antd";

const GoogleSignIn = () => {
  const [googleBtnLoading, setGoogleBtnLoading] = useState(false)
  const { userGoogleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = async () => {
    try {
      setGoogleBtnLoading(true)
      const result = await userGoogleSignIn();
      if (!result.user.email) {
        throw new Error("sign in failed with google");
      }

      const userInfo = {
        name: result.user?.displayName,
        image: result.user?.photoURL,
        uid: result.user?.uid,
        email: result.user?.email,
      };
      await axiosPublic.post("/users/google-sign-in", userInfo);
      // Success Flow
      navigate(from);
    } catch (error) {
      messageError(error.message);
    } finally {
      setGoogleBtnLoading(false)
    }
  };

  return (
    <Button loading={googleBtnLoading} onClick={handleGoogleSignIn} className="h-12">
      <FcGoogle /> Sign in with Google
    </Button>
  );
};

export default GoogleSignIn;
