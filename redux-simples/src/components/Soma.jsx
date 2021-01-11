/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

function Soma(props) {
  const { min, max } = props;
  return (
    <Card title="Soma dos Numeros" blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{min + max}</strong>

        </span>
      </div>
    </Card>

  );
}

function mapStateToProps(state) {
  return {
    min: state.numbersReducer.min,
    max: state.numbersReducer.max,
  };
}

export default connect(mapStateToProps)(Soma);
