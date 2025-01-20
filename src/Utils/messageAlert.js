import { message } from "antd";

const messageSuccess = (text) => {
  message.success({
    content: text,
    duration: 2,
  });
};

const messageError = (text) => {
  message.error({
    content: text,
    duration: 2,
  });
};

export { messageSuccess,messageError};