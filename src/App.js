import React from 'react';
import './App.css';
import StatelessComponent from './components/stateless-component';
import StatefulComponent from './components/stateful-component';

function App() {
  return (
    <div>
      <StatelessComponent items={['truffle', 'jelly beans', 'chocolate']} />
      <StatefulComponent items={['potato', 'pie', 'pot']} />
    </div>
  );
}

export default App;
