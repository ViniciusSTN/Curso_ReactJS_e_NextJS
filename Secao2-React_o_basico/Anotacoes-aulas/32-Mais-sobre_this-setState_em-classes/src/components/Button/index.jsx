import { Component } from "react";

import './styles.css';

export class Button extends Component {
  render() {
    const {text, click, disabled} = this.props;

    return (
      <button 
        disabled={disabled}
        className="button" 
        onClick={click}
      >
        {text}
      </button>
    )
  }
}
