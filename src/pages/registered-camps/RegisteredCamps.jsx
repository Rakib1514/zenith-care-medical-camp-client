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
import SectionHeading from "../../components/SectionHeading";
import UserRegCampRow from "./UserRegCampRow";
import Search from "antd/es/input/Search";
import { Button } from "antd";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/loading-components/loading";

const RegisteredCamps = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { uid } = useParams();
  const axiosSecure = useAxiosSecure();
  const [myRegCampsData, setMyRegCampsData] = useState([]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["my-registered-camps", uid],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reg-camps/${uid}`);
      setMyRegCampsData(res.data);
      return res.data;
    },
  });

  const onSearch = async (value) => {
    const filteredData = data.filter((data) =>
      data.campName.toLowerCase().includes(value.toLowerCase())
    );
    setMyRegCampsData(filteredData);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (isLoading) {
    return <Loading/>;
  }

  return (
    <>
    <Helmet title={`Zenith | Registered Camps`}/>
      <div>
        <SectionHeading
          heading="Registered camps"
          subHeading="Take a care of your health"
        />
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
        <Button onClick={() => setMyRegCampsData(data)} className="mx-1">
          Reset
        </Button>
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
                  return (
                    <UserRegCampRow
                      key={row._id}
                      row={row}
                      page={page}
                      rowsPerPage={rowsPerPage}
                      idx={idx}
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
