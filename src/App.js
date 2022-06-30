import React from "react";

import './App.css';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return <>
    <div className="flex-container">
      <Card/>
      <Card/>
      <Card/>
      </div>
    
    </>;
  }
}
 
export default App;