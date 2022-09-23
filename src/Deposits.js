import * as React from "react";
import { useContext } from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { AuthContext } from "./Context/context";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const { amountData } = useContext(AuthContext);

  return (
    <React.Fragment>
      <Title>Valor Total</Title>
      <AuthContext.Provider value={{}}>
        <Typography component="p" variant="h4">
          R$ {amountData}
        </Typography>
      </AuthContext.Provider>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 22 Set, 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver Balanço
        </Link>
      </div>
    </React.Fragment>
  );
}
