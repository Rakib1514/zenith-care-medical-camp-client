import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
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
import dayjs from "dayjs";
import { Badge, Button, Popconfirm } from "antd";

const RegisteredCamps = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [cancelBtnLoading, setCancelBtnLoading] = useState(false);
  const { uid } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const {
    data: myRegCampsData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-registered-camps", uid],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reg-camps/${uid}`);
      return res.data;
    },
  });

  const handleCancel = async (id) => {
    try {
      setCancelBtnLoading(true);

      const res = await axiosSecure.delete(`/cancel-reg/${id}`);
      if(res.data.deletedCount <=0){
        throw new Error("Cancellation failed. delete count 0")
      }

      refetch();
      alert("deleted");
    } catch (error) {
      console.log(error);
    }finally{
      setCancelBtnLoading(false)
    }
  };

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
                <TableCell align="left">#</TableCell>
                <TableCell align="left">Camp Name</TableCell>
                <TableCell align="left">Participant</TableCell>
                <TableCell align="left">Fee</TableCell>
                <TableCell align="left">Join Date</TableCell>
                <TableCell align="left">Payment Status</TableCell>
                <TableCell align="left">Confirmation Status</TableCell>
                <TableCell align="left">Cancel</TableCell>
                <TableCell align="left">FeedBack</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myRegCampsData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, idx) => {
                  const joinDate = dayjs(row.joinDate).format("DD-MMM-YY");

                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                      <TableCell align="left">{page === 0 ? idx + 1 : idx + (rowsPerPage * page + 1)}</TableCell>
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
                            onClick={() =>
                              navigate(`/dashboard/payment/${row._id}`)
                            }
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
                      <TableCell align="left">FeedBack</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 50]}
          component="div"
          count={myRegCampsData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default RegisteredCamps;
