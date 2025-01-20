import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Form, Input, Button, InputNumber } from "antd";
import { useState } from "react";

const UserProfile = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const [updateBtnLoading, setUpdateBtnLoading] = useState(false);
  const { user, loading, updateUser } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["userData", user?.uid],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.uid}`);
      return res.data;
    },
  });

  // Update Profile Form Handle
  const onFinish = async (values) => {
    try {
      setUpdateBtnLoading(true);
      await updateUser(values.name, values.image);

      const res = await axiosSecure.patch(`/user/${user.uid}`, values);

      if (res.data.modifiedCount <= 0 && res.data.upsertedCount <= 0) {
        throw new Error("Profile Update failed");
      }
      refetch();
      setToggleForm(false);
    } catch (error) {
      console.log(error);
    } finally {
      setUpdateBtnLoading(false);
    }
  };

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
            className="max-h-52 w-full object-cover"
          />
          <div className="h-44  absolute top-36 right-6 flex  justify-center items-center gap-6">
            <h2 className="md:text-2xl text-xl font-semibold bg-gradient-to-r from-primary  to-secondary text-white px-6 py-2">
              {user?.displayName}
            </h2>
            <img
              src={user?.photoURL}
              alt="Profile Photo"
              className="md:h-44 md:w-44 h-28 w-28 object-cover rounded-full border-secondary border-4 shadow-xl "
            />
          </div>
        </div>
        <div className="mt-20 px-6">
          <p className="text-xl md:text-2xl font-semibold">Details</p>
          <div className="divider" />
          <div className="flex justify-between">
            {/* Details show */}
            <div className={toggleForm && "hidden"}>
              <p>
                <span className="font-semibold">Age:</span> {data?.age || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Address:</span>{" "}
                {data?.address || "N/A"}
              </p>
              <p>
                <span className="font-semibold">email:</span>{" "}
                {data?.email || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Emergency Contact: </span>
                {data?.emergencyContact || "N/A"}
              </p>
            </div>
            {/* Update Form */}
            <div className={toggleForm || "hidden"}>
              <Form
                layout="horizontal"
                onFinish={onFinish}
                initialValues={data}
              >
                <Form.Item
                  label="Full Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Your Name!",
                    },
                  ]}
                >
                  <Input placeholder="Enter your Name" />
                </Form.Item>
                <Form.Item
                  label="Photo URL"
                  name="image"
                  rules={[
                    {
                      required: true,
                      message: "Please Provide a photo URL!",
                    },
                  ]}
                >
                  <Input placeholder="Enter your Photo URL" />
                </Form.Item>
                <Form.Item
                  label="Age"
                  name="age"
                  rules={[
                    {
                      required: true,
                      message: "Please input your age!",
                    },
                  ]}
                >
                  <InputNumber placeholder="Enter your age" />
                </Form.Item>

                <Form.Item
                  label="Address"
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: "Please input your address!",
                    },
                  ]}
                >
                  <Input placeholder="Enter your address" />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,

                      type: "email",
                      message: "Please enter a valid email address!",
                    },
                  ]}
                >
                  <Input placeholder="Enter your email" readOnly />
                </Form.Item>

                <Form.Item label="Emergency Contact" name="emergencyContact">
                  <Input placeholder="Enter emergency contact " />
                </Form.Item>


                <Form.Item label="Profile Cover" name="thumbnail">
                  <Input placeholder="Profile Cover Image URL" />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={updateBtnLoading}
                  >
                    Update
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div>
              <Button
                onClick={() => setToggleForm(!toggleForm)}
                className="bg-primary text-white font-semibold"
              >
                {toggleForm ? "Cancel" : "Update"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
