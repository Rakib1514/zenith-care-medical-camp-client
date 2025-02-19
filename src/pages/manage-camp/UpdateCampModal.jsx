import { Modal } from "antd";
import PropTypes from "prop-types";
import { Button, DatePicker, Form, Input, InputNumber, Upload } from "antd";
const { TextArea } = Input;
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import axiosPublic from "../../Utils/axiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import dayjs from "dayjs";
import useCampsData from "../../hooks/useCampsData";
import { messageError, messageSuccess } from "../../Utils/messageAlert";

const UpdateCampModal = ({ camp, isModalOpen, setIsModalOpen }) => {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(camp.image);
  const [form] = Form.useForm();
  const { refetch } = useCampsData();

  const axiosSecure = useAxiosSecure();

  const initValues = {
    ...camp,
    timeFrom: dayjs(camp.timeFrom),
    timeTo: dayjs(camp.timeTo),
  };

  const onFinish = async (values) => {
    try {
      setSubmitLoading(true);
      const updatedCampData = {
        ...values,
        image: photoURL,
      };

      const res = await axiosSecure.patch(
        `/update-camp/${camp._id}`,
        updatedCampData
      );

      if (res.data.modifiedCount <= 0) {
        throw new Error("update failed.");
      }

      // Success flow
      refetch();
      messageSuccess(`"${camp.name}" updated successfully`);
      setIsModalOpen(false);
    } catch (error) {
      messageError(error.message);
    } finally {
      setSubmitLoading(false);
    }
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
      // console.log(error);
    }
  };

  return (
    <Modal
      title="Update Camp"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      <Form
        form={form}
        initialValues={initValues}
        name="UpdateCamp"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
          <Input />
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
              message: "The description must be at least 100 characters long.",
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
                Camp Image
              </div>
            </button>
          </Upload>
          <div className="flex mt-4 gap-2">
            <p className="mt-2">Current Image: </p>
            <img
              src={camp.image}
              alt="Before image"
              className="w-16 h-14 object-cover"
            />
          </div>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" loading={submitLoading} className="mr-2">
            Update Camp
          </Button>
          <Button onClick={()=> setIsModalOpen(false)} type="dashed" >
            Cancel
          </Button>
        </Form.Item>
        
      </Form>
    </Modal>
  );
};

UpdateCampModal.propTypes = {
  camp: PropTypes.object,
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
};

export default UpdateCampModal;
