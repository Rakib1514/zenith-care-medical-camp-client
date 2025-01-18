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
import SectionHeading from "../../components/SectionHeading";
import dayjs from "dayjs";
import { Badge } from "antd";
import { useState } from "react";

const PaymentHistory = () => {
  const { uid } = useParams();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  

  const axiosSecure = useAxiosSecure();

  const { data: myPayHistory = [], isLoading } = useQuery({
    queryKey: ["payment-history", uid],
    queryFn: async () => {
      const res = await axiosSecure.get(`/transactions/${uid}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <h2>Loading in history.....</h2>;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
                <TableCell>Camp Name</TableCell>
                <TableCell align="left">Fee</TableCell>
                <TableCell align="left">Payment Date</TableCell>
                <TableCell align="left">Payment Status</TableCell>
                <TableCell align="left">Confirmation Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myPayHistory
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {

                  const payDate = dayjs.unix(row.payTime).format("DD-MM-YY HH:MM")
                  
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                      <TableCell align="left">{row.campName}</TableCell>
                      <TableCell align="left">${row.campFee}</TableCell>
                      <TableCell align="left">{payDate} UTC</TableCell>
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
                            count={"Incomplete"}
                            style={{
                              backgroundColor: "red",
                            }}
                          />
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

                      
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 50]}
          component="div"
          count={myPayHistory.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default PaymentHistory;
