import React from 'react';

export default function StatelessComponent(props) {
  return (
    <div className="stateless-component">
      <h1>Stateless Component</h1>
      <ul>
        {props.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
