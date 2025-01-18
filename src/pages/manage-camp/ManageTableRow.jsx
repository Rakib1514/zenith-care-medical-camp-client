import PropTypes from "prop-types";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import dayjs from "dayjs";
import { Button } from "antd";
import UpdateCampModal from "./UpdateCampModal";

const ManageTableRow = ({ row }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const startDate = dayjs(row.timeFrom).format("DD-MMM-YY");
  const endDate = dayjs(row.timeTo).format("DD-MMM-YY");

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
        <Button
          onClick={() => console.log(1)}
          size="small"
          style={{
            backgroundColor: "#0076BA",
            color: "white",
          }}
          variant="solid"
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

ManageTableRow.propTypes = {
  row: PropTypes.object,
};

export default ManageTableRow;
