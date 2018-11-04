import React from 'react';
import { CircularProgress } from '@material-ui/core';

import styles from '../styles/';

class Loader extends React.Component {
  render() {
    const { loader } = styles;

    return (
      <section className={loader.root}>
        <CircularProgress size={100} color="primary" />
      </section>
    );
  }
}

export default Loader
