import { Button, Form, message, Modal, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import PropTypes from "prop-types";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";

const ModalFeedBack = ({ isModalOpen, setIsModalOpen, regCamp,refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [form] = Form.useForm();
  const [submitBtnLoading,setSubmitBtnLoading] = useState(false)
  const {
    campName,
    participantName,
    campLocation,
    joinDate,
    campLeadBy: drName,
    _id,
    participantUid,
  } = regCamp;

  const handleFeedback = async (values) => {
    const newFeedBack = {
      ...values,
      campName,
      participantName,
      joinDate,
      drName,
      campLocation,
      regId: _id,
      participantUid,
      feedbackPostTime: new Date(),
    };

   try {
    setSubmitBtnLoading(true)
    const res = await axiosSecure.post("/feedback", newFeedBack);

    if (!res.data.insertedId) {
      throw new Error("FeedBack Post Failed");
    }

    // Success flow
    await axiosSecure.patch(`/feedback-status/${_id}`);
    form.resetFields();
    setIsModalOpen(false);
    refetch();
    // Todo: give a success modal thanks for feed back with auto close
    feedBackMessage()
   } catch (error) {
    console.log(error);
   } finally{
    setSubmitBtnLoading(false)
   }
  };

  const feedBackMessage = () => {
    message.success({
      content: `Thanks For Your Feedback. ❤️`,
      duration: 2,
    });
  };

  return (
    <Modal
      title="Give Your Valuable Feedback"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form
        form={form}
        name="feedback"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={handleFeedback}
      >
        <Form.Item
          label="Rate"
          name="Rate"
          rules={[
            {
              required: true,
              message: "Please Give a rating from 5!",
            },
          ]}
        >
          <Rate allowHalf />
        </Form.Item>

        <Form.Item label="Tell Us More" name="feedbackComment">
          <TextArea rows={4} maxLength={200} placeholder="Max 200 character"/>
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" loading={submitBtnLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

ModalFeedBack.propTypes = {
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
  regCamp: PropTypes.object,
  refetch: PropTypes.func,
};

export default ModalFeedBack;
