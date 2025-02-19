
import { Form, Input, Select, DatePicker, Button, Collapse, message, Row, Col } from "antd";
import SectionHeading from "../../../components/SectionHeading";

const { Panel } = Collapse;
const { Option } = Select;

const AppointmentFAQSection = () => {
  const [form] = Form.useForm();


  const onFinish = (values) => {
    
    message.success("We got your request. We will contact you soon.");
    form.resetFields();
  };

  return (
    <div className="mx-auto w-full container px-4 py-16 md:flex md:space-x-8">
      {/* Left Column: Book an Appointment (Ant Design Form) */}
      <div className="md:w-1/2 bg-gradient-to-br from-secondary to-g2  p-8 rounded-md text-white mb-8 md:mb-0">
        <SectionHeading
          heading="Book an Appointment"
          subHeading="Easy Scheduling & Secure"
        />

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="mt-6 
            [&_.ant-form-item-label>label]:text-white 
            [&_.ant-input]:bg-white 
            [&_.ant-select-selector]:bg-white 
            [&_.ant-picker-input>input]:bg-white 
            [&_.ant-form-item]:mb-4
          "
        >
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Select Department"
                name="department"
                rules={[{ required: true, message: "Please select a department" }]}
              >
                <Select placeholder="-- Select Department --">
                  <Option value="cardiology">Cardiology</Option>
                  <Option value="neurology">Neurology</Option>
                  <Option value="orthopedics">Orthopedics</Option>
                  <Option value="pediatrics">Pediatrics</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Select Doctor"
                name="doctor"
                rules={[{ required: true, message: "Please select a doctor" }]}
              >
                <Select placeholder="-- Select Doctor --">
                  <Option value="dr-john">Dr. Angela L</Option>
                  <Option value="dr-john">Dr. Anita Mehra</Option>
                  <Option value="dr-john">Dr. Olivier Moreau</Option>
                  <Option value="dr-john">Dr. Lukas Weber</Option>
                  <Option value="dr-jane">Dr. Jane Smith</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Your Name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true, message: "Please enter your phone number" }]}
              >
                <Input placeholder="Your Phone Number" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Your Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input placeholder="example@mail.com" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Preferred Date"
                name="date"
                rules={[{ required: true, message: "Please select a date" }]}
              >
                <DatePicker className="w-full" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="bg-secondary border-none hover:bg-g1">
              Make an Appointment
            </Button>
          </Form.Item>
        </Form>
      </div>

      {/* Right Column: FAQ (Ant Design Collapse) */}
      <div className="md:w-1/2 bg-white p-8 rounded-md text-gray-800">
        <SectionHeading heading="Have Some Questions?" subHeading="FAQ" />
        <Collapse className="mt-6" accordion bordered={false} defaultActiveKey={["1"]}>
          <Panel header="What are your regular office hours?" key="1">
            <p className="text-base leading-relaxed">
              Our office is open Monday through Friday, from 9:00 AM to 5:00 PM.
              We also offer limited weekend hours for urgent appointments.
            </p>
          </Panel>
          <Panel header="What is your appointment policy?" key="2">
            <p className="text-base leading-relaxed">
              We recommend booking appointments in advance. However, walk-ins are
              welcome and will be accommodated based on availability. For
              cancellations, please notify us at least 24 hours prior to your
              scheduled appointment.
            </p>
          </Panel>
          <Panel header="What should I do if I'm ill?" key="3">
            <p className="text-base leading-relaxed">
              If you are experiencing symptoms of illness, please call our office
              to speak with a nurse or doctor. In case of an emergency, dial your
              local emergency services immediately.
            </p>
          </Panel>
          <Panel header="How do I get a refill on my prescription?" key="4">
            <p className="text-base leading-relaxed">
              You can request prescription refills through our online portal or by
              calling our office. Please allow 24-48 hours for the refill to be
              processed.
            </p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default AppointmentFAQSection;
