import React from 'react';
import './Button.css';

export default props => {

  let className = 'button ';
  className += props.operation ? 'operation ' : '';
  className += props.double ? 'double ' : '';
  className += props.triple ? 'triple ' : '';

  return (
      <button 
        onClick={e => props.click && props.click(props.label)}
        className={className}>
        {props.label}
      </button>
  )
}

