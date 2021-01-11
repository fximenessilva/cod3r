/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const Media = (props) => {
  const { min, max } = props;

  return (
    <Card title="Media dos Numeros" green>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{(max + min) / 2}</strong>

        </span>
      </div>
    </Card>

  );
};

function mapStateToProps(state) {
  return {
    min: state.numbersReducer.min,
    max: state.numbersReducer.max,

  };
}

export default connect(mapStateToProps)(Media);
