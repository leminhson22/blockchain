import { useState } from "react";
import { buyInvoice } from "../services/blockchain";

function FinancierView() {
  const [status, setStatus] = useState("CREATED");

  const handleBuy = async () => {
    const tx = await buyInvoice(1);
    setStatus(tx.status || "FINANCED");
  };

  return (
    <div className="card">
      <h2>Financier Dashboard</h2>
      <p>Status: {status}</p>

      <button onClick={handleBuy}>
        Finance Invoice
      </button>
    </div>
  );
}

export default FinancierView;
