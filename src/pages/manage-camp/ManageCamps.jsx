import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import SectionHeading from "../../components/SectionHeading";
import useCampsData from "../../hooks/useCampsData";
import ManageTableRow from "./ManageTableRow";

const ManageCamps = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { campsData, isLoading, refetch } = useCampsData();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (isLoading) {
    return <h2>Loading in admin manage camps</h2>;
  }

  return (
    <>
      <div>
        <SectionHeading
          heading="Manage Camps"
          subHeading="Organize, update, and oversee all your medical camp details effortlessly."
        />
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Camp Name</TableCell>
                <TableCell align="left">Start Date</TableCell>
                <TableCell align="left">End Date</TableCell>
                <TableCell align="left">Location</TableCell>
                <TableCell align="left">Health care Professional</TableCell>
                <TableCell align="left">Edit</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {campsData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, idx) => (
                  <ManageTableRow row={row} key={row._id} refetch={refetch} rowsPerPage={rowsPerPage} page={page} idx={idx}/>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 50]}
          component="div"
          count={campsData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default ManageCamps;
