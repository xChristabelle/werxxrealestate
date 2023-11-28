import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

const columns = [
  {
    id: "propertyAddress",
    label: "Property Address",
    minWidth: 170,
  },
  {
    id: "client",
    label: "Client",
    minWidth: 170,
  },
  {
    id: "tc",
    label: "TC",
    minWidth: 170,
  },
  {
    id: "transactionType",
    label: "Transaction Type",
    minWidth: 100,
  },
  {
    id: "createdDate",
    label: "Created Date",
    minWidth: 70,
  },
  {
    id: "acceptanceDate",
    label: "Acceptance Date",
    minWidth: 70,
  },
  {
    id: "closingDate",
    label: "Closing Date",
    minWidth: 70,
  },
  {
    id: "closedDate",
    label: "Closed Date",
    minWidth: 70,
  },
  {
    id: "documents",
    label: "Documents",
    minWidth: 100,
  },
];

const TransactionTable = ({ data, tab }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const shouldShowClosedDate =
    tab === "all" || tab === "closed" || tab === "cancelled";
  const shouldShowDocuments = tab !== "closed" && tab !== "cancelled";
  const shouldShowClosing = tab !== "closed" && tab !== "cancelled";
  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <React.Fragment key={index}>
                  {(!shouldShowClosedDate && column.id === "closedDate") ||
                  (!shouldShowDocuments && column.id === "documents") ||
                  (!shouldShowClosing && column.id === "closingDate") ? null : (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ top: 0, minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  )}
                </React.Fragment>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <React.Fragment key={column.id}>
                          {(!shouldShowClosedDate &&
                            column.id === "closedDate") ||
                          (!shouldShowDocuments && column.id === "documents") ||
                          (!shouldShowClosing &&
                            column.id === "closingDate") ? null : (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default TransactionTable;
