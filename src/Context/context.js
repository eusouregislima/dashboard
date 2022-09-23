import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [sellers, setSellers] = useState([]);
  const [amountData, setAmountData] = useState([]);

  useEffect(() => {
    const rows = [
      {
        id: 0,
        date: "16 Mar, 2019",
        sellers: "Elvis Presley",
        sales: 10,
        commission: "10%",
        amount: 900.0,
      },
      {
        id: 1,
        date: "16 Mar, 2019",
        sellers: "Paul McCartney",
        sales: 30,
        commission: "10%",
        amount: 2400.0,
      },
      {
        id: 2,
        date: "16 Mar, 2019",
        sellers: "Tom Scholz",
        sales: 5,
        commission: "10%",
        amount: 500.0,
      },
      {
        id: 3,
        date: "16 Mar, 2019",
        sellers: "Michael Jackson",
        sales: 40,
        commission: "10%",
        amount: 2900.0,
      },
      {
        id: 4,
        date: "16 Mar, 2019",
        sellers: "Bruce Springsteen",
        sales: 15,
        commission: "10%",
        amount: 5000.0,
      },
    ];

    setSellers(rows);

    let amountData = rows
      .map((item) => item.amount)
      .reduce((previous, current) => previous + current, 0);

    // let salesData = rows
    //   .map((item) => item.sales)
    //   .reduce((previous, current) => previous + current, 0);

    console.log(amountData);
    setAmountData(amountData);
    // console.log(salesData);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        amountData,
        sellers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
