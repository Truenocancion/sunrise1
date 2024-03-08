import React, { useState } from 'react';

interface FlatItemProps {
  id: number;
}

const FlatItem: React.FC<FlatItemProps> = ({ id }) => {
  const [showPersonDetails, setShowPersonDetails] = useState(false);
  const [vote, setVote] = useState<'for' | 'against' | 'neutral' | 'noInfo' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    comment: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to save or process the form data
    console.log("Form data:", formData);
    console.log("Vote:", vote);
  };

  return (
    <div>
      <h3>Flat {id}</h3>
      <div className="voting-container">
        <button onClick={() => setVote('for')} style={{ backgroundColor: 'green' }}>For</button>
        <button onClick={() => setVote('against')} style={{ backgroundColor: 'red' }}>Against</button>
        <button onClick={() => setVote('neutral')} style={{ backgroundColor: 'blue' }}>Neutral</button>
        <button onClick={() => setVote('noInfo')} style={{ backgroundColor: 'grey' }}>No Information</button>
      </div>
      <button onClick={() => setShowPersonDetails(!showPersonDetails)}>Person</button>
      {showPersonDetails && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
          <input type="text" name="surname" placeholder="Surname" value={formData.surname} onChange={handleInputChange} />
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
          <textarea name="comment" placeholder="Comment" value={formData.comment} onChange={handleInputChange} />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default FlatItem;
