import { useState } from "react";
import { mintInvoice } from "../services/blockchain";

function SupplierView() {
  const [status, setStatus] = useState("CREATED");
  const [loading, setLoading] = useState(false);

  const handleMint = async () => {
    try {
      setLoading(true);
      const tx = await mintInvoice(100000);
      setStatus(tx.status || "CREATED");
    } catch (err) {
      console.error(err);
      alert("Mint failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Supplier Dashboard</h2>
      <p>Create a new invoice and mint it on the blockchain.</p>

      <div className="invoice-box">
        <p><strong>Invoice Value:</strong> $100,000</p>
        <p><strong>Status:</strong> {status}</p>
      </div>

      <button
        className="action-btn"
        onClick={handleMint}
        disabled={loading}
      >
        {loading ? "Minting..." : "Mint Invoice"}
      </button>
    </div>
  );
}

export default SupplierView;
