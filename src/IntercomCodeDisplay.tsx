import React, { useState, useEffect } from 'react';

interface IntercomCodeDisplayProps {
  address: string;
  setIntercomCode: (code: string) => void;
}

const IntercomCodeDisplay: React.FC<IntercomCodeDisplayProps> = ({ address, setIntercomCode }) => {
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    // Assume fetchIntercomCode is an async function that fetches the intercom code for the address
    // Simulating fetching intercom code
    interface MockDatabase {
        [key: string]: string | undefined;
      }
      
    const mockDatabase: MockDatabase = {
        "123 Main St": "1234",
        "456 Elm St": "5678",
      };
      
    const fetchIntercomCode = async () => {
        // Simulate an API call
        const code = mockDatabase[address] || null;
        setCode(code);
      };
    // const fetchIntercomCode = async () => {
      // const response = await fetch(`/api/intercomCode?address=${address}`);
      // const data = await response.json();
      // if (data.code) setCode(data.code);
    // };
    fetchIntercomCode();
  }, [address]);

  const addIntercomCode = (newCode: string) => {
    setCode(newCode);
    setIntercomCode(newCode);
    // Send the newCode to the backend to be added to the database
    console.log(`Added code ${newCode} for address ${address}`);
  };

  return (
    <div>
      {code ? (
        <p>Intercom Code: {code}</p>
      ) : (
        <div>
          <p>No intercom code found for this address. Please add one.</p>
          <input type="text" onChange={(e) => setCode(e.target.value)} placeholder="Enter Intercom Code" />
          <button onClick={() => code && addIntercomCode(code)}>Add Intercom Code</button>
        </div>
      )}
    </div>
  );
};

export default IntercomCodeDisplay;
