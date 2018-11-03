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
        <AppBar color="default" position="static">
          <Toolbar variant="dense">
            {
              props.sub ?
              <IconButton color="inherit" onClick={() => { props.history.goBack(); }}>
                <Icon>
                  arrow_back_ios
                </Icon>
              </IconButton>
              :
              <IconButton disabled>
                <Icon />
              </IconButton>
            }

            <Typography
              align="center"
              variant="h5"
              color="textPrimary"
              className={header.grow}
              style={{ fontFamily: '"Denk One", sans-serif' }}
            >
              Minor Spot
            </Typography>

            <IconButton disabled>
              <Icon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </section>
    );
  }
}

export default withRouter(Header);
