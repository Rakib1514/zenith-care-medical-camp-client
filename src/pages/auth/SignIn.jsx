import Lottie from "lottie-react";
import { Button, Checkbox, Form, Input } from "antd";
import animation from "../../assets/sign-in-animation.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import GoogleSignIn from "./GoogleSignIn";
import { Helmet } from "react-helmet-async";

const SignIn = () => {
  const { userSignIn, loading, setLoading } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onFinish = async (values) => {
    try {
      setErrorMessage("");
      const result = await userSignIn(values.email, values.password);
      if (!result.user) {
        setLoading(false);
        throw new Error("user not returned, sign in failed");
      }
      // Success Flow
      navigate(from);
    } catch (error) {
      setLoading(false);

      if (
        error.message === "Firebase: Error (auth/invalid-credential)." ||
        error.message === "Firebase: Error (auth/invalid-email)."
      ) {
        setErrorMessage("Email or Password incorrect");
      } else {
        setErrorMessage(error.message);
      }
    }
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
    setLoading(false);
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 overflow-x-hidden">
      <Helmet title="Zenith | Sign In"/>
      <div className="row-start-2 md:row-auto">
        <Lottie className="h-96" animationData={animation} loop={true} />
      </div>
      <div>
        <div className="flex justify-center">
        <GoogleSignIn />
        </div>
        <div className="divider">OR</div>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          {errorMessage && (
            <Form.Item label={null}>
              <p className="text-red-700">{errorMessage}</p>
            </Form.Item>
          )}

          <Form.Item label={null}>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="bg-primary"
            >
              Sign in
            </Button>
          </Form.Item>
          <Form.Item label={null}>
            <Link to={"/join-us/sign-up"}>
              <p className="hover:text-primary underline">
                New Here? Create an account
              </p>
            </Link>
          </Form.Item>
          
        </Form>
        
      </div>
    </div>
  );
};

export default SignIn;
