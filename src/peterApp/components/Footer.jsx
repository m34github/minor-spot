// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Divider, Icon } from '@material-ui/core';

import styles from '../styles/';

type Props = {
  value: string
};

class Footer extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  handleChange(event, value) {
    this.setState({
      value
    })
  }

  render() {
    const { props, state } = this;
    const { footer } = styles;

    return (
      <section className={footer.root}>
        <Divider />
        <BottomNavigation
          value={state.value}
          onChange={(event, value) => { this.handleChange(event, value); }}
          showLabels
        >
          <BottomNavigationAction
            label="Personal"
            icon={<Icon>account_balance_wallet</Icon>}
            value="personal"
            onClick={() => { props.history.push('/'); }}
          />
          <BottomNavigationAction
            label="Banking"
            icon={<Icon>account_balance</Icon>}
            value="banking"
            disabled
          />
          <BottomNavigationAction
            label="Password"
            icon={<Icon>vpn_key</Icon>}
            value="password"
            onClick={() => { props.history.push('/password'); }}
          />
          <BottomNavigationAction
            label="Settings"
            icon={<Icon>settings</Icon>}
            value="settings"
            disabled
          />
        </BottomNavigation>
      </section>
    );
  }
}

export default withRouter(Footer);
