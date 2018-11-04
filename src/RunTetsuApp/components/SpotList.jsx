// @flow

import React from 'react';
import {
  Avatar,
  Button,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

import Header from './Header.jsx';
import Loader from './Loader.jsx';
import Footer from './Footer.jsx';
import styles from '../styles/';

type Props = {
  loadSpots: func,
  loadUsers: func
};

class SpotList extends React.Component<Props> {
  constructor(props) {
    super(props);
    props.loadSpots('/assets/data/spots.json');
    props.loadUsers('/assets/data/users.json');
  }

  render() {
    const { props } = this;
    const { spotList } = styles;

    const getUser = (id) => {
      const register = props.spot.payload.users.filter(user => { return (user.id === id) })[0];
      return register.avatar ?
        register.avatar :
        'https://avatars.dicebear.com/v2/' + register.gender + '/' + register.name + '.svg';
    };

    if (!props.spot.meta.spotsIsLoaded || !props.spot.meta.usersIsLoaded) {
      return (
        <Loader />
      );
    }

    return (
      <article>
        <Header />

        <section className={spotList.main}>
          <List>
            {
              props.spot.payload.spots.map(d => (
                <section key={d.id}>
                  <ListItem button onClick={() => {
                    props.history.push({
                      pathname: '/spot/detail/' + d.id,
                      state: d
                    });
                  }}>
                    <Avatar src={getUser(d.register)} />
                    <ListItemText primary={d.title} />
                  </ListItem>
                  <Divider />
                </section>
              ))
            }
          </List>
        </section>

        <section className={spotList.fab}>
          <Button
            variant="fab"
            color="primary"
            onClick={() => { props.history.push('/spot/regist'); }}
          >
            <Icon>add</Icon>
          </Button>
        </section>

        <Footer value="spot" />
      </article>
    );
  }
}

export default SpotList;
