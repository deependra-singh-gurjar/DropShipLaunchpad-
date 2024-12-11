import React, { useState } from 'react';

function NicheSelectionPage() {
  const [niche, setNiche] = useState('');

  const handleNicheChange = (e) => {
    setNiche(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Selected Niche:', niche);
  };

  return (
    <div>
      <h1>Select Your Niche</h1>
      <input
        type="text"
        value={niche}
        onChange={handleNicheChange}
        placeholder="Enter your niche"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default NicheSelectionPage;
