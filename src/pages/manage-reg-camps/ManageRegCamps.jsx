import { useQuery } from "@tanstack/react-query";
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
import SectionHeading from "../../components/SectionHeading";
import ManageRegCampAdminRow from "./ManageRegCampAdminRow";

const ManageRegCamps = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const axiosSecure = useAxiosSecure();

  const {
    data: allRegCampData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-reg-camps"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reg-camps`);
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
    <>
      <div>
        <SectionHeading
          heading="Registered camps"
          subHeading="Take a care of your health"
        />
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Participant Name</TableCell>
                <TableCell>Camp Name</TableCell>
                <TableCell align="left">Fee</TableCell>
                <TableCell align="left">Join Date</TableCell>
                <TableCell align="left">Payment Status</TableCell>
                <TableCell align="left">Confirmation Status</TableCell>
                <TableCell align="left">Cancel</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allRegCampData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <ManageRegCampAdminRow
                      key={row._id}
                      row={row}
                      refetch={refetch}
                    />
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 50]}
          component="div"
          count={allRegCampData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default ManageRegCamps;
