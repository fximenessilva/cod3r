/* eslint-disable no-unused-vars */
import React from 'react';
import './Intervalo.css';
import Card from './Card';

export default (props) => (
  <Card title="Intervalo de Numeros" red>
    <div className="Intervalo">
      <span>
        <strong>Minimo:</strong>
        <input type="number" value={0} readOnly />
      </span>
      <span>
        <strong>Maximo:</strong>
        <input type="number" value={10} readOnly />
      </span>
    </div>
  </Card>
);
