import React, { useState, useEffect } from 'react';

interface AddressInputProps {
  onSelect: (address: string) => void;
}

const AddressInput: React.FC<AddressInputProps> = ({ onSelect }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  
  // Mock address database for demonstration purposes
  const addressDatabase = [
    "123 Main St",
    "456 Elm St",
    "789 Pine St",
    "101 Maple St",
    "234 Oak St"
  ];

  useEffect(() => {
    if (inputValue) {
      const filteredSuggestions = addressDatabase.filter(address =>
        address.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your address"
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => onSelect(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressInput;
