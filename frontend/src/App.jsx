import { useEffect, useState } from "react";
import SupplierView from "./pages/SupplierView";
import FinancierView from "./pages/FinancierView";
import BuyerView from "./pages/BuyerView";
import Navbar from "./components/Navbar";
import RoleSelector from "./components/RoleSelector";
import TransactionStatus from "./components/TransactionStatus";

import {
  connectWallet,
  getCurrentAccount,
  listenAccountChange,
} from "./services/wallet";

function App() {
  const [role, setRole] = useState("SUPPLIER");
  const [account, setAccount] = useState(null);
  const [network, setNetwork] = useState("Localhost");

  // Load wallet on app start
  useEffect(() => {
    getCurrentAccount().then(setAccount);
    const cleanup = listenAccountChange(setAccount);

    return cleanup;
  }, []);

  const handleConnectWallet = async () => {
    const acc = await connectWallet();
    if (acc) setAccount(acc);
  };

  return (
    <div className="app-container">
      <Navbar account={account} network={network} />

      {!account && (
        <div style={{ textAlign: "center", margin: "1rem" }}>
          <button onClick={handleConnectWallet}>
            Connect Wallet
          </button>
        </div>
      )}

      <header className="header">
        <RoleSelector role={role} setRole={setRole} />
      </header>

      <main className="main-content">
        <TransactionStatus />

        {role === "SUPPLIER" && <SupplierView />}
        {role === "FINANCIER" && <FinancierView />}
        {role === "BUYER" && <BuyerView />}
      </main>

    </div>
  );
}

export default App;
