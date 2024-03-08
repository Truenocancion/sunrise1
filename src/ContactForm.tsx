import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    surname: '',
    phoneNumber: '',
    comment: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send contactInfo to the backend
    console.log(contactInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={contactInfo.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="surname"
        value={contactInfo.surname}
        onChange={handleChange}
        placeholder="Surname"
      />
      <input
        type="text"
        name="phoneNumber"
        value={contactInfo.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <textarea
        name="comment"
        value={contactInfo.comment}
        onChange={handleChange}
        placeholder="Your comment"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
