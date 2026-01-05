import React from "react";

const Navbar = ({ account, network }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>Blockchain Supply Chain Finance</h2>
        <span className="subtitle">Live Demo – Invoice Lifecycle</span>
      </div>

      <div className="navbar-right">
        <div className="network">
          Network: <strong>{network || "Localhost"}</strong>
        </div>
        <div className="account">
          Account:{" "}
          <strong>
            {account
              ? `${account.slice(0, 6)}...${account.slice(-4)}`
              : "Not connected"}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
