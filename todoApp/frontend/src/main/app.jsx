/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import 'modules/bootstrap/dist/css/bootstrap.min.css';
// import 'modules/font-aweasome/css/font-aweasome.min.css';

import React from 'react';
import Routes from './routes';
import Menu from '../template/menu';

export default (props) => (
  <div className="container">
    <Menu />
    <Routes />
  </div>
);
