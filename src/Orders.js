import * as React from "react";
import { useContext } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

import { AuthContext } from "./Context/context";

export default function Orders() {
  let { sellers } = useContext(AuthContext);
  console.log({ sellers });

  // const [showRows, setShowRows] = useState([]);

  // useEffect(() => {
  //   const rows = [
  //     {
  //       id: 0,
  //       date: "16 Mar, 2019",
  //       sellers: "Elvis Presley",
  //       sales: 10,
  //       commission: "10%",
  //       amount: 900.0,
  //     },
  //     {
  //       id: 1,
  //       date: "16 Mar, 2019",
  //       sellers: "Paul McCartney",
  //       sales: 30,
  //       commission: "10%",
  //       amount: 2400.0,
  //     },
  //     {
  //       id: 2,
  //       date: "16 Mar, 2019",
  //       sellers: "Tom Scholz",
  //       sales: 5,
  //       commission: "10%",
  //       amount: 500.0,
  //     },
  //     {
  //       id: 3,
  //       date: "16 Mar, 2019",
  //       sellers: "Michael Jackson",
  //       sales: 40,
  //       commission: "10%",
  //       amount: 2900.0,
  //     },
  //     {
  //       id: 4,
  //       date: "16 Mar, 2019",
  //       sellers: "Bruce Springsteen",
  //       sales: 15,
  //       commission: "10%",
  //       amount: 1000.0,
  //     },
  //   ];

  //   setShowRows(rows);
  // }, []);

  function preventDefault(event) {
    event.preventDefault();

    // let amountData = showRows.find((info, index, array) => info.amount) // .find()

    // let amountData = showRows.every((info, index, array) => info.amount > 1);

    // let amountData = { sellers }
    //   .map((item) => item.amount)
    //   .reduce((previous, current) => previous + current, 0);

    // console.log(amountData);
  }

  return (
    <React.Fragment>
      <Title>Resultados recentes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Vendedores</TableCell>
            <TableCell>Vendas</TableCell>
            <TableCell>Comissão</TableCell>
            <TableCell align="right">Valor Final</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellers.map((info) => {
            return (
              <TableRow key={info.id}>
                <TableCell>{info.date}</TableCell>
                <TableCell>{info.sellers}</TableCell>
                <TableCell>{info.sales}</TableCell>
                <TableCell>{info.commission}</TableCell>
                <TableCell align="right">{`$${info.amount}`}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Ver mais resultados
      </Link>
    </React.Fragment>
  );
}
