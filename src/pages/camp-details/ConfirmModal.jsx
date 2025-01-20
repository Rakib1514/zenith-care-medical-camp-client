import { Button, Modal } from "antd";
import PropTypes from "prop-types";
import { FcMoneyTransfer, FcOk } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ConfirmModal = ({ confirmModal, setConfirmModal, camp, insertedId }) => {
  const { user } = useAuth();

  return (
    <Modal
      title="Registration Success"
      open={confirmModal}
      footer={false}
      onCancel={() => setConfirmModal(false)}
    >
      <div>
        <p className="font-semibold">{camp.name}</p>
        <p>Fee: ${camp.fees}</p>
        <div className="flex gap-3 items-center my-4">
          <FcOk className="text-4xl" />
          <p className="text-xl">Registration Success</p>
        </div>

        <div className=" flex gap-6">
          <Link to={`/dashboard/payment/${insertedId}`}>
            <Button className="bg-primary text-white">
              <FcMoneyTransfer className="text-xl" /> Pay Now
            </Button>
          </Link>
          <Link to={`/dashboard/registered-camps/${user?.uid}`}>
            <Button>Go to Dashboard</Button>
          </Link>
          <Button onClick={()=> setConfirmModal(false)}>Close</Button>
        </div>
      </div>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  confirmModal: PropTypes.bool,
  setConfirmModal: PropTypes.func,
  camp: PropTypes.object,
  insertedId: PropTypes.string,
};

export default ConfirmModal;
