function RoleSelector({ role, setRole }) {
  return (
    <div className="role-selector">
      <button onClick={() => setRole("SUPPLIER")}>Supplier</button>
      <button onClick={() => setRole("FINANCIER")}>Financier</button>
      <button onClick={() => setRole("BUYER")}>Buyer</button>
    </div>
  );
}

export default RoleSelector;
