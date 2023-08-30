import { useEffect } from "react";
import { useState } from "react";
import StocksRow from "../components/StocksRow";

export default function Stocks({ stocks }) {
  const apiKey = "481ebdb09b79307829689ac914c30d9d";
  const url = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=${apiKey}`;

  // const getStocks = async () => {
  //   try{
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setStocks(data);
  //   } catch(e){
  //     console.error(e)
  //   }
  // };

  // useEffect(() => {
  //   getStocks();
  // }, []);

  return (
    <>
      {stocks?.length ? (
        <div className="stocks">
          <h1>Most Active Stocks</h1>
          <div className="storcksRow">
            <div className="company">
              <h3>Company Name</h3>
            </div>
            <div className="price">
              <h3>Price</h3>
            </div>
            <div className="changes">
              <h3>Change</h3>
            </div>
          </div>
          {stocks.map((stock, index) => (
            <StocksRow stock={stock} isLast={index === stocks.length - 1} />
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

// 481ebdb09b79307829689ac914c30d9d
