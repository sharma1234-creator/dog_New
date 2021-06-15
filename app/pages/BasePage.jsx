import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DogListContainer from 'containers/DogListContainer';
import DogPicsContainer from 'containers/DogPicsContainer';

import classNames from 'classnames/bind';
import styles from './scss/base-page';
const cx = classNames.bind(styles);

function BasePage() {
  return (
    <div className={cx('base-page')}>
      <DogListContainer />
      <DogPicsContainer />
    </div>
 );
}

export default BasePage;
