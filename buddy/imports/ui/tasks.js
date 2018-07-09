import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class Task extends Component {
  render() {
    return (
      <li>
         <span className="text">
          <strong>{this.props.task.username}</strong>: {this.props.task.text}
        </span>
        
        </li>
    );
  }
}