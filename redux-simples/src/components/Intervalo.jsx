/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import './Intervalo.css';
import Card from './Card';

function Intervalo(props) {
  const { min, max } = props;
  return (
    <Card title="Intervalo de Numeros" red>
      <div className="Intervalo">
        <span>
          <strong>Minimo:</strong>
          <input type="number" value={min} readOnly />
        </span>
        <span>
          <strong>Maximo:</strong>
          <input type="number" value={max} readOnly />
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToProps)(Intervalo);
