import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import dayjs from "dayjs";
import { Badge, Button, Popconfirm } from "antd";
import ModalFeedBack from "./ModalFeedBack";

const UserRegCampRow = ({ row, page, rowsPerPage, idx, refetch }) => {
  const [cancelBtnLoading, setCancelBtnLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleCancel = async (id) => {
    try {
      setCancelBtnLoading(true);

      const res = await axiosSecure.delete(`/cancel-reg/${id}`);
      if (res.data.deletedCount <= 0) {
        throw new Error("Cancellation failed. delete count 0");
      }

      refetch();
      alert("deleted");
    } catch (error) {
      console.log(error);
    } finally {
      setCancelBtnLoading(false);
    }
  };

  const joinDate = dayjs(row.joinDate).format("DD-MMM-YY");
  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
      <TableCell align="left">
        {page === 0 ? idx + 1 : idx + (rowsPerPage * page + 1)}
      </TableCell>
      <TableCell align="left">{row.campName}</TableCell>
      <TableCell align="left">{row.participantName}</TableCell>
      <TableCell align="left">${row.campFee}</TableCell>
      <TableCell align="left">{joinDate}</TableCell>
      <TableCell align="left">
        {row.paymentStatus ? (
          <Badge
            count={"Paid"}
            style={{
              backgroundColor: "#52c41a",
            }}
          />
        ) : (
          <Button
            onClick={() => navigate(`/dashboard/payment/${row._id}`)}
            size="small"
            style={{
              backgroundColor: "#0076BA",
              color: "white",
            }}
            variant="solid"
          >
            Pay
          </Button>
        )}
      </TableCell>

      <TableCell align="left">
        {row.confirmationStatus ? (
          <Badge
            count={"Confirmed"}
            style={{
              backgroundColor: "#52c41a",
            }}
          />
        ) : (
          <Badge
            count={"Pending"}
            style={{
              backgroundColor: "red",
            }}
          />
        )}
      </TableCell>

      <TableCell align="left">
        <Popconfirm
          title="Cancel Registration!"
          description="Are you sure to Cancel this Camp Registration?"
          onConfirm={() => handleCancel(row._id)}
          okText="Yes"
          cancelText="No"
        >
          <Button
            size="small"
            danger
            disabled={row.paymentStatus}
            loading={cancelBtnLoading}
          >
            Cancel
          </Button>
        </Popconfirm>
      </TableCell>

      <TableCell align="left">
        {row?.feedbackStatus ? (
          <Badge
          count={"Submitted"}
          style={{
            backgroundColor: "gray",
          }}
        />
        ) : (
          <Button
            disabled={
              row.paymentStatus && row.confirmationStatus ? false : true
            }
            onClick={() => setIsModalOpen(true)}
            type="link"
          >
            FeedBack
          </Button>
        )}
        <ModalFeedBack
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          regCamp={row}
          refetch={refetch}
        />
      </TableCell>
    </TableRow>
  );
};

UserRegCampRow.propTypes = {
  row: PropTypes.object,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  idx: PropTypes.number,
  refetch: PropTypes.func,
};

export default UserRegCampRow;
