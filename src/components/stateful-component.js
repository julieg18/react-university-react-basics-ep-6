import React from 'react';

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
      newItem: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addNewItemToState = this.addNewItemToState.bind(this);
  }

  handleChange(e) {
    this.setState({
      newItem: e.target.value,
    });
  }

  addNewItemToState() {
    this.setState({
      items: [...this.state.items, this.state.newItem],
      newItem: '',
    });
  }

  render() {
    return (
      <div className="stateful-component">
        <h1>Stateful Component</h1>
        <ul>
          {this.state.items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Type a new item here"
          value={this.state.newItem}
          onChange={this.handleChange}
        />
        <button onClick={this.addNewItemToState}>Add Item To List</button>
      </div>
    );
  }
}

export default StatefulComponent;
