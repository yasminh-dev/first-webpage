import React, { useState } from 'react';
import './App.css'; // Component-specific styles

const App: React.FC = () => {
    // Dropdown items data: each object contains the name of the dropdown and its items
    const dropdowns = [
      { label: 'Color', items: ['Forest Green', 'Sky Blue', 'Pink'] },
      { label: 'Food', items: ['Tacos', 'Pupusas', 'Samosas'] },
      { label: 'Drink', items: ['Coffee', 'Horchata', 'Pepsi', 'Mango Lassi'] },
      { label: 'Animal', items: ['Dogs', 'Lemurs', 'Penguins', 'ALL ANIMALS! :)'] },
      { label: 'Hobby', items: ['Tech learning', 'Photography', 'Playing video games'] },
      { label: 'Anime', items: ['Death Note', 'Samurai Champloo', '	Mob Psycho 100', 'Dragon Ball'] }
    ];

  // State for tracking which dropdown is open
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  // Toggle function to open and close a dropdown
  const toggleDropdown = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <div className="container">
    <h1>Fun Facts About Me!</h1>
    <p>Author: Yasmin Herrera</p>

    <h2>A list of my favorite:</h2>

    {/* Map through each dropdown */}
    {dropdowns.map((dropdown, index) => (
      <div key={index}>
        {/* Dropdown button */}
        <button className="dropdown-button" onClick={() => toggleDropdown(index)}>
          {dropdown.label}
        </button>

        {/* Dropdown menu */}
        {openDropdown === index && (
          <div className="dropdown-menu">
            <ul>
              {dropdown.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ))}
  </div>
);
};

export default App;
