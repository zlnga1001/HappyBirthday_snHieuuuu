import React from 'react';
import './styles.css';
import Card from './Card';  // Assuming your Card component is in the same folder

function App() {
  return (
    <div className="App">
      <Card />
      {/* The audio element will be referenced inside the Card */}
    </div>
  );
}

export default App;
