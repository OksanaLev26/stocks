import { useNavigate } from "react-router-dom";

export default function StocksRow({ stock, isLast }) {
  const navigateTo = useNavigate();

  const changePercentage =
    -(
      (stock.lastPrice - (stock.lastPrice + stock.change)) /
      (stock.lastPrice + stock.change)
    ) * 100;
  const change =
    changePercentage > 0
      ? `+${changePercentage.toFixed(2)}`
      : changePercentage.toFixed(2);

  const changesClassName = changePercentage > 0 ? "green" : "red";

  const handleStockClick = () => {
    navigateTo(`/stocks/:${stock.symbol}`);
  };

  return (
    <div key={stock.name}>
      <div className="storcksRow" onClick={handleStockClick}>
        <div className="company">{stock.name}</div>
        <div className="price">{stock.lastPrice}</div>
        <div className={`changes ${changesClassName}`}>{`${stock.change.toFixed(
          2
        )} (${change}%)`}</div>
      </div>
      {!isLast && <div className="divider"></div>}
    </div>
  );
}
