/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import If from './if';

export default (props) => (
  <If test={!props.hide}>
    <button
      type="button"
      className={`btn btn-${props.style}`}
      onClick={props.onClick}
    >
      +
    </button>
  </If>
);
