import React from "react";

const statusColor = {
  Created: "status-created",
  Financed: "status-financed",
  Settled: "status-settled",
};

const InvoiceCard = ({ tokenId, value, status }) => {
  return (
    <div className="invoice-card">
      <h3>Invoice Token #{tokenId}</h3>

      <div className="invoice-info">
        <p>
          <strong>Value:</strong> ${value}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span className={`status ${statusColor[status]}`}>
            {status}
          </span>
        </p>
      </div>
    </div>
  );
};

export default InvoiceCard;
