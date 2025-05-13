import PropTypes from "prop-types";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import dayjs from "dayjs";
import { Badge, Button, Popconfirm } from "antd";
import { messageError, messageSuccess } from "../../Utils/messageAlert";

const ManageRegCampAdminRow = ({ row, refetch, idx, page, rowsPerPage }) => {
  const [confirmBtnLoading, setConfirmBtnLoading] = useState(false);
  const [cancelBtnLoading, setCancelBtnLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

  const handleConfirm = async (id) => {
    try {
      setConfirmBtnLoading(true);

      const res = await axiosSecure.patch(`/set-confirm-status/${id}`);
      if (res.data.modifiedCount <= 0) {
        throw new Error("Confirmation Failed");
      }

      refetch();
      messageSuccess("Registration Confirmed")
    } catch (error) {
      messageError(error.message);
    } finally {
      setConfirmBtnLoading(false);
    }
  };

  const handleCancel = async (id) => {
    try {
      setCancelBtnLoading(true);

      const res = await axiosSecure.delete(`/delete-reg/${id}`);
      if (res.data.deletedCount <= 0) {
        throw new Error("Cancellation Failed");
      }
      refetch();
      messageSuccess("Registration Canceled");
    } catch (error) {
      messageError(error.message);
    } finally {
      setCancelBtnLoading(false);
    }
  };

  const joinDate = dayjs(row.joinDate).format("DD-MMM-YY");

  // page = 0
  // row-per-page = 5

  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      key={row._id}
      className="overflow-x-hidden"
    >
      <TableCell align="left">
        {page === 0 ? idx + 1 : idx + (rowsPerPage * page + 1)}
      </TableCell>
      <TableCell align="left">{row.participantName}</TableCell>
      <TableCell align="left">{row.campName}</TableCell>
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
          <Badge
            count={"Unpaid"}
            style={{
              backgroundColor: "red",
            }}
          />
        )}
      </TableCell>
      <TableCell align="left">
        {row.confirmationStatus ? (
          <Badge
            count={"confirmed"}
            style={{
              backgroundColor: "#52c41a",
            }}
          />
        ) : (
          <Popconfirm
            title="Confirm Registration"
            description="Are you sure to Register This camp?"
            onConfirm={() => handleConfirm(row._id)}
            okText="Confirm"
            cancelText="No"
          >
            <Button
              disabled={!row.paymentStatus}
              loading={confirmBtnLoading}
              size="small"
              style={{
                backgroundColor: "#0076BA",
                color: "white",
              }}
              variant="solid"
            >
              Pending
            </Button>
          </Popconfirm>
        )}
      </TableCell>
      <TableCell align="left">
        <Popconfirm
          title="Cancel Registration"
          description={`Are you sure to Cancel This Registration? User ${
            row.participantName
          }, ${row?.paymentStatus ? `Paid $${row.campFee}` : ""}`}
          onConfirm={() => handleCancel(row._id)}
          okText="Cancel & Remove"
          cancelText="No"
        >
          <Button
            danger
            disabled={row?.confirmationStatus}
            loading={cancelBtnLoading}
          >
            Cancel
          </Button>
        </Popconfirm>
      </TableCell>
    </TableRow>
  );
};

ManageRegCampAdminRow.propTypes = {
  row: PropTypes.object,
  refetch: PropTypes.func,
  idx: PropTypes.number,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
};

export default ManageRegCampAdminRow;
