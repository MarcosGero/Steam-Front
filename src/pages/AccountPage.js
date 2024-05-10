import React from "react";
import AccountDetails from "../components/AccountDetails";

function AccountPage() {
  return (
    <div
      style={{ color: "white", backgroundColor: "#142540", minHeight: "100vh" }}
      className="homepage-content"
    >
      <AccountDetails />
    </div>
  );
}

export default AccountPage;
