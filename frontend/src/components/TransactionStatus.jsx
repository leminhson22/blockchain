import { useEffect, useState } from "react";
import { getInvoiceStatus } from "../services/blockchain";

function TransactionStatus() {
  const [status, setStatus] = useState("CREATED");

  useEffect(() => {
    const interval = setInterval(async () => {
      const s = await getInvoiceStatus(1);
      setStatus(s);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="status-box">
      <strong>Invoice Lifecycle:</strong> {status}
    </div>
  );
}

export default TransactionStatus;
