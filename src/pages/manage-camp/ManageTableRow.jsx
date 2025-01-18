import PropTypes from "prop-types";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import dayjs from "dayjs";
import { Button, Popconfirm } from "antd";
import UpdateCampModal from "./UpdateCampModal";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageTableRow = ({ row, refetch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const startDate = dayjs(row.timeFrom).format("DD-MMM-YY");
  const endDate = dayjs(row.timeTo).format("DD-MMM-YY");
  const [deleteBtnLoading, setDeleteBtnLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

  const handleRemoveCamp = async () => {
    try {
      setDeleteBtnLoading(true);
      const res = await axiosSecure.delete(`/delete-camp/${row._id}`);
      if (res.data.deletedCount <= 0) {
        throw new Error("delete failed");
      }

      // Success Flow

      refetch();
      alert("deleted");
    } catch (error) {
      console.log(error);
    } finally {
      setDeleteBtnLoading(false);
    }
  };

  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      <TableCell align="left">{row.name}</TableCell>
      <TableCell align="left">{startDate}</TableCell>
      <TableCell align="left">{endDate}</TableCell>
      <TableCell align="left">{row.location}</TableCell>
      <TableCell align="left">{row.healthcareProfessional}</TableCell>

      {/* Edit */}
      <TableCell align="left">
        <Button
          onClick={() => setIsModalOpen(true)}
          size="small"
          style={{
            backgroundColor: "#0076BA",
            color: "white",
          }}
          variant="solid"
        >
          Edit
        </Button>
        <UpdateCampModal
          camp={row}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </TableCell>

      {/* Delete */}
      <TableCell align="left">
        <Popconfirm
          title="Remove the Camp"
          description="Are you sure to Remove this Camp?"
          onConfirm={handleRemoveCamp}
          okText="Remove"
          cancelText="No"
        >
          <Button size="small" danger loading={deleteBtnLoading}>
            Remove
          </Button>
        </Popconfirm>
      </TableCell>
    </TableRow>
  );
};

ManageTableRow.propTypes = {
  row: PropTypes.object,
  refetch: PropTypes.func,
};

export default ManageTableRow;
