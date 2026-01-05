// src/services/blockchain.js
import { ethers } from "ethers";
import contractInfo from "../config/contract.json";
import InvoiceTokenABI from "../../../abi/InvoiceToken.json";

/**
 * Toggle MOCK_MODE = false khi deploy contract thật
 */
const MOCK_MODE = true;

let mockStatus = "CREATED";

/* ---------------- CONTRACT ---------------- */

const getContract = async () => {
  if (!window.ethereum) throw new Error("MetaMask not found");

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  return new ethers.Contract(
    contractInfo.address,
    InvoiceTokenABI,
    signer
  );
};

/* ---------------- MOCK ---------------- */

const mockTx = (nextStatus) =>
  new Promise((resolve) => {
    setTimeout(() => {
      mockStatus = nextStatus;
      resolve({
        hash: "0xMOCK_TX",
        status: mockStatus,
      });
    }, 1200);
  });

/* ---------------- EXPORT API ---------------- */

export const mintInvoice = async (amount) => {
  if (MOCK_MODE) return mockTx("CREATED");

  const contract = await getContract();
  const tx = await contract.mintInvoice(
    ethers.parseEther(amount.toString())
  );
  await tx.wait();
  return tx;
};

export const buyInvoice = async (invoiceId) => {
  if (MOCK_MODE) return mockTx("FINANCED");

  const contract = await getContract();
  const tx = await contract.buyInvoice(invoiceId);
  await tx.wait();
  return tx;
};

export const settleInvoice = async (invoiceId) => {
  if (MOCK_MODE) return mockTx("SETTLED");

  const contract = await getContract();
  const tx = await contract.settleInvoice(invoiceId);
  await tx.wait();
  return tx;
};

export const getInvoiceStatus = async (invoiceId) => {
  if (MOCK_MODE) return mockStatus;

  const contract = await getContract();
  return await contract.getStatus(invoiceId);
};
