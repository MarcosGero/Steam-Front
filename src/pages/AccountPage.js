import React from 'react';
import AccountDetails from '../components/AccountDetails';
import StoreHistory from '../components/StoreHistory';
import PaymentMethods from '../components/PaymentMethods';
import ContactInfo from '../components/ContactInfo';
import AccountSecurity from '../components/AccountSecurity';

function AccountPage() {
  return (
    <div className="container">
      <AccountDetails />
      <StoreHistory />
      <PaymentMethods />
      <ContactInfo />
      <AccountSecurity />
    </div>
  );
}

export default AccountPage;
