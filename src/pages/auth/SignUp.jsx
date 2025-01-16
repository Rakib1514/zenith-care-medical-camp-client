import Lottie from "lottie-react";
import animation from "../../assets/lottie-auth.json";
import { Button, Form, Input, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axiosPublic from "../../Utils/axiosPublic";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SignUp = () => {
  const [photoURL, setPhotoURL] = useState("");
  const [message, setMessage] = useState("");
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const { userSignUp, updateUser, loading, setLoading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const onFinish = async (values) => {
    setMessage("");
    try {
      const result = await userSignUp(values.email, values.password);

      if (!result.user.email) {
        throw new Error("user not created, result > user > email not returned");
      }

      // Success Flow
      await updateUser(values.name, photoURL);

      const userInfo = {
        name: values.name,
        image: photoURL,
        uid: result.user.uid,
        email: result.user.email,
      };

      const res = await axiosSecure.post("/users", userInfo);

      if (!res.data.insertedId) {
        console.log("failed to post userInfo to DB");
      }

      navigate("/");
      form.resetFields();
    } catch (error) {
      console.log(error.message);
      setMessage(error.message);
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleImageUpload = async (options) => {
    const { file, onSuccess, onError } = options;
    const formData = new FormData();
    formData.append("image", file);
    formData.append("key", import.meta.env.VITE_apiKeyImgbb);

    try {
      const response = await axiosPublic.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        onSuccess(response.data);
        setPhotoURL(response.data.data.url);
      } else {
        onError("Upload failed");
      }
    } catch (error) {
      onError("Upload failed");
      console.log(error);
    }
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 overflow-x-hidden">
      <div className="row-start-2 md:row-auto">
        <Lottie className="h-96" animationData={animation} loop={true} />
      </div>
      <Form
        form={form}
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
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "Please input valid email!",
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              min: 8,
              message: "Password must be at least 8 characters long.",
            },
            {
              pattern: /^(?=.*[a-z])/,
              message: "Password must contain at least one lowercase letter.",
            },
            {
              pattern: /^(?=.*\d)/,
              message: "Password must contain at least one number.",
            },
            {
              pattern: /^(?=.*[A-Z])/,
              message:
                "Password must contain at least one one uppercase letter.",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Upload"
          name={"image"}
          rules={[
            {
              required: true,
              message: "Please upload an image!",
            },
          ]}
        >
          <Upload
            customRequest={handleImageUpload}
            listType="picture-card"
            maxCount={1}
          >
            <button
              style={{
                border: 0,
                background: "none",
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload Your Image
              </div>
            </button>
          </Upload>
        </Form.Item>

        <Form.Item label={null}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "#009045" }}
            loading={loading}
            // disabled={photoURL ? false : true}
          >
            Sign Up
          </Button>
        </Form.Item>
        <Form.Item label={null}>
          <Link to={"/join-us/sign-in"}>
            <p className="hover:text-primary underline">
              Already Have an account! Sign-in
            </p>
          </Link>
        </Form.Item>
        <p className="text-red-700 text-xs">{message && message}</p>
      </Form>
    </div>
  );
};

export default SignUp;
