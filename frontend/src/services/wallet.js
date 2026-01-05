// src/services/wallet.js

// Kết nối ví (MetaMask)
export const connectWallet = async () => {
  if (!window.ethereum) {
    alert("MetaMask is not installed!");
    return null;
  }

  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0] || null;
  } catch (error) {
    console.error("User rejected wallet connection:", error);
    return null;
  }
};

// Lấy account hiện tại (khi refresh trang)
export const getCurrentAccount = async () => {
  if (!window.ethereum) return null;

  try {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    return accounts.length > 0 ? accounts[0] : null;
  } catch (error) {
    console.error("Error getting current account:", error);
    return null;
  }
};

// Lắng nghe khi user đổi account trong MetaMask
// Trả về hàm cleanup để remove listener
export const listenAccountChange = (callback) => {
  if (!window.ethereum) return () => {};

  const handler = (accounts) => {
    callback(accounts.length > 0 ? accounts[0] : null);
  };

  window.ethereum.on("accountsChanged", handler);

  // cleanup (rất quan trọng)
  return () => {
    window.ethereum.removeListener("accountsChanged", handler);
  };
};
