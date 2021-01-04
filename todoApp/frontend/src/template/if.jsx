/* eslint-disable no-unused-vars */
import React from 'react';

export default (props) => {
  if (props.test) {
    return props.children;
  }
  return false;
};
