import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";

const RegisteredCamps = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { uid } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: myRegCampsData, isLoading } = useQuery({
    queryKey: ["my-registered-camps", uid],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reg-camps/${uid}`);
      return res.data;
    },
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (isLoading) {
    return <h2>Loading in My Registered camps</h2>;
  }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Camp Name</TableCell>
              <TableCell align="left">Fee</TableCell>
              <TableCell align="left">Participant Name</TableCell>
              <TableCell align="left">Payment Status</TableCell>
              <TableCell align="left">Confirmation Status</TableCell>
              <TableCell align="left">Cancel</TableCell>
              <TableCell align="left">FeedBack</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myRegCampsData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    <TableCell align="left">{row.campName}</TableCell>
                    <TableCell align="left">${row.campFee}</TableCell>
                    <TableCell align="left">{row.participantName}</TableCell>
                    <TableCell align="left">
                      {row.paymentStatus ? "Paid" : "Pay"}
                    </TableCell>
                    <TableCell align="left">
                      {row.confirmationStatus ? "Confirmed" : "Panding"}
                    </TableCell>
                    <TableCell align="left">Cancel</TableCell>
                    <TableCell align="left">FeedBack</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={myRegCampsData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default RegisteredCamps;
