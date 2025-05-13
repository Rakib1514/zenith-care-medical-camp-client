import SectionHeading from "../../components/SectionHeading";
import { Button, DatePicker, Form, Input, InputNumber, Upload } from "antd";
const { TextArea } = Input;
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import axiosPublic from "../../Utils/axiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { messageError, messageSuccess } from "../../Utils/messageAlert";
import { Helmet } from "react-helmet-async";

const AddCamp = () => {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  const { user } = useAuth();
  const [form] = Form.useForm();

  const axiosSecure = useAxiosSecure();

  const onFinish = async (values) => {
    setSubmitLoading(true);
    const newCampData = {
      ...values,
      postedTime: new Date(),
      image: photoURL,
      contributor: user.uid,
      participantCount: 0,
    };

    const res = await axiosSecure.post("/camps", newCampData);
    if (!res.data.insertedId) {
      messageError('Camp Add Failed')
      throw new Error("data post failed to server");
    }

    // Success flow
    messageSuccess(`${values.name} Camp Added`);
    form.resetFields();
    setSubmitLoading(false);
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
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
    <div>
      <Helmet title="Zenith | Add New Camp"/>
      <SectionHeading
        heading="Add a New Camp"
        subHeading="Create and share essential details to organize your next medical camp."
      />
      <div className="grid md:grid-cols-2 gap-6">
        <Form
          form={form}
          name="addCamp"
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
            label="Camp Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter Camp Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Location"
            name="location"
            rules={[
              {
                required: true,
                message: "Please enter Camp Location!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Dr Name"
            name="healthcareProfessional"
            rules={[
              {
                required: true,
                message: "Please enter Healthcare Professional Name!",
              },
            ]}
          >
            <Input defaultValue={"Dr. "} />
          </Form.Item>

          <Form.Item
            label="Fee"
            name="fees"
            rules={[
              {
                required: true,
                message: "Please enter fees!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="Camp Start Date"
            name="timeFrom"
            rules={[
              { required: true, message: "Please enter date for the camp!" },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="Camp End Date"
            name="timeTo"
            rules={[
              { required: true, message: "Please enter date for the camp!" },
            ]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Description"
            name={"description"}
            rules={[
              {
                required: true,
                message: "Please write a description for the camp!",
              },
              {
                min: 100,
                message:
                  "The description must be at least 100 characters long.",
              },
              {
                max: 1000,
                message: "The description cannot exceed 1000 characters.",
              },
            ]}
          >
            <TextArea rows={4} />
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
                  Upload Camp Image
                </div>
              </button>
            </Upload>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" loading={submitLoading}>
              Add Camp
            </Button>
          </Form.Item>
        </Form>
        <div>Details</div>
      </div>
    </div>
  );
};

export default AddCamp;
