import { useParams } from "react-router-dom";

export default function Stock({ stocks }) {
  const params = useParams();
  const symbol = params.symbol.substring(1);
  const currentStock = stocks.filter((stock) => stock.symbol === symbol);

  const newStock = currentStock.map((stock) => {
    return [
      {
        key: "Symbol",
        value: stock.symbol,
      },
      {
        key: "Last Price",
        value: stock.lastPrice,
      },
      {
        key: "Change",
        value: stock.change.toFixed(2),
        className: stock.change > 0 ? "green" : "red",
      },
      {
        key: "High",
        value: stock.high,
      },
      {
        key: "Low",
        value: stock.low,
      },
      {
        key: "Open",
        value: stock.open,
      },
    ];
  });

  return (
    <div className="stockInfo">
      <h1>{currentStock[0].name}</h1>
      {newStock[0].map((item, index) => (
        <div key={`${item.key}-${index}`} className="stock">
          <div className="key">{`${item.key}: `}</div>
          <div className={item.className ? `value ${item.className}` : "value"}>
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}
