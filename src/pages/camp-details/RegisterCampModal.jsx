import PropTypes from "prop-types";
import { Button, Form, Input, InputNumber, Modal, Select } from "antd";
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

const RegisterCampModal = ({ setIsModalOpen, isModalOpen, camp }) => {
  const { user } = useAuth();

  const {
    image,
    name: campName,
    location,
    participantCount,
    healthcareProfessional,
    fees,
    timeFrom,
    timeTo,
    description,
  } = camp;

  const handleRegisterCamp = (values) => {
    console.log(values);
  };

  return (
    <Modal
      title={campName}
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={false}
    >
      <div className="my-4">
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
          <InputNumber style={{
            width: "100%"
          }} prefix={<CiUser />} placeholder="Your Age" />
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
            defaultValue={null}
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

        <Form.Item>
          <Button block type="primary" htmlType="submit">
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
