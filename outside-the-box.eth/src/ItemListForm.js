import React, { useState } from 'react';

function ItemListForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [images, setImages] = useState([]);
  const [serviceType, setServiceType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (serviceType === 'junkHauling') {
      // Launch modal with Stripe button
      showModalWithStripeButton();
    } else {
      // Handle normal submission for moving services
      onSubmit({ name, pickupLocation, images, serviceType });
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files).slice(0, 5 - images.length)]);
    }
  };

  const showModalWithStripeButton = () => {
    // Implement the modal logic here
    alert("Stripe Buy Button (Modal) - To be implemented");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Pickup Location"
        value={pickupLocation}
        onChange={(e) => setPickupLocation(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      <select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
        <option value="">Select Service Type</option>
        <option value="moving">Moving</option>
        <option value="junkHauling">Junk Hauling</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ItemListForm;
