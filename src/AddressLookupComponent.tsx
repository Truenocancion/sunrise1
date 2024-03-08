import React, { useState } from 'react';

const AddressLookupComponent = () => {
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState<any | null>(null);

  const fetchAddressDetails = async () => {
    const response = await fetch('https://www.cikrf.ru/iservices/voter-services/committee/address/146929857482728960000622564');
    const data = await response.json();
    setDetails(data);
  };

  return (
    <div>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter address or part of it"
      />
      <button onClick={fetchAddressDetails}>Lookup Address</button>
      {details && (
        <div>
          <p>Address: {details.address.address}</p>
          <p>Description: {details.address.descr}</p>
          <p>Phone: {details.address.phone}</p>
        </div>
      )}
    </div>
  );
};

export default AddressLookupComponent;
