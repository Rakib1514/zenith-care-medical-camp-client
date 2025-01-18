import PropTypes from "prop-types";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import dayjs from "dayjs";
import { Badge, Button, Popconfirm } from "antd";

const ManageRegCampAdminRow = ({ row, refetch }) => {
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
    } catch (error) {
      console.log(error);
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
          description="Are you sure to Cancel And Remove This Registered camp?"
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
};

export default ManageRegCampAdminRow;
