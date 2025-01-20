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
import Search from "antd/es/input/Search";
import { Button } from "antd";

const ManageRegCamps = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [allRegCampData, setAllRegCampData] = useState([]);
  const axiosSecure = useAxiosSecure();

  console.log("Page", page);
  console.log("Rows per page", rowsPerPage);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["all-reg-camps"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reg-camps`);
      setAllRegCampData(res.data);
      return res.data;
    },
  });

  const onSearch = async (value) => {
    const filteredData = data.filter((data) =>
      data.campName.toLowerCase().includes(value.toLowerCase())
    );
    setAllRegCampData(filteredData);
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
    <div>
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
        <Button onClick={() => setAllRegCampData(data)} className="mx-1">
          Reset
        </Button>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
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
                .map((row, idx) => {
                  return (
                    <ManageRegCampAdminRow
                      key={row._id}
                      idx={idx}
                      row={row}
                      refetch={refetch}
                      rowsPerPage={rowsPerPage}
                      page={page}
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
    </div>
  );
};

export default ManageRegCamps;
