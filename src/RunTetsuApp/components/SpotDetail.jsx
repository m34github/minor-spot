import React from 'react';
import { Redirect } from 'react-router-dom';

import Header from './Header.jsx';
import Loader from './Loader.jsx';
import Footer from './Footer.jsx';
// import styles from '../styles/';

class SpotDetail extends React.Component {
  render() {
    const { props } = this;

    if (!props.location.state) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <article>
        <Header sub={true} />
      </article>
    );
  }
}

export default SpotDetail;
