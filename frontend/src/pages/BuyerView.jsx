import { useState } from "react";
import { settleInvoice } from "../services/blockchain";

function BuyerView() {
  const [status, setStatus] = useState("FINANCED");

  const handleSettle = async () => {
    const tx = await settleInvoice(1);
    setStatus(tx.status || "SETTLED");
  };

  return (
    <div className="card">
      <h2>Buyer Dashboard</h2>
      <p>Status: {status}</p>

      <button onClick={handleSettle}>
        Settle Invoice
      </button>
    </div>
  );
}

export default BuyerView;
