import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";
import { productsRequest } from "../../store/actions";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7ab01d",
    },
    secondary: {
      main: "#4CAF50",
    },
  },
});

export default function ProductsPage() {
  const dispatch = useDispatch();

  const { loading, products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(productsRequest());
  }, [dispatch]);

  const formatIso = (isoDate) => {
    const date = new Date(isoDate);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    return date.toLocaleString("en-US", options);
  };

  return (
    <Container maxWidth="md">
      {!!loading && <CircularProgress color="primary" size={20} />}
      {!loading && (
        <ThemeProvider theme={theme}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ backgroundColor: theme.palette.primary.main, color: "#fff" }}>Id</TableCell>
                  <TableCell style={{ backgroundColor: theme.palette.primary.main, color: "#fff" }} align="right">Product</TableCell>
                  <TableCell style={{ backgroundColor: theme.palette.primary.main, color: "#fff" }} align="right">Price</TableCell>
                  <TableCell style={{ backgroundColor: theme.palette.primary.main, color: "#fff" }} align="right">Creation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.productName}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">
                      {formatIso(row.creationDate)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ThemeProvider>
      )}
    </Container>
  );
}
