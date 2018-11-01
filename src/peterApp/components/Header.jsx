import React from 'react';
import { withRouter } from 'react-router-dom';
import { AppBar, Icon, IconButton, Toolbar, Typography } from '@material-ui/core';

import styles from '../styles/';

class Header extends React.Component {
  render() {
    const { props } = this;
    const { header } = styles

    return (
      <section className={header.root}>
        <AppBar
          color="default"
          position={
            props.transparent ?
            'fixed' :
            'static'
          }
          style={
            props.transparent ?
            {
              background: 'rgba(0, 0, 0, 0)',
              boxShadow: 'none'
            } : {
              boxShadow: '0 2px 2px rgba(0, 0, 0, 0.2)'
            }
          }
        >
          <Toolbar variant="dense">
            {
              props.sub ?
              <IconButton color="inherit" onClick={() => { props.history.goBack(); }}>
                <Icon
                  style={
                    props.transparent ?
                    {
                      color: '#fff'
                    } : {}
                  }
                >
                  arrow_back_ios
                </Icon>
              </IconButton>
              :
              <IconButton disabled>
                <Icon />
              </IconButton>
            }
            {
              props.title ?
              <Typography
                align="center"
                variant="h6"
                color="textPrimary"
                className={header.grow}
              >
                {props.title}
              </Typography>
              :
              <Typography
                align="center"
                variant="h5"
                color="textPrimary"
                className={header.grow}
                style={{ fontFamily: '"Denk One", sans-serif' }}
              >
                { props.transparent ? '' : 'N-Peter' }
              </Typography>
            }
            {
              props.sub ?
              <IconButton disabled>
                <Icon />
              </IconButton>
              :
              <IconButton
                color="inherit"
                onClick={() => { props.tryLogout(); }}
              >
                <Icon
                  style={
                    props.transparent ?
                    {
                      color: '#fff'
                    } : {}
                  }
                >
                  exit_to_app
                </Icon>
              </IconButton>
            }
          </Toolbar>
        </AppBar>
      </section>
    );
  }
}

export default withRouter(Header);
