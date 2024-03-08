import React, { useState } from 'react';
import AddressInput from './AddressInput';
import AddressLookupComponent from './AddressLookupComponent';
import IntercomCodeDisplay from './IntercomCodeDisplay';
import FlatsList from './FlatsList';
import ContactForm from './ContactForm';
import './App.css';

const App: React.FC = () => {
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [intercomCode, setIntercomCode] = useState<string | null>(null);
  
  const handleAddressSelect = (address: string) => {
    setSelectedAddress(address);
    // Fetch intercom code from the database for the selected address
    // Example: setIntercomCode(fetchIntercomCode(address));
  };
  // <AddressInput onSelect={handleAddressSelect} />
  // <AddressLookupComponent />
  return (
    <div className="App">
      <h1>Address Selection</h1>
      <AddressInput onSelect={handleAddressSelect} />
      {selectedAddress && <IntercomCodeDisplay address={selectedAddress} setIntercomCode={setIntercomCode} />}
      <FlatsList />
    </div>
  );
};

export default App;
