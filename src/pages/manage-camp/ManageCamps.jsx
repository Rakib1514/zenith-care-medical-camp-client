import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import SectionHeading from "../../components/SectionHeading";
import useCampsData from "../../hooks/useCampsData";
import ManageTableRow from "./ManageTableRow";
import Search from "antd/es/input/Search";
import { Button } from "antd";
import { Helmet } from "react-helmet-async";

const ManageCamps = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [campsData, setCampsData] = useState([]);

  const { campsData: data, isLoading, refetch } = useCampsData();

  useEffect(() => {
    setCampsData(data);
  }, [data]);

  const onSearch = async (value) => {
    const filteredData = data.filter((data) =>
      data.name.toLowerCase().includes(value.toLowerCase())
    );
    setCampsData(filteredData);
  };

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
      <Helmet title={`Zenith | Manage Camps`} />
      <div>
        <SectionHeading
          heading="Manage Camps"
          subHeading="Organize, update, and oversee all your medical camp details effortlessly."
        />
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
        <Button onClick={() => setCampsData(data)} className="mx-1">
          Reset
        </Button>
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
                  <ManageTableRow
                    row={row}
                    key={row._id}
                    refetch={refetch}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    idx={idx}
                  />
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
