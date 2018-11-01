// @flow

import React from 'react';
import {
  Avatar,
  Button,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';

import { Header } from '../containers/Login';
import Loader from './Loader.jsx';
import Footer from './Footer.jsx';
import styles from '../styles/';

type Props = {
  loadPasswordData: func
};

class Password extends React.Component<Props> {
  constructor(props) {
    super(props);
    props.loadPasswordData();
  }

  render() {
    const { props } = this;
    const { password } = styles;

    const avatarize = (title) => {
      return title.length < 2 ?
        title[0] :
        title[0] + title[1];
    };

    if (!props.password.meta.isLoaded) {
      return (
        <Loader />
      );
    }

    return (
      <article>
        <Header />

        <section className={password.main}>
          <List>
            {
              Object.values(props.password.payload.passwords).map(p => (
                <section key={p.title}>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar>
                        {avatarize(p.title)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={p.title} />
                  </ListItem>
                  <Divider />
                </section>
              ))
            }
          </List>
        </section>

        <section className={password.fab}>
          <Button
            variant="fab"
            color="primary"
            onClick={() => { props.history.push('/password/regist'); }}
          >
            <Icon>add</Icon>
          </Button>
        </section>

        <Footer value="password" />
      </article>
    );
  }
}

export default Password;
