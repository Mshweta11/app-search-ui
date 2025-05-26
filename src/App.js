import React, { useState } from 'react';
import './App.css';

const initialApps = [
  {
    id: '1',
    name: 'Assistant',
    icon: 'https://img.icons8.com/color/48/000000/google-assistant.png',
    enabled: true
  },
  {
    id: '2',
    name: 'Calculator',
    icon: 'https://img.icons8.com/color/48/000000/calculator.png',
    enabled: false
  },
  {
    id: '3',
    name: 'Calendar',
    icon: 'https://img.icons8.com/color/48/000000/calendar.png',
    enabled: true
  },
  {
    id: '4',
    name: 'Chrome',
    icon: 'https://img.icons8.com/color/48/000000/chrome.png',
    enabled: true
  }
];

function App() {
  const [apps, setApps] = useState(initialApps);
  const [searchText, setSearchText] = useState('');

  const toggleSwitch = (id) => {
    setApps(apps.map(app =>
      app.id === id ? { ...app, enabled: !app.enabled } : app
    ));
  };

  const filteredApps = apps.filter(app =>
    app.name.toLowerCase().startsWith(searchText.toLowerCase())
  );

  return (
    <div className="container">
      <div className="header">
        <img src="https://i.pravatar.cc/100?img=44" alt="Avatar" className="avatar" />
        <h2>Shweta</h2>
        <div className="status">Connected ✅</div>
      </div>

      <div className="tabs">
        <span className="active">Applications</span>
        <span className="inactive">Settings</span>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </div>

      <ul className="app-list">
        {filteredApps.map(app => (
          <li key={app.id} className="app-item">
            <div className="app-info">
              <img src={app.icon} alt={app.name} className="app-icon" />
              <span className="app-name">{app.name}</span>
            </div>

            <label className="switch">
              <input
                type="checkbox"
                checked={app.enabled}
                onChange={() => toggleSwitch(app.id)}
              />
              <span className="slider round"></span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
