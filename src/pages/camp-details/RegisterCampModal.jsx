import PropTypes from "prop-types";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
} from "antd";
import { CiUser } from "react-icons/ci";
import { BsGenderAmbiguous, BsTelephone } from "react-icons/bs";
import {
  FaLocationDot,
  FaMoneyBillWave,
  FaUser,
  FaUserDoctor,
} from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { MdEmail } from "react-icons/md";
import dayjs from "dayjs";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";

const RegisterCampModal = ({ setIsModalOpen, isModalOpen, camp }) => {
  const [regBtnLoading, setRegBtnLoading] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [form] = Form.useForm();

  const {
    name: campName,
    location,
    healthcareProfessional,
    fees,
    timeFrom,
    timeTo,
    _id,
  } = camp;

  const handleRegisterCamp = async (values) => {
    setRegBtnLoading(true);
    const campRegInfo = {
      ...values,
      campId: _id,
      campName: campName,
      campFee: fees,
      campLocation: location,
      campLeadBy: healthcareProfessional,
      participantName: user?.displayName,
      participantEmail: user?.email,
      participantUid: user?.uid,
      paymentStatus: false,
      confirmationStatus: false,
    };

    try {
      const res = await axiosSecure.post("/reg-camps", campRegInfo);

      if (!res.data?.insertedId) {
        throw new Error("inserted Id not returned");
      }

      // success flow
      alert(`Registration success. Reg Id: ${(await res).data.insertedId}`);
      form.resetFields();
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setRegBtnLoading(false);
    }
  };

  const disabledDate = (current) => {
    const today = dayjs().endOf("day");
    if (current && current.isBefore(today)) {
      return true;
    }
    if (current && (current.isBefore(timeFrom) || current.isAfter(timeTo))) {
      return true;
    }
  };

  const startDate = dayjs(timeFrom).format("DD-MMM-YYYY");
  const endDate = dayjs(timeTo).format("DD-MMM-YYYY");

  return (
    <Modal
      title={campName}
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={false}
    >
      <div className="my-4">
        <p className="flex items-center gap-1">
          Camp Available From {startDate} to {endDate}
        </p>
        <p className="flex items-center gap-1">
          <span>
            <FaLocationDot />
          </span>
          <span>{location}</span>
        </p>
        <p className="flex items-center gap-1">
          <span>
            <FaUserDoctor />
          </span>
          <span>{healthcareProfessional}</span>
        </p>
        <p className="flex items-center gap-1">
          <span>
            <FaMoneyBillWave />
          </span>
          <span>${fees}</span>
        </p>

        <div className="">
          <p>Participant:</p>
          <p className="flex items-center gap-1">
            <span>
              <FaUser />
            </span>
            <span>{user?.displayName}</span>
          </p>
          <p className="flex items-center gap-1">
            <span>
              <MdEmail />
            </span>
            <span>{user?.email}</span>
          </p>
        </div>
      </div>
      <Form
        form={form}
        name="login"
        initialValues={{
          remember: true,
        }}
        style={{
          maxWidth: 360,
        }}
        onFinish={handleRegisterCamp}
      >
        <Form.Item
          name="participantAge"
          rules={[
            {
              required: true,
              message: "Please enter your age!",
            },
          ]}
        >
          <InputNumber
            style={{
              width: "100%",
            }}
            prefix={<CiUser />}
            placeholder="Your Age"
          />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please input your Phone Number!",
            },
          ]}
        >
          <Input
            prefix={<BsTelephone />}
            type="tel"
            placeholder="Your Phone Number"
          />
        </Form.Item>

        <Form.Item
          name="gender"
          rules={[
            {
              required: true,
              message: "Please select your Gender!",
            },
          ]}
        >
          <Select
            prefix={<BsGenderAmbiguous />}
            placeholder="Gender"
            initialValues={null}
            options={[
              {
                value: "male",
                label: "Male",
              },
              {
                value: "female",
                label: "Female",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="emergencyContact"
          rules={[
            {
              required: true,
              message: "Please input an Emergency contact number",
            },
          ]}
        >
          <Input
            prefix={<BsTelephone />}
            type="tel"
            placeholder="Emergency contact"
          />
        </Form.Item>

        <Form.Item
          name="joinDate"
          rules={[
            {
              required: true,
              message: "Please select a date for join",
            },
          ]}
        >
          <DatePicker format="YYYY-MM-DD" disabledDate={disabledDate} />
        </Form.Item>
        <Form.Item>
          <p>
            Camp Available From {startDate} to {endDate}
          </p>
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            loading={regBtnLoading}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

RegisterCampModal.propTypes = {
  setIsModalOpen: PropTypes.func,
  isModalOpen: PropTypes.bool,
  handleRegisterCamp: PropTypes.func,
  camp: PropTypes.object,
};

export default RegisterCampModal;
